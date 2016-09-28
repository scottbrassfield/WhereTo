var request = require('request');

request.post('https://api.yelp.com/oauth2/token',
  {form:
    {
      grant_type: 'client_credentials',
      client_id: '-Si-ErhjaR6EPFIOoIGSZg',
      client_secret: 'NyN7Mab0RUcivlTiXBM0az42J9mret2S08TMP1YwARv7z8cigKp8dho1P6OYR0Vx'
    }
  }, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body);
    }
  })

//Returned Access Token
//AmBceSCMl4SOzWEZ6uuIz0odCOvvH_XxlVW3NgVVSA70fv2JS_gAFcWQNMYVlDkdl-2W52FZeM410EzDJ_jqSxVegIyPPTdxncPaDSzLs9YlHR1NJmoeyybeE6LrV3Yx
