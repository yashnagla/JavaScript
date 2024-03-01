const accountId = 144553
let accountEmail = "yash@google.com"
var accountPassword = "11223344"
/*
Prefer not to use var
because of issue in block and functional scope
*/
accountCity = "Jaipur"

let accountState 

// accountId = 2 // This can not be executed because accountId is a constant and can't be re-decared.
// console.log(accountId);

accountEmail = "yn@yn.com"
accountPassword = "1234"
accountCity = "Delhi"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])