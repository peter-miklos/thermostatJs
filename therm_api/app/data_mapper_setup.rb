require 'data_mapper'
require 'dm-postgres-adapter'
require './app/models/thermostat.rb'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/thermostat_#{ENV['RACK_ENV']}")
DataMapper::Logger.new($stdout, :debug)
DataMapper.finalize
DataMapper.auto_upgrade!
