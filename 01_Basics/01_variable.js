const accountId=12345
let accountEmail="iamparvej07@gmail.com"
var accountPassword="05786"
accountCity ="Siwan"
let accountState;
/*
prefer not use to var
because of an issue in block scpoe
*/

accountEmail="iamparvej07@gmail.com"
accountPassword="123456"
accountCity="Patna"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])