require 'data_mapper'
require 'dm-postgres-adapter'
require './app/models/thermostat'
require './app/models/city'

# later you'll need to require the models that are using DM to connect to your DB

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/weather_#{ENV['RACK_ENV']}")
DataMapper::Logger.new($stdout, :debug)
DataMapper.finalize
DataMapper.auto_upgrade!
