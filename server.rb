# frozen_string_literal: true

require 'sinatra'
require 'net/http'
require 'json'
require 'dotenv/load'
require 'rack/throttle'
require 'redcarpet'

use Rack::Throttle::Hourly, max: 200

API_URL = ENV['API_URL'] || raise('Missing API_URL')

helpers do
  def smart_template(view)
    if request.env['HTTP_HX_REQUEST'] == 'true'
      erb view.to_sym, layout: false
    else
      erb view.to_sym
    end
  end

  def fetch_api(url)
    uri = URI(url)
    Net::HTTP.get(uri)
  end

  def project_markdown(file_path)
    proj_md = Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true, fenced_code_blocks: true)
    proj_content = File.read(file_path)
    proj_md.render(proj_content)
  rescue Errno::ENOENT
    '<p>Project not found.</p>'
  end
end

get '/' do
  smart_template(:index)
end

get '/about' do
  smart_template(:about)
end

get '/contact' do
  smart_template(:contact)
end

get '/blog' do
  smart_template(:blog_list)
end

get '/api/blog' do
  page = params[:page] || 1
  blogposts = fetch_api("#{API_URL}/blog?page=#{page}")
  { blogposts: blogposts }.to_json
end

get '/blog/:id' do
  article_id = params[:id]
  post = fetch_api("#{API_URL}/blog/#{article_id}")

  @post = {
    title: post['title'],
    author: post['author'] || 'Unknown',
    thumbnail: post['thumbnail'],
    content: post['content'],
    date: post['date']
  }

  erb :blog_article
end

get '/projects/:lang/:project' do
  @lang = params[:lang]
  halt 400, 'Invalid Language' unless %w[en fr].include?(@lang)

  file_path = "./public/locales/#{@lang}/#{params[:project]}.md"
  @project_content = project_markdown(file_path)

  smart_template(:project)
end

set :public_folder, File.join(__dir__, 'public')
set :views, File.join(settings.public_folder, 'views')

set :environment, :production
set :port, ENV.fetch('PORT', 8080)
set :bind, '0.0.0.0'
