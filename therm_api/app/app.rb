require 'sinatra/base'
require_relative 'data_mapper_setup'

ENV["RACK_ENV"] ||= "development"


class App < Sinatra::Base
  get '/' do
    'Hello App!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
