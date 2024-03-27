import React from "react";

export default function Footer (){
    return(
        <>
         <div className="w-full h-[67vh] bg-gray-800 flex justify-around items-center gap-[10vh]">
            <div className="mb-[12vh]">
              <div className="bg-[url('https://nestmoodle.xyz/pluginfile.php/1/core_admin/logo/0x150/1708914414/NHS.d046134c.png')] w-[12.5vw] h-[6.5vh] bg-cover bg-center "></div>
              <div className="flex gap-[1vw] mt-[2vh]">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
              </div>
              <div className="mt-[2vh]">© 2023 | Nest Education IT School | V.2.0</div>
            </div>
            <div className="flex flex-col gap-[2vh]">
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <u>contact@nhs.edu.mn</u>
              </div>
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="flex flex-col ">
                  <u>7799-5555</u>
                  <u>7799-4444</u>
                </div>
              </div>
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="flex flex-col">
                  <p className="">Даваа - Баасан 10:00 - 16:00,</p>
                  <p className="">Бямба - Ням: Амарна</p>
                </div>
              </div>
              <div className="flex items-center gap-[1.5vw] ">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <p className="w-[17vw]"> Нэст Эдүкэйшн сургуулийн байр Оюутны гудамж, 8-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот</p>
              </div>

            </div>
        </div>
        </>
    );
}