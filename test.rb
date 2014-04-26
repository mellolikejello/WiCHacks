require 'rubygems'
require 'twilio-ruby'
require 'sinatra'

get '/' do
  'Hello World! Currently running version ' + Twilio::VERSION + \
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
