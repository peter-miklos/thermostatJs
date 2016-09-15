require 'sinatra/base'
require_relative './app/data_mapper_setup.rb'
require_relative "./app/models/thermostat.rb"
require 'data_mapper'
require "json"

ENV["RACK_ENV"] ||= "development"


class App < Sinatra::Base

  set :views, File.dirname(__FILE__) + '/app/views'
  set :public_folder, File.dirname(__FILE__) + '/app/public'

  get '/' do
    erb :index
  end

  post '/thermostat' do
    Thermostat.create(temperature: params[:temperature], mode: params[:mode])
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
