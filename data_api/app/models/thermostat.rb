require_relative '../data_mapper_setup'

class Thermostat
  include DataMapper::Resource

  property :id, Serial
  property :app_id, String
  property :temperature, Integer
  property :temperature_unit, String
  property :mode, String
end
