import { useEffect, useState } from "react";
import Ui_Shimmer from "../Utils/UI_Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../Utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const MenuCard=()=>{

    // const [restInfo,setRestInfo]=useState(null);

    const {id}=useParams();

    const[item,setItem]=useState(0);

    const restInfo=useRestaurentMenu(id);

    const filterRest=restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(filterRest);

    if(restInfo==null) return <h1 className="font-bold text-3xl text-center m-14">Loading...</h1>

    const {name,cuisines,costForTwoMessage}=restInfo?.cards[2]?.card?.card?.info;

//    const {itemCards}=restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.categories?.[0] || restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

    // console.log(itemCards);
    return(
        <div className="text-center">

            <h1 className="font-bold py-3 text-4xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {filterRest.map((c,index)=>(
                <RestaurentCategory key={index} 
                data={filterRest[index]}
                showItems={index==item?true:false}
                setItem={()=>{setItem(index)}}
                 />
            ))}

            {/* <h1>{name}</h1>  
            <h2>{cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            {itemCards.map((item)=>
                <li key={item.card.info.id}>{item.card.info.name}   - Rs.{item.card.info.price}/-</li>
            )} */}
        </div>
    );
}

export default MenuCard;