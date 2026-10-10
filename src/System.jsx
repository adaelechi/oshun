import Ritual from "./assets/ritual-banner.jpg";


function System() {
    return (
        <div className="  rightfade-bg lg:rightfade-bg-lg h-[90vh] md:h-screen px-12 md:px-24 py-24 relative">
            <figure className=" absolute h-full left-0 top-0 w-full -z-40">
                <img className=" h-full w-7xl md:w-full" src={Ritual} alt="" />
            </figure>
            <div className=" ">
                <h3 className=" font-lato mb-4 text-wgold text-sm tracking-widest">THE COMPLETE SYSTEM</h3>
                <h4 className=" font-playfair leading-14 md:leading-16 mb-10 text-5xl md:text-6xl text-cream">
                    Every product <br />
                    designed <br />
                    around the LOC <br />
                    method.
                </h4>
                <p className=" font-lato mb-8 text-cream/60 text-sm tracking-wider">
                    Liquid. Oil. Cream. The most effective moisture system for 4C coils, and <br className=" hidden md:block" />
                    every OSHUN formula was built to serve a precise role within it.
                </p>
                <button className=" border border-wgold cursor-pointer font-medium font-lato px-6 py-2.5 text-wgold text-sm ">SHOP THE SYSTEM</button>

            </div>
        </div>
    )
};


export default System;