
# Environment

Node V12.16  

# Run 
Please enter [nodejs] folder  and run command 

node demo.js 

# Example show 

E:\XExpress\src\SF-v2\nodejs>node demo.js
-----------------------------------------------------
1599015941786 yOkPUlLKiUsF/sDxAxp6Sw== {
  partnerID: 'DYKJxxxxxt',
  requestID: '22229999006',
  serviceCode: 'EXP_RECE_CREATE_ORDER',
  timestamp: 1599015941786,
  msgData: '{"cargoDetails":[{"count":4,"unit":"个","weight":8.1,"amount":100.5111,"currency":"HKD","name":"护肤品1","sourceArea":"CHN"}],"contactInfoList":[{"address":"广东省深圳市南山区软件产业基地11栋","contact":"小曾2","contactType":1,"country":"CN","postCode":"580058","tel":"4006789888"},{"address":"广东省广州市白云区湖北大厦","company":"顺丰速运","contact":"小邱","contactType":2,"country":"CN","postCode":"580058","tel":"18688806057"}],"language":"zh_CN","orderId":1599015941786}',
  msgDigest: 'yOkPUlLKiUsF/sDxAxp6Sw=='
}
--------------------------------------
返回报文: {"apiErrorMsg":"","apiResponseID":"0001744CC789C63FEA6B56FB9F4ED53F","apiResultCode":"A1000","apiResultData":"{\"success\":true,\"errorCode\":\"S0000\",\"errorMsg\":null,\"msgData\":{\"orderId\":\"1599015941786\",\"originCode\":\"755\",\"destCode\":\"020\",\"filterResult\":2,\"remark\":\"\",\"url\":\"http://ucmp.sf-express.com/wxaccess/weixin/activity/cx_open_order?.................}}"}
--------------------------------------

