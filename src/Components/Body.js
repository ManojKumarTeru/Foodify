import RestaurentCard,{promotedRestaurentCard }from "./RestaurentCard";
import { useEffect, useState } from "react";
import Ui_Shimmer from "../Utils/UI_Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body=()=>{

  const [listOfRestaurents,setListOfRestaurents]=useState([]);
  const [filterRest,setFilterRest]=useState([]);

  const [search,setSearch]=useState("");
 
  const PromotedCard=promotedRestaurentCard(RestaurentCard);
 
  const update=()=>{
    setListOfRestaurents(listOfRestaurents.filter((res)=>res.info.avgRating >4.3));
  }

  useEffect(()=>{
   fetchData();
  },[]);
  const fetchData=async ()=>{
    const API_Data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json =await API_Data.json();
    // setListOfRestaurents(json?.data?.cards[1].card.card.facetList[0].facetInfo);
    // setListOfRestaurents(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurents(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  const searchFilter=()=>{
    setFilterRest(listOfRestaurents.filter(
      (res)=>res.info.name.toLowerCase().includes(search.toLowerCase())
    ));
    
  }

  const onlineState=useOnlineStatus();
  if(onlineState===false){
    return <h1>"You are offline Please check your Internet"</h1>
  }


    return listOfRestaurents.length==0 ?(
    <Ui_Shimmer />
  ):(
    
      <div className='Body'>
        <div className="flex">
        <div className="m-4 p-4">
        <input className="border border-solid border-black " type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>

        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={searchFilter}>Search</button>

        <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={update}>Top Rated Restaurents</button>
        <div className='flex flex-wrap'>
          {filterRest.map((restaurent) =>(
            <Link key={restaurent.info.id} to={"/restaurent/"+restaurent.info.id}
            >{restaurent.info.avgRating >= 4.5 ? (<PromotedCard key={restaurent.info.id} resData={restaurent}/>) : (<RestaurentCard key={restaurent.info.id} resData={restaurent} />
            )}
            </Link>
            
          ))}
          
        </div>
        
        </div>
        </div>
      </div>
    );
  }

  export default Body;