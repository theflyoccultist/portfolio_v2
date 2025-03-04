require 'sinatra'
require 'net/http'
require 'json'
require 'dotenv/load'

configure do
    enable :cross_origin
  end
  
before do
  response.headers['Access-Control-Allow-Origin'] = 'https://www.rinkakuworks.com'
  response.headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
  response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
end

API_URL = ENV['BLOG_API_URL'] || raise("Missing BLOG_API_URL in environment variables")

# Handle CORS preflight requests
options '*' do
  200
end

helpers do
  def fetch_api_data(url)
    uri = URI(url)
    response = Net::HTTP.get_response(uri)

    case response
    when Net::HTTPSuccess
      JSON.parse(response.body)
    when Net::HTTPNotFound
      halt 404, { error: "Not found" }.to_json
    else
      halt 500, { error: "API request failed" }.to_json
    end
  rescue JSON::ParserError
    halt 500, { error: "Invalid JSON response from API" }.to_json
  rescue StandardError => e
    halt 500, { error: "Unexpected error: #{e.message}" }.to_json
  end
end

get '/api/blog' do
    page = params[:page] || 1
    blogposts = fetch_api_data("#{API_URL}/api/blog?page=#{page}")
    { blogposts: blogposts }.to_json
end

get '/api/blog/:id' do
    article_id = params[:id]
    blogpost = fetch_api_data("#{API_URL}/api/blog/#{article_id}")
    { blogpost: blogpost }.to_json
end

set :public_folder, File.dirname(__FILE__)