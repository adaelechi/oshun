import BrandStory from "./assets/brand-story.jpg";



function Philosophy() {
    return (
        <div id="philosophy" className=" border-b border-b-wgold/45 bg-nblack px-12 md:px-24 py-24">
            <h3 className=" font-lato mb-4 text-wgold text-sm tracking-widest">OUR PHILOSOPHY</h3>
            <div className=" gap-y-8 lg:gap-0 md:gap-x-10 grid grid-cols-1 md:grid-cols-[1fr_0.8fr] grid-rows-[auto_1fr] lg:grid-rows-1">
                <figure className=" col-start-1 col-end-2 row-start-1 row-end-2 h-80 md:h-full lg:h-110 items-start overflow-hidden">
                    <img className=" aspect-video h-115 md:h-170 lg:h-150 self-center overflow-clip w-125 " src={BrandStory} alt="" height={680} width={500} />
                </figure>
                <div className=" col-start-1 md:col-start-2 col-end-2 md:col-end-3 row-start-2 md:row-start-1 row-end-3 md:row-end-2">
                    <h2 className=" font-playfair leading-10 md:leading-16 mb-8 text-4xl md:text-6xl text-cream">
                        4C hair does not need fixing, <br className=" hidden md:block" />
                        <span className="italic">it needs feeding.</span>
                    </h2>
                    <p className=" font-lato mb-4 text-sm text-cream/60 tracking-wider">
                        The tightest coil pattern on the planet is also the most complex - high <br className=" hidden md:block" />
                        porosity, low sebum distribution, and extraordinary strength. It deserves <br className=" hidden md:block" />
                        a system built around what it actually needs: moisture, slip, and retention.
                    </p>
                    <p className=" font-lato mb-8 text-sm text-cream/60 tracking-wider">
                        We source from Ayuverdic tradition and African botanical heritage - herbs <br className=" hidden md:block" />
                        and oils that have kept coily hair healthy for generations, now backed by <br className=" hidden md:block" />
                        modern trichology.
                    </p>
                    <span className=" founded font-lato text-sm text-wgold tracking-widest">
                        FOUNDED IN LAGOS • 2026
                    </span>
                </div>
            </div>
        </div>
    )
};


export default Philosophy;