import fetch from "node-fetch"
async function getOffences(apiKey, userID){
  console.log("TODO: all of it")
  var a = (!userID) ?  false : true
  if(!a)return false;
  let response = await fetch("https://api.guardiansystem.xyz/v1/offenders/" + userID)
  try{
  let parsedResponse = await response.json()
  } catch(err){
    return {code: "404",err: "Database Offline"}
  }
}
export default getOffences