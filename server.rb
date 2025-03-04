require 'sinatra'
require 'net/http'
require 'json'
require 'dotenv/load'

configure do
    enable :cross_origin # Enable CORS globally
  end
  
  before do
    response.headers['Access-Control-Allow-Origin'] = '*' # Allow all origins
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
  end
  
  API_URL = ENV['BLOG_API_URL']
  
  # Handle CORS preflight requests
  options '*' do
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    200
  end

get '/api/blog' do
    page = params[:page] || 1
    uri = URI("#{API_URL}/api/blog?page=#{page}")
    response = Net::HTTP.get(uri)

    halt 500, { error: "Failed to fetch blog posts" }.to_json unless response

    blogposts = JSON.parse(response)
    { blogposts: blogposts }.to_json
end

get '/api/blog/:id' do
    article_id = params[:id]
    uri = URI("#{API_URL}/api/blog/#{article_id}")
    response = Net::HTTP.get(uri)

    halt 500, { error: "Failed to fetch blog post" }.to_json unless response

    content_type :json
    response
end

set :public_folder, File.dirname(__FILE__) + '/static'