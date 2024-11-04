import React, { lazy, Suspense, useEffect, useState } from 'react'
import {createBrowserRouter,Routes,Outlet,Link} from 'react-router-dom';
import "./App.css"
import Header from './Components/Header'
import Body from './Components/Body'
import Error from './Components/Error';
import MenuCard from './Components/MenuCard';
import UserContext from './Utils/UserContext';
import { Provider } from 'react-redux';
import AppStore from './Utils/AppStore';
import Cart from './Components/Cart';



const App=()=>{

  const [userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Manoj Kumar Teru",
    }
    setUserName(data.name);
  })

  return(
    <Provider store={AppStore}>
    <UserContext.Provider value={{loggedInUser: userName}}>
    <div>
        <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
}

const Grocery=lazy(()=>import('./Components/Grocery'));
const About=lazy(()=>import('./Components/About'));

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<Suspense><About/></Suspense>
      },
      {
        path:"/restaurent/:id",
        element:<MenuCard />
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
    errorElement: <Error />
  },
])

export default AppRouter;