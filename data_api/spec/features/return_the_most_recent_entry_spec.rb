require 'spec_helper'
require 'json'

describe App do
  include Rack::Test::Methods

  def app
    described_class
  end

  it 'saves on post request' do
    post '/thermostat', params = {appid: "1", temperature: 18, mode: true, temperatureunit: 'metric'}
    post '/thermostat', params = {appid: "1", temperature: 19, mode: true, temperatureunit: 'metric'}
    post '/thermostat', params = {appid: "1", temperature: 20, mode: false, temperatureunit: 'metric'}
    get '/thermostat?appid=1'


    latest_entry = JSON.parse(last_response.body)

    expect(latest_entry['temperature']).to eq 20
  end

end
