import getReports from "./src/getReports.js"
class Guardian{
  constructor(apiKey){
    this.key = apiKey
    this.verified = false
    this.verify()
  }
  getReports(){
    getReports(this.apiKey)
  }
  verify(){
    //TODO: ADD VERIFY CODE TO VERIFY API KEY
    this.verified = true || false
  }
}
export default Guardian