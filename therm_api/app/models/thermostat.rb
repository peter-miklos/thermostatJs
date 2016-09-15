require_relative "../data_mapper_setup.rb"

class Thermostat
  include DataMapper::Resource

  property :id, Serial
  property :temperature, Integer
  property :mode, Boolean
   
end
