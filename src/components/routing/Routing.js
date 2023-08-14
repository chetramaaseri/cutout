import { useEffect } from "react"
import env from "react-dotenv";




function Routing() {
    useEffect(()=>{
        const fetchRoute = async ()=>{
            const url = window.location.href.split('/');
            const route = url[url.length-1];
            const response = await fetch(`${env.API_URL}/fetchRoute`,{
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    route
                })
            });
            const routeDetails = await response.json();
            console.log(routeDetails);
            window.location = routeDetails.longUrl;
        }
        fetchRoute();
    });

    // direct
    // const url = window.location.href.split('/');
    // const route = url[url.length-1];
    // const response = fetch(`${env.API_URL}/fetchRoute`,{
    //     method : "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body : JSON.stringify({
    //         route
    //     })
    // })
    // .then(response => response.json())
    // .then(routeDetails =>{
    //     console.log(routeDetails);
    //     window.location = routeDetails.longUrl;

    // })
    
  return (
    <div>Routing</div>
  )
}

export default Routing