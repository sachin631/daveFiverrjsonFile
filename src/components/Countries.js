import React from "react";
import country from "../countries.json";

const Countries = () => {
  return (
    <>
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
