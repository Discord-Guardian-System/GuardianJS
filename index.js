import getReports from "./src/getReports.js"
class Guardian{
  constructor(apiKey){
    this.key = apiKey;
    this.verified = false
    this.verify()
  }
  async getReports(reportID){
    return await getReports(this.apiKey, reportID)
  }
  async verify(){
    //TODO: ADD VERIFY CODE TO VERIFY API KEY
    this.verified = true || false
  }
}
export default Guardian