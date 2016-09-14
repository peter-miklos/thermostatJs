class City
  include DataMapper::Resource

  property :id, Serial
  property :app_id, String
  property :city_1, String
  property :city_2, String
  property :city_3, String
  property :city_4, String

end
