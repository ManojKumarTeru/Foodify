import { useDispatch } from "react-redux";
import { additem } from "../Utils/CartSlice";

const ItemList=({items})=>{
    const url="https://media-assets.swiggy.com/swiggy/";


    const dispatch=useDispatch();
    const AddCart=(item)=>{
        dispatch(additem(item));
    }

    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="w-6/12 mx-auto my-4 border-gray-300 border-b-2 p-2 mb-5 mt-5 text-left flex">
                    <div className="w-9/12">
                            <span className="text-gray-500 font-bold text-xl">{item.card.info.name}</span>
                            <p className="text-black font-bold">₹ {item.card.info.price/100}</p>
                            <div>
                                <span className="text-green-700 font-bold">*</span>
                                <span className="text-green-700 font-bold">{item.card.info.ratings.aggregatedRating.rating}</span>&nbsp;
                                <span className="text-gray-700 font-bold">({item.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                            </div>
                            <p className="text-gray-600">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute">
                            <button onClick={()=>AddCart(item)} className="text-green-500 bg-gray-100 rounded-md font-bold p-2 m-auto">ADD +</button>
                        </div>
                        <img className="w-40 h-40 rounded-lg" src={url+item.card.info.imageId}/>
                    </div>
                    <br></br>
                </div>
            ))}
        </div>
    );
}

export default ItemList;