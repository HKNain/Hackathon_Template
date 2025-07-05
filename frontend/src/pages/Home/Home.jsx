<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import FeatureCard from "./FeatureCard";


function Home() {
  const [featureCard, setFeatureCard] = useState("");
  const connectingLinesRef = useRef(null)
  const [clicked ,setClicked] = useState(0)
  const customerImages =[
            "/Img/Img1.jpg",
            "/Img/Img2.jpg",
            "/Img/Img3.jpg"

  ]

  const customerSaid=[
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque commodi inventore aliquam perspiciatis perferendis incidunt, pariatur nam, quo facilis quod officiis earum laudantium.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque commodi inventore aliquam perspiciatis perferendis incidunt, pariatur nam, quo ",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque commodi inventore aliquam perspiciatis ",
  ]

  console.log (clicked)
  //  have to in h1 Welocome to influencer when hover out of that context animation shows
  const cutomerThoughts="Our Customers Thoughts"
  return (
    <div className="min-h-screen w-full ">
      <img
        className=" absolute top-0 left-0 h-[70vh] w-full z-[-1]  rounded-b-2xl  brightness-[65%] "
        src="https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg"
        alt=""
      />
      <div className="h-[58vh]   w-full flex flex-col  justify-center gap-7 ">
        <h1
          className="text-4xl font-bold text-gray-400 font-Comic ml-8 
            transition-all transform  hover:-translate-y-2 

        "
        >
          Welcome to Finfluencer
        </h1>
        <h1
          className="text-4xl font-bold text-gray-400 font-Comic ml-8
         transition-all transform hover:-translate-y-2"
        >
          Shaping the future of financial literacy through content
        </h1>
        <div className="mt-6  ">
          <Link
            to={"/pricing"}
            className="px-6 py-2 ml-8 rounded-md border border-white text-white font-semibold
                 bg-gradient-to-r from-white/0 to-white/100 bg-[length:0%_100%] bg-left
                hover:bg-[length:100%_100%] hover:text-black
                transition-all duration-500 bg-no-repeat  tracking-wide"
          >
            pricing{" "}
          </Link>
          <Link
            to={"/singUp"}
            className="px-6 py-2 ml-4 rounded-md border border-white text-white font-semibold
                 bg-gradient-to-r from-white/0 to-white/100 bg-[length:0%_100%] bg-left
                hover:bg-[length:100%_100%] hover:text-black
                transition-all duration-500 bg-no-repeat  tracking-wide "
          >
            {" "}
            Join Us{" "}
          </Link>
        </div>
      </div>

      <div className="min-h-[100vh] w-full flex flex-col items-center mt-8  ">
        <div
          className="w-[80%] mt-8  min-h-[60vh] flex justify-between  
       
        "
        >
        
          <div
            className="relative flex items-center justify-between 
       border-2 border-gray-400 shadow-lg shadow-black
       m-2 w-full h-[70vh] rounded-3xl  overflow-hidden
        
       "
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              src="Videos/bg.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

           
            <div className="w-[60%] h-full z-10 bg-white rounded-lg overflow-hidden p-9 ">
              <h3 className="text-4xl text-black font-bold mb-4 font-bitcount">
                Why to choose us and what we are providing
              </h3>
              <p className="text-2xl text-gray-700 mt-6 tracking-wider font-semibold leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque aliquid aperiam corporis atque numquam, at
                necessitatibus, libero quas placeat eius illum. Libero nisi
                suscipit quas quos eveniet voluptas rem deleniti corrupti
                excepturi harum obcaecati, ipsum adipisci...
              </p>
            </div>

       
            <div className="absolute top-0 right-0 w-[40%] h-full z-10 ">
              <img
                src="https://webimages.mongodb.com/_com_assets/cms/lyos6ogb3n3n3db71-mask-blob-desktop.svg?auto=format%2Ccompress"
                alt="Blob Mask"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Ends here */}
          {/* bg-[#eaecea] */}
        </div>
        <div
          className="w-[80%] mt-16 rounded-lg
      
        relative min-h-screen flex flex-col bg-[#eaecea] "
        >
          <div className="h-[80vh]  border-2 rounded-lg relative w-full flex flex-col ">
            <h3 className="text-4xl text-black font-bold mb-7 font-bitcount text-center mt-3">
              Features
            </h3>
            <FeatureCard />
          </div>

          <div className="h-[90vh] w-full mt-12 rounded-xl flex flex-col mb-12 ">
            <h3 className="text-3xl font-bitcount ml-7 mt-3 font-bold tracking-wider  ">
              To connect With Us{" "}
            </h3>
            <h3 className="text-center text-3xl font-bitcount ml-7 font-bold tracking-wider mt-3  ">
              U Can do the following things related to this !
            </h3>

            <div className="relative mt-12 h-[90vh] rounded-xl   flex bg-white 
            
            ">

              <div className="h-full w-1/3    flex justify-center ">
                <Link className="h-3/5 w-2/3 shadow-black shadow-2xl  rounded-2xl mt-7 flex flex-col justify-around items-center bg-gradient-to-r  from-slate-900 to-slate-400">
                  <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-700 font-bold font-bitcount">SignUp</h3>
                  <h3 className="text-center text-2xl tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 ">
                    By clicking On this U will Direct towards Our Singup Page
                  </h3>
                </Link>
              </div>
              <div className="h-full w-1/3  flex items-center justify-center ">
                <Link className="h-3/5 w-2/3  mt-3 rounded-2xl  bg-gradient-to-r shadow-black shadow-2xl  from-slate-900 to-slate-400 flex flex-col justify-around items-center">
                  <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-700 font-bold font-bitcount">SignUp</h3>
                  <h3 className="text-center text-2xl tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 ">
                    By clicking On this U will Direct towards Our Singup Page
                  </h3>
                </Link>
              </div>
              <div className="h-full w-1/3  flex justify-center items-end mb-16 ">
                <Link className="h-3/5 w-2/3 mb-8 shadow-black shadow-2xl mt-3 rounded-2xl  bg-gradient-to-r  from-slate-900 to-slate-400 flex flex-col justify-around items-center">
                  <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-700 font-bold font-bitcount">SignUp</h3>
                  <h3 className="text-center text-2xl tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 ">
                    By clicking On this U will Direct towards Our Singup Page
                  </h3>
                </Link>
              </div>
              <div className="absolute left-[22vw] top-[22vh]   h-1 w-[8.8vw] rounded-lg bg-gray-600 " >

              </div>
              <div className="absolute top-[30vh] left-[48.4vw] h-1 w-[8.9vw] rounded-lg bg-gray-600" >

              </div>

              
            </div>


          </div>
          
          <div className="h-[110vh] mt-5 w-full  flex flex-col items-center justify-around " >
            <div className="flex gap-2">
      {cutomerThoughts.split("").map((elem, idx) => (
        <span
          key={idx}
          className={`inline-block font-bitcount text-4xl transition-all duration-500 ease-out font-bold 
        `}>
          {elem}
         
        </span>
      ))}
    </div>

              <div className="h-[100vh] bg-white rounded-2xl w-full mt-12 flex justify-around items-center" >

            <div className=" relative h-80  w-1/4  rounded-3xl hover:scale-110 transition-all duration-700 " >
                 {
                  customerImages.map((elem,idx)=>{
                    
                   return (<div  key={idx} className={` absolute h-full  top-0 w-full 
                      
                      shadow-xl shadow-black transition-all duration-500
                      `}
                      style={{
                        transform:clicked===idx? `rotate(0)`:`rotate(${(4*(idx+1))}deg)`,
                        zIndex: clicked === idx ? 30 : idx + 3,
                      }}
                      >
                      <img className="rounded-2xl object-cover object-center h-full" src={elem} />


                    </div>)
                  })
                 }     
            </div >




            <div className=" h-96 border-2 w-2/4  rounded-3xl bg-[#eaecea] flex flex-col justify-around ">
                 <h3 className="mt-3 ml-7 font-bitcount text-2xl font-semibold">What  our customers think about Us ?</h3>
                
                 <h3 className="text-xl font-semibold font-Sour ml-7">{customerSaid[clicked]}</h3>
                 <div className="flex ">
                 <button className="bg-slate-100 p-2 px-3 rounded-full hover:rotate-12 ml-5 " onClick={()=> setClicked((clicked+1)%3)}>
                    <h3 ><i  className="ri-arrow-right-line "></i></h3> 
                   </button>
                 </div>
            </div>



                  
                      </div>

{/*  */}

            

          </div>
          {/* <div className="h-[80vh] rounded-2xl Carpedium flex flex-col" >
                 <h3 className="font-bitcount text-4xl mt-12 ml-14 font-bold  " > FAQ's </h3>
                 <div className="h-full w-full bg-white mt-11 rounded-lg flex flex-col justify-center">

                  <div className="h-20 w-full bg-slate-200 border-2 border-black ">

                  </div>
                  <div className="h-20 w-full bg-slate-200 border-2 border-black">

                  </div>
                  <div className="h-20 w-full bg-slate-200 border-2 border-black">

                  </div>


                 </div>

          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
=======
import React from 'react';

export default function Home() {
    return <div>Home Page</div>;
}
>>>>>>> e5e6787 (Login and SignUp)
