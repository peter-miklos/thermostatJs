require 'spec_helper'

describe App do
  include Rack::Test::Methods

  def app
    described_class
  end

  it 'saves on post request' do
    post '/thermostat', params = {appid:1, temperature:18, mode:'on', temperatureunit:'metric'}
    expect(Thermostat.first.temperature).to equal(18)
  end

end
