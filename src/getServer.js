import fetch from "node-fetch"
async function getReports(apiKey, server){
  console.log("TODO: all of it")
  var a = (!server) ?  false : true
  if(!a)return false;
  let response = await fetch("https://api.guardiansystem.xyz/v1/servers/" + server)
  try{
  let parsedResponse = await response.json()
  } catch(err){
    return {code: "404",err: "Database Offline"}
  }
}
export default getReports;