// Header section Here !
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" h-24 w-screen flex justify-between items-center   relative overflow-x-hidden  ">
      <div className="h-20  rounded-2xl flex justify-around items-center  px-4 ml-4">
            <NavLink to={'/'} >
            <h1 className="font-bitcount text-2xl text-white hover:text-gray-400">
                FiInfluencer
            </h1>

            </NavLink>
 
      </div>



      <div className="   h-20  rounded-2xl flex justify-around items-center gap-12">
          
        <NavLink
             
              to={`/`}
              className={({ isActive }) =>
                isActive ? "text-gray-300" : "text-white"
              }
            >
              <h1 className="px-3 py-2 hover:text-white hover:bg-opacity-35 hover:bg-black  hover:rounded-2xl font-semibold text-lg "
               
              >Home</h1>
            </NavLink>   
      {
        ["team","pricing","login", "signUp"].map((element,idx) => {
           return (
            <NavLink
              key={idx}
              to={`/${element}`}
              className={({ isActive }) =>
                isActive ? "text-gray-300" : "text-white"
              }
            >
              <h3 className="px-3 py-2 hover:text-white hover:bg-opacity-35 hover:bg-black  hover:rounded-2xl font-semibold text-lg "
             
              >{element}</h3>
            </NavLink>
          );
        })

        }

        <button> </button>
      </div>
    </div>
  );
}

export default Navbar;
