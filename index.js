import getReports from "./src/getReports.js"
class Guardian{
  constructor(apiKey){
    this.key = apiKey
  }
  getReports(){
    getReports()
  }
}
export default Guardian