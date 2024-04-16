import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import PropertyDetail from "../Pages/PropertyDetail/PropertyDetail";
import Listing from "../Pages/Listing/Listing";

export const routes=createBrowserRouter([


{path:'/',
 element: <Root></Root>,
 children: [
    {path: '/',
    element: <Home></Home>
   }
   ,
   {
      path:'/listing',
      element: <Listing></Listing>
   },
   {
      path:'/propertydeatil/:id',
      element: <PropertyDetail></PropertyDetail>,
   }
 ]
 
}
])