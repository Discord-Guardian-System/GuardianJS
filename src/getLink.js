import fetch from "node-fetch"
async function getLink(apiKey, link){
  console.log("TODO: all of it")
  var a = (!link) ?  false : true
  if(!a)return false;
  let response = await fetch("https://api.guardiansystem.xyz/v1/links/" + encodeURIComponent(link))
  try{
  let parsedResponse = await response.json()
  } catch(err){
    return {code: "404",err: "Database Offline"}
  }
}
export default getLink;