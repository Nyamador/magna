from django.http import HttpResponse
import requests
from requests.exceptions import  Timeout


def get_payment_url():
    # Returns a payment url for payment with flutterwave
    endpoint = "https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay"
    data = {
        # 	'PBFPubKey'	 : 'FLWPUBK_TEST-c8bb1d6e02ef6a75ddabf41b42c0eac8-X',
        # 	'currency' : 'GHS',
        # 	'amount': '100',
        # 	# 'txref': 'GBG-ACCRA',
        #     'txref': payload['txref'],
        # 	# 'customer_email': 'nyamadordesmond@gmail.com',
        #     'customer_email' : payload['customer_email'],
        # 	# 'customer_phone' : '0206335155',
        #     'customer_phone' : payload['customer_phone'],
        # 	'customer_firstname' : 'Desmond',
        # 	'customer_lastname' : 'Nyamador',
        # 	'pay_button_text' : 'Buy Ticket',
        # 	'custom_title' : payload['custom_title']
        # 	'redirect_url' : "http://localhost:8000/su"
    }
    r = requests.get(endpoint, data=data)
    if r.status_code == 200:
        return HttpResponse(r.content)
    return HttpResponse(status=404)