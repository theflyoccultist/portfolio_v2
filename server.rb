# frozen_string_literal: true

require 'sinatra'
require 'net/http'
require 'json'
require 'dotenv/load'

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
  response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
end

API_URL = 'https://www.blogging-platform.rinkakuworks.com/backend' || raise('Missing BLOG_API_URL')

# Handle CORS preflight requests
options '*' do
  200
end

helpers do
  def fetch_api(url)
    uri = URI(url)
    response = Net::HTTP.get_response(uri)

    case response
    when Net::HTTPSuccess
      JSON.parse(response.body)
    when Net::HTTPNotFound
      halt 404, { error: 'Not found' }.to_json
    else
      halt 500, { error: 'API request failed' }.to_json
    end
  rescue JSON::ParserError
    halt 500, { error: 'Invalid JSON response from API' }.to_json
  rescue StandardError => e
    halt 500, { error: "Unexpected error: #{e.message}" }.to_json
  end
end

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

get '/api/blog' do
  page = params[:page] || 1
  blogposts = fetch_api("#{API_URL}/api/blog?page=#{page}")
  { blogposts: blogposts }.to_json
end

get '/blog/:id' do
  article_id = params[:id]
  blogpost = fetch_api("#{API_URL}/api/blog/#{article_id}")

  @page_title = blogpost['title']

  erb :blog_article, layout: :layout_blog, locals: { post: blogpost }
end

set :public_folder, File.join(__dir__, 'public')
set :views, File.join(settings.public_folder, 'views')

set :environment, :production
set :port, ENV.fetch('PORT', 8080)
set :bind, '0.0.0.0'
