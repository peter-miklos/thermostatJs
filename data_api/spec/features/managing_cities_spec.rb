require 'spec_helper'
require 'json'

feature "Store cities" do
  include Rack::Test::Methods

  def app
    App
  end

  scenario "last checked cities can be stored in db" do
    post '/cities', params = {appid: "1",
                  city_1: "Boston", city_2: "Budapest",
                  city_3: "Bagdad", city_4: "Bournemouth"}
    expect(City.first.city_3).to eq "Bagdad"
    expect(City.first.city_1).to eq "Boston"
  end
end

feature "Return cities" do
  include Rack::Test::Methods

  def app
    App
  end

  scenario "most recently saved cities are returned" do
    post '/cities', params = {appid: "1", city_1: "Andover", city_2: "Aachen",
                  city_3: "Athen", city_4: "Auckland"}
    post '/cities', params = {appid: "1", city_1: "Boston", city_2: "Budapest",
                  city_3: "Bagdad", city_4: "Bournemouth"}
    post '/cities', params = {appid: "1", city_1: "Chicago", city_2: "Cairo",
                  city_3: "Cancun", city_4: "Cleveland"}
    get "/cities?appid=1"

    last_entry = JSON.parse(last_response.body)

    expect(last_entry["city_3"]).to eq "Cancun"
  end
end
