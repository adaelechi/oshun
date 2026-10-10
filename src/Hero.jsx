import HeroImg from "./assets/hero-4c-hair.jpg";


function Hero() {
    return (
        <div className=" topfaded-bg lg:topfaded-bg-lg font-default gap-y-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] grid-rows-[1fr_auto] lg:grid-rows-1 md:h-fit justify-between overflow-x-clip pb-24 pt-8 px-12 md:px-24 relative ">
            <figure className=" absolute left-0 h-full overflow-clip top-0 translate-x-[-13%] lg:translate-0 w-150 md:w-275 lg:w-full -z-40">
                <img className=" h-full overflow-clip w-full " src={HeroImg} alt=""  />
            </figure>
            <div className=" col-start-1 col-end-2 row-start-1 row-end-2 h-fit  self-end">
                <span className=" font-lato text-wgold tracking-wider ">FORMULATED FOR 4C COILS</span>
                <h1 className=" font-playfair leading-15 md:leading-20 mt-4 mb-4 md:mb-8 text-6xl md:text-8xl text-cream">
                    Your coils <br /> 
                    were never <br /> 
                    <span className=" italic">a problem</span>.
                </h1>
                <p className=" font-lato leading-4.5 md:leading-6 my-4 md:my-6 text-xs md:text-sm text-cream/60 tracking-wider">
                    OSHUN is a science-backed hair care system rooted in <br className=" block md:hidden" /> tradition <br className=" hidden md:block" />
                    built specifically for Type 4C coils, using <br className=" block md:hidden" /> Ayuverdic herbs and <br className=" hidden md:block" />
                    African-sourced botanicals that <br className=" block md:hidden" /> have nourished this hair for <br className=" hidden md:block" />
                    centuries.
                </p>
                <div className="">
                    <button className=" bg-wgold border border-wgold cursor-pointer font-lato mr-3 px-4 md:px-8 py-2.5 md:py-3.5 text-nblack text-xs tracking-wider">SHOP THE RITUALS</button>
                    <button className=" border border-transparent hover:border-wgold cursor-pointer font-lato px-8 py-3.5 text-cream text-xs tracking-wider">OUR METHODS</button>
                </div>
            </div>
            <div className=" col-start-1 lg:col-start-2 col-end-2 lg:col-end-3 row-start-2 lg:row-start-1 row-end-3 lg:row-end-2 md:gap-x-20 md:gap-y-6 lg:block md:grid md:grid-cols-2 md:grid-rows-2 justify-self-center self-center lg:place-self-end md:w-full">
                <div className=" md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 mb-5">
                    <span className=" block font-playfair mb-2.5 text-5xl text-center lg:text-right text-wgold">6</span>
                    <span className=" block font-lato text-cream/60 text-center lg:text-right text-xs">AFRICAN-SOURCED BOTANICALS</span>
                </div>
                <div className=" md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 mb-5">
                    <span className=" block font-playfair mb-2.5 text-5xl text-center lg:text-right text-wgold">0</span>
                    <span className=" block font-lato text-cream/60 text-center lg:text-right text-xs">SULFATES • SILICONS • PARABENS</span>
                </div>
                <div className=" md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 mb-5">
                    <span className=" block font-playfair mb-2.5 text-5xl text-center lg:text-right text-wgold">4C</span>
                    <span className=" block font-lato text-cream/60 text-center lg:text-right text-xs">BUILT FOR THIS HAIR TYPE</span>
                </div>
            </div>
        </div>
    )
};

export default Hero;