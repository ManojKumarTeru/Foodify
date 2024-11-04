import { useEffect, useState } from "react";

const useRestaurentMenu=(id)=>{

    const [resInfo,setUseInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+id);
        const json=await data.json();

        setUseInfo(json.data);

    }

    return resInfo;
}

export default useRestaurentMenu;