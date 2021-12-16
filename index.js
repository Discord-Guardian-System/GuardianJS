import getReports from "./src/getReport.js";
import getOffences from "./src/getOffences.js";
import getLink from "./src/getLink.js";
class Guardian{
   constructor(apiKey){ 
    const buff = Buffer.from(apiKey, 'utf-8');
    const base64 = buff.toString('base64');
    this.key = base64;
    this.verified = false;
    this.verify();
  }
  async getReports(reportID){
    return await getReports(this.key, reportID);
  }
  async getOffences(userID){
    return await getOffences(this.key, userID);
  }
  async getLink(link){
    return await getLink(this.key, link);
  }
  async getOffenses(userID){
    return await getOffences(this.key, userID);
  }
  async verify(){
    //TODO: ADD VERIFY CODE TO VERIFY API KEY
    this.verified = true || false;
    if(this.verified = false)return console.log("INVALID API TOKEN PROVIDED FOR GuardianJS!")
  }
}
export default Guardian;