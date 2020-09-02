const request = require('request')
const crypto = require('crypto');
const urlencode = require('urlencode');


NewOrder('https://sfapi.sf-express.com/std/service');


function NewOrder(reqURL) {
    //tst();
    let clientCode = 'DYKJ_xxxxx';                      //instead of your client code
    let checkword = 'mp6IlXxxxxxxxxxxxxxxxxxxxxxx';    //instead of your check code 
    let timestamp = Date.now();
    
    //加密生成verifyCode;
    let md5 = crypto.createHash('md5');
    let headers = {'Content-type':'application/x-www-form-urlencoded;charset=UTF-8'};

    
    let msgData = {"cargoDetails":[        {                      "count":4,            "unit":"个",            "weight":8.1,            "amount":100.5111,            "currency":"HKD",            "name":"护肤品1",                       "sourceArea":"CHN"                  }],    "contactInfoList":    [        {            "address":"广东省深圳市南山区软件产业基地11栋",            "contact":"小曾2",            "contactType":1,            "country":"CN",            "postCode":"580058",            "tel":"4006789888"        },        {            "address":"广东省广州市白云区湖北大厦",            "company":"顺丰速运",            "contact":"小邱",            "contactType":2,            "country":"CN",            "postCode":"580058",            "tel":"18688806057"        }],    "language":"zh_CN",    "orderId":timestamp};
    
    //let msgData = `{"cargoDetails":[        {                      "count":4,            "unit":"个",            "weight":8.1,            "amount":100.5111,            "currency":"HKD",            "name":"护肤品1",                       "sourceArea":"CHN"                  }],    "contactInfoList":    [        {            "address":"广东省深圳市南山区软件产业基地11栋",            "contact":"小曾2",            "contactType":1,            "country":"CN",            "postCode":"580058",            "tel":"4006789888"        },        {            "address":"广东省广州市白云区湖北大厦",            "company":"顺丰速运",            "contact":"小邱",            "contactType":2,            "country":"CN",            "postCode":"580058",            "tel":"18688806057"        }],"extraInfoList" : [{"attrName" : "channelCode","attrVal" : "B0101020070206"}],    "language":"zh_CN",    "orderId":"${timestamp}"}`;
    let msgDataStr = JSON.stringify(msgData);
    let toVerifyText = msgDataStr + timestamp.toString() + checkword;
    toVerifyText = encodeURIComponent(toVerifyText);
    let msgDigest  = md5.update(toVerifyText, 'utf8').digest('base64');

    let payload = {'partnerID':clientCode,'requestID':'22229999006','serviceCode':'EXP_RECE_CREATE_ORDER','timestamp':timestamp,'msgData':msgDataStr,'msgDigest':msgDigest};
    
    console.log("-----------------------------------------------------");
    console.log(timestamp,msgDigest,payload);

    request.post(reqURL, {     
        form: payload,
    },function (error, response, body) {
        if (error) {
            console.log("--------------------------------------");
            console.error(`请求遇到问题: ${error}`);
            console.log("--------------------------------------");
        }
        if (body) {
            console.log("--------------------------------------");
            console.log("返回报文: " + body);
            console.log("--------------------------------------");
        }
        if(response){
            console.log(response.body);
            console.log('---------------------------------');
        }

        //res.json(body);
    })
}


module.exports = NewOrder;