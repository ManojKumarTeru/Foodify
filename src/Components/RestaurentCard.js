import { IMG_ID } from "../Utils/constants";

const RestaurentCard=({resData})=>{
    const imageId=(resData.info.cloudinaryImageId);
    const{cuisines}=(resData.info);
    // const {altText}=resData.accessibility;
    // const description=resData.description;
    // const imageId=resData.info.cloudinaryImageId;
    // console.log(imageId);
    return(
      <div className='m-4 p-4 w-[200px] h-[470px] bg-gray-200 hover:bg-slate-300 rounded-lg'>
        <img className='rounded-lg w-[200px] h-[200px]' src={IMG_ID+imageId}/>
        <h3 className="font-bold py-3 text-lg">{resData.info.name}</h3>
        {cuisines.map((ele,index)=> index<3 ? <li className="font-semibold" key={index}>{ele}</li> : "")}
        <h3 className="font-semibold">{resData.info.avgRating}* Average Rating</h3>
        <h3>{resData.info.areaName}</h3>
        <h3 className="font-bold">{resData.info.costForTwo}</h3>
      </div>
    );
  }

  export const promotedRestaurentCard=(RestaurentCard)=>{
    return(props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurentCard {...props} />
        </div>
      );
    };
  }

  export default RestaurentCard;