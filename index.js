import getReports from "./src/getReport.js"
import getOffences from "./src/getOffences.js"
class Guardian{
  constructor(apiKey){
    this.key = apiKey;
    this.verified = false
    this.verify()
  }
  async getReports(reportID){
    return await getReports(this.apiKey, reportID)
  }
  async getOffences(userID){
    return await getOffences(this.apiKey, userID)
  }
  async verify(){
    //TODO: ADD VERIFY CODE TO VERIFY API KEY
    this.verified = true || false
  }
}
export default Guardian