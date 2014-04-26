require 'rubygems'
require 'twilio-ruby'
require 'sinatra'

get '/' do
  account_sid = 'ACf6731282b39f4a5dfece1428cd9db6eb'
  auth_token = '17c7cfde9ff1d4e2728cd428ec0b175a'
  capability = Twilio::Util::Capability.new account_sid, auth_token
  # Create an application sid at twilio.com/user/account/apps and use it here
  capability.allow_client_outgoing "APd9886b158d6e4a05509f4d8469ac3e9e"
  capability.allow_client_incoming "player"
  token = capability.generate
  puts token
  str = 'Hello World! Currently running version ' + Twilio::VERSION + \
  ' of the twilio-ruby library.'
end

get '/send' do
  account_sid = "ACf6731282b39f4a5dfece1428cd9db6eb"
  auth_token = "17c7cfde9ff1d4e2728cd428ec0b175a"
  client = Twilio::REST::Client.new account_sid, auth_token

  messages = [
    "How are you driving?",
    "Don't get distracted!",
    "Keep going!",
    "Don't hit anything."
  ]
  from = "+19083645572" # Your Twilio number

  randmsg = rand(messages.size)

  friends = {
    "+19734619232" => "Curious George"
  }
  friends.each do |key, value|
    client.account.messages.create(
      :from => from,
      :to => key,
      :body => messages[randmsg]
    )
    puts "Sent #{messages[randmsg]} to #{value}"
  end
end

post '/reply' do
  response = Twilio::TwiML::Response.new do |r|
    # Should be your Twilio Number or a verified Caller ID
    r.Dial :callerId => '+19083645572' do |d|
        d.Client 'player'
    end
  end
  response.text
end
