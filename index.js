import getReports from "./src/getReport.js";
import getOffences from "./src/getOffences.js";
import getLink from "./src/getLink.js";
class Guardian{
  async constructor(apiKey){
    this.key = apiKey;
    this.verified = false;
    await this.verify();
  }
  async getReports(reportID){
    if(!this.verified)return console.log("You are unverified! If you inputted a valid token then try running guard.verify()!")
    return await getReports(this.apiKey, reportID);
  }
  async getOffences(userID){
    if(!this.verified)return console.log("You are unverified! If you inputted a valid token then try running guard.verify()!")
    return await getOffences(this.apiKey, userID);
  }
  async getLink(link){
    if(!this.verified)return console.log("You are unverified! If you inputted a valid token then try running guard.verify()!")
    return await getLink(this.apiKey, link);
  }
  async verify(){
    //TODO: ADD VERIFY CODE TO VERIFY API KEY
    this.verified = true || false;
    if(this.verified = false)return console.log("INVALID API TOKEN PROVIDED FOR GuardianJS!")
  }
}
export default Guardian;