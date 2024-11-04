import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory=({data,showItems,setItem})=>{
        
    const [change,setChange]=useState(showItems);
    const clickable=()=>{
        setChange(!change);
        setItem();
    }

    return (
        <div>
            <div onClick={clickable} className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between cursor-pointer">
                <span className="font-bold text-lg">{data.card.card.title} ({data.card.card.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {change && <ItemList items={data.card.card.itemCards}/> }
        </div>
    );
}

export default RestaurentCategory;