# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

message = client.messages \
    .create(
         body='McAvoy or Stewart? These timelines can get so confusing.',
         from_='+15017122661',
         status_callback='http://postb.in/1234abcd',
         to='+15558675310'
     )

print(message.sid)
print(account_sid)
