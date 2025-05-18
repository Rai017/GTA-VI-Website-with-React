import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.5,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  useGSAP(()=>{
    if (!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay: "-1",
      ease:"Expo.easeInOut",

    });
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay: "-.8",
      ease:"Expo.easeInOut",

    });
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay: "-.8",
      ease:"Expo.easeInOut",

    });
    gsap.to(".character",{
      
      x:"-50%",
      bottom:"-60%",
      rotate:0,
      duration:2,
      delay: "-.8",
      ease:"Expo.easeInOut",

    });
    

    const main= document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      const xMove=(e.clientX / window.innerWidth - 0.5) *40;
      gsap.to(".main .text",{
        x:`${xMove * 0.4}%`,
      })
      gsap.to(".sky",{
        x: xMove,
      })
      gsap.to(".bg",{
        x: xMove *1.7,
      })

    })
  },[showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]
                ">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[7px] leading-none text-white">Rockstar</h3>
              </div>
            </div>
            
            <div className="imagesdiv relative w-full h-screen overflow-hidden ">
              <img
                className="absolute sky scale-[1.5] rotate--[-20deg] top-0 left-0 w-full h-full object-cover"
                src="public/sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="public/bg.png"
                alt=""
              /><div className="text text-white flex flex-col absolute top-8 left-1/2 -translate-x-1/2 ">
              <h1 className="text-[9.5rem] -ml-30 leading-none">grand</h1>
              <h1 className="text-[9.5rem] ml-22 leading-none">theft</h1>
              <h1 className="text-[9.5rem] -ml-30 leading-none">auto</h1>
            </div>
              <img
                className="absolute character -bottom-[80%] left-1/2 -translate-x-1/2 scale-[.8] rotate-[-20deg]"
                src="public/girlbg.png"
                alt=""
              />
              
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display">Scroll Down</h3>

              </div>
              <img className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[58px]" src="public/ps5.png" alt="" />
            </div>
          </div>
          <div className="w-full h-screen px-10 flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
            <div className="limg relative h-full w-1/2">
            <img className="absolute scale-[.8] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2" src="public/imag.png" alt="" />
            </div>
            <div className="right w-[30%] py-10">
              <h1 className="text-6xl">Still Running,</h1>
              <h1 className="text-6xl">Not Hunting</h1>
              <p className="mt-6 text-xs font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad, aliquid quam ipsam facilis, ipsum expedita iste excepturi ipsa maiores velit, eveniet minima.</p>
              <p className="mt-2 text-xs font-sans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur illum magni id eligendi! Eos ab sapiente ullam. Maxime accusantium incidunt harum. Quia dolore nulla illum modi repudiandae, est molestiae a provident sunt optio!`</p>
              <p className="mt-3 text-xs font-sans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sed nesciunt quisquam doloremque corporis, dignissimos mollitia eligendi iusto quod dicta a ad iure explicabo soluta error dolor voluptatem debitis eius provident officiis, exercitationem facere! Eligendi?</p>
              <button className="bg-yellow-500 px-6 py-6 text-3xl text-black mt-5">Download Now</button>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
