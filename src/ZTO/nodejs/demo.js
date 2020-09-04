const request = require('request')
var crypto = require('crypto');
var fetch = require('node-fetch');
var querystring = require('querystring');
let company_id = "your_company_id";
let key = "your_key";
let requestBody = {
  data: "['728350000001']",
  company_id: company_id,
  msg_type: "NEW_TRACES"
}

let query_string = [];
for(let k in requestBody){
  query_string.push(k+"="+requestBody[k]);
}
let str_to_digest = query_string.join("&")+key;


let data_digest = crypto.createHash('md5')
  .update(str_to_digest)
  .digest('base64');

var query_string_urlencoded = querystring.stringify(requestBody);


request("https://japi.zto.com/traceInterfaceNewTraces", {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-companyid":company_id,
        "x-datadigest":data_digest
      },
      body: query_string_urlencoded,
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
            console.log(data);
        })
      }
    })