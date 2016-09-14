ENV["RACK_ENV"] ||= "development"
require 'sinatra/base'
require_relative './app/data_mapper_setup.rb'
require_relative './app/models/thermostat.rb'
require 'data_mapper'
require 'json'

class App < Sinatra::Base

  set :views, File.dirname(__FILE__) + '/app/views'
  set :public_folder, File.dirname(__FILE__) + '/app/public'
  get '/' do
    erb :index
  end

  get "/thermostat" do
    app_id = params[:appid]
    thermostat_entry = Thermostat.last(app_id: app_id)
    content_type :json
    { temperature: thermostat_entry.temperature, mode: thermostat_entry.mode }.to_json
  end

  post '/thermostat' do
    thermo = Thermostat.new(app_id: params[:appid], temperature: params[:temperature], temperature_unit: params[:temperatureunit], mode: params[:mode])
    thermo.save
  end

  get "/cities" do
    app_id = params[:appid]
    cities = City.last(app_id: app_id)
    content_type :json
    { city_1: cities.city_1, city_2: cities.city_2, city_3: cities.city_3, city_4: cities.city_4 }.to_json
  end

  post "/cities" do
    City.create(app_id: params[:appid], city_1: params[:city_1],
          city_2: params[:city_2], city_3: params[:city_3],
          city_4: params[:city_4])
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
