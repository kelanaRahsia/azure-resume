window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})
// functionApiUrl is Api url from azure function 
// authorization level function : https://getresumecounteramir.azurewebsites.net/api/GetResumeCounter?code=LHAdW92mV7dIpRc5n7QuFiRdCM-_bk0wcuyiIsWJjljAAzFuri-Y1Q==
const functionApiUrl = 'https://getresumecounteramir.azurewebsites.net/api/GetResumeCounter?'
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => 
{
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API")
        // alert("Website called function API")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}