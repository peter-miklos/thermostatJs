require "spec_helper"
require "json"

feature "Store temperature and mode" do
  include Rack::Test::Methods

  def app
    App
  end

  scenario "the last version of thermostat temperature and mode can be stored" do
    post '/thermostat', params = {temperature: 18, mode: true}
    expect(Thermostat.last.temperature).to eq 18
  end

end

feature "returns temperature and mode" do
  scenario "returns the latest version of the temperature and mode" do

  end
end
