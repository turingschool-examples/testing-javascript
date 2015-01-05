require 'bundler'

Bundler.require

require 'sinatra/base'
require 'yaml/store'
require 'json'

class TestingJavaScript < Sinatra::Base

  before do
    content_type 'application/json'
  end

  get '/' do
    { status: :ok }.to_json
  end

  get '/notes' do
    STORE.transaction { STORE["ideas"] }.to_json
  end

  post '/notes' do
    halt 500, error_params unless params["title"] && params["body"]
    STORE.transaction do
      STORE["ideas"] << { title: params["title"], body: params["body"] }
      STORE["ideas"].last
    end.to_json
  end

  get '/notes/:id' do
    STORE.transaction do
      halt_if_out_of_range
      STORE["ideas"][id]
    end.to_json
  end

  put '/notes/:id' do
    halt 500, error_params unless params["title"] && params["body"]
    STORE.transaction do
      halt_if_out_of_range
      STORE["ideas"][id] = { title: params["title"], body: params["body"] }
    end.to_json
  end

  delete '/notes/:id' do
    STORE.transaction do
      halt_if_out_of_range
      STORE["ideas"].delete_at(id)
    end.to_json
  end

  def id
    params[:id].to_i - 1
  end

  def error_params
    { error: 'Bad params', params: params }.to_json
  end

  def halt_if_out_of_range
    error = { error: 'Out of range' }.to_json
    halt 500, error if id + 1 > STORE["ideas"].count
  end

end

STORE = YAML::Store.new("./server/ideas.yaml")
STORE.transaction do
  STORE["ideas"] = [
    { title: "Million-dollar idea", body: "Lorem ipsum" },
    { title: "Hundred-dollar idea", body: "Lorem ipsum" },
  ]
end