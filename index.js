import getReports from "./src/getReport.js";
import getOffences from "./src/getOffences.js";
import getLink from "./src/getLink.js";
import getServer from "./src/getServer.js"
class Guardian{
   constructor(apiKey){ 
    const buff = Buffer.from(apiKey, 'utf-8');
    const base64 = buff.toString('base64');
    this.key = base64;    this.verified = false;
    this.verify();
  }
  async getReports(reportID){
    return (this.verified) ? await getReports(this.key, reportID) : new Error("Cannot request to the Guardian API with an invalid API token!")
  }
  async getOffences(userID){
    return (this.verified) ? await getOffences(this.key, userID) : new Error("Cannot request to the Guardian API with an invalid API token!")
  }
  async getOffenses(userID){
    return (this.verified) ? await getOffences(this.key, userID) : new Error("Cannot request to the Guardian API with an invalid API token!")
  }
  async getLink(link){
    return (this.verified) ? await getLink(this.key, link) : new Error("Cannot request to the Guardian API with an invalid API token!")
  }
  async getServer(server){
    return (this.verified) ? await getServer(this.key, server) : new Error("Cannot request to the Guardian API with an invalid API token!")
  }
  async verify(){
    //TODO: ADD VERIFY CODE TO VERIFY API KEY
    this.verified = false;
    if(!this.verified)return console.log("INVALID API TOKEN PROVIDED FOR GuardianJS!")
  }
}
export default Guardian;