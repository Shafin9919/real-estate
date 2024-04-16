import Header from "../Components/Header/Header"
import { useEffect, useState } from "react";
import Featured from "../Components/Featured/Featured";


function Home() {
  const [propertyList,setpropertyList]=useState([]);
  const [isLoading,setIsLoading]=useState(true);

  const url = 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0d3a21e532mshb8f9803ab8aa761p19878fjsnce4e39c2df64',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
	useEffect(()=>{
		fetch(url, options).then(res=>res.json()).then(data=>setpropertyList(data.hits));
    setIsLoading(false);
	},[])
  

   
  
  return (



   <>
   <Header></Header>
  

    <Featured isLoading={isLoading} propertyList={propertyList}></Featured>

   </>
  )
}

Home.propTypes = {}

export default Home
