import React, { useState } from "react";
import country from "../countries.json";

const Countries = () => {
  const [name,setName]=useState();
  const [id,setId]=useState();
  const [toggle,setToggle]=useState(true);
  

  const idGainer = (country) => {
    setName(country.word);
    setId(country.id);
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    },3000);
  };

  //cross function
  const cross=()=>{
    if(toggle==true){
      setToggle(false)

    }
    else{
      setToggle(true);
    }

  }
  return (
    <>

      {/* popUp to show id and Name of the Country */}
      <section className={`${toggle?"block" :"hidden"}  bg-[brown] w-[30%] h-[200px] absolute ml-[35%] mt-[10%] opacity-70 rounded-lg`}>
        <div className="mt-2 ml-6 cursor-pointer text-[26px]" onClick={()=>cross()}>X</div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-center text-white">Name Of Your Country is <span className="text-blue-500 font-bold text-[16px]">{name}</span> </div>
            <div className="text-center text-white"> Your Country ID Is <span className="text-blue-500 font-bold text-[16px]">{id}</span> </div>
          </div>
      </section>
      {/* main section */}
      <section className="mt-2 font-[poppins] ">
        <h1 className="text-center font-bold text-[36px] text-orange-500">
          country Data
        </h1>
        <table className="w-full">
          <tbody className="w-full ">
            <tr className="grid md:grid-cols-3   grid-cols-2 place-items-center   space-y-10 ">
              {country.map((country) => {
                return (
                  <td
                    className="mt-12 font-sans md:text-[2rem] "
                    key={country.id}
                    onClick={() => idGainer(country)}
                  >
                    <div className="bg-blue-500 text-white px-3 py-2 hover:scale-105 rounded-lg cursor-pointer active:text-black">
                      {country.word}
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </section>

    
    </>
  );
};

export default Countries;
