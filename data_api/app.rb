ENV["RACK_ENV"] ||= "development"
require 'sinatra/base'
require_relative './app/data_mapper_setup.rb'
require_relative './app/models/thermostat.rb'
require 'data_mapper'

class App < Sinatra::Base
  get '/' do
    'Hello App!'
  end

  post '/thermostat' do
    thermo = Thermostat.new(app_id: params[:appid], temperature: params[:temperature], temperature_unit: params[:temperatureunit], mode: params[:mode])
    thermo.save
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
