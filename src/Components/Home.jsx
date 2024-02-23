import React from 'react';
import SplitType from 'split-type'
import Carsoul from "./Carsoul.jsx";
import Projects from "./Projects.jsx";

function Home() {
    let text = new SplitType("Hello World");
    text;
    return(<div className="mt-60 grid grid-cols-4 gap-8">
        <div className="container mx-auto ">
                       <div className=" m-10 grid min-h-[180px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <img src="https://i.ibb.co/1KtW478/Whats-App-Image-2024-01-11-at-9-31-50-PM-removebg-preview.png"
                     alt="jh" className="object-cover object-center rounded-full h-100 w-96" />
            </div>
        </div>  <div className="container mx-auto ">

        <Carsoul/>
            <div>
                <div className="about">
                    <div className="header2">
                        <div className="s1"></div>
                        <div className="s2"></div>
                        <div className="s3"></div>
                    </div>
                    <div className=" flex flex-wrap  w-full ">
                        <h4>Hi :)</h4>
                        <p>👋 I'm Qasem Mohammad, I'm full stack web developedr, I've more Experince </p>

                    </div>
                </div>
            </div>
        </div>


    </div>);
}

export default Home;