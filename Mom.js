var UI = require('ui');
var ajax = require('ajax');

var card = new UI.Card({
      title:'Emergency App',
      subtitle:'Messaging for help'
    });
    
// Display the Card
card.show();

ajax({
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    method: 'post',
    type: 'json',
    data: {
        'key': '55555555555555555555555', //retracted for public code
        'message': {
            'from_email': '555-555-5555@vtext.com', //retracted for public code
            'to': [
                {
                    'email': '555-555-5555@vtext.com', //retracted for public code
                    'name': 'Josh',
                    'type': 'to'
                },
                {
                    'email': '555-555-5555@vtext.com', //retracted for public code
                    'name': 'Mark',
                    'type': 'to'
                },
            ],
                'autotext': 'true',
                'html': 'Michelle needs help!'
                }
            }
});