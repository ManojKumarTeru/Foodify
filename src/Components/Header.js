import { useContext, useState } from "react";
import { LOGO_ID } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
  
  const [button,setButton]=useState("Login");
  const onlineStatus=useOnlineStatus();

  const data=useContext(UserContext);

  const cart=useSelector((store)=>store.cart.items);

    return(
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className='logo-container'>
            <img className='w-56' src={LOGO_ID} alt='Iam logo'/>
        </div>
        <div className='flex items-center'>
            <ul className="flex p-4 m-4">
              <li className="px-4">Online Status: {onlineStatus?'✅':'🔴'}</li>
              <li className="px-4"><Link to="/">Home</Link></li>
              <li className="px-4"><Link to="/about">About us</Link></li>
              <li className="px-4"><Link to="/contact">Contact Us</Link></li>
              <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
              <li className="px-4 font-bold text-xl"><Link to={"/cart"}>Cart ({cart.length})</Link></li>
            </ul>
            
            <button className="btn"
            onClick={()=>{
              button==="Login"?setButton("Logout"):setButton("Login");
            }}
            >{button}</button>
            
        </div>
        <p className="font-bold">{data.loggedInUser}</p>
      </div>
    );
  }

  export default Header;