



function Newsletter() {
    return (
        <div className=" bg-wgold px-12 md:px-24 py-24">
            <h4 className=" font-lato mb-4 text-xl text-center text-mchark tracking-widest">JOIN THE CIRCLE</h4>
            <h2 className=" font-playfair md:leading-16 mb-5 text-[34px] md:text-6xl text-center text-nblack ">
                Wash day wisdom, <br />
                delivered monthly.
            </h2>
            <p className=" font-lato leading-6 md:leading-8 text-sm md:text-xl text-center text-mchark tracking-wider">
                Ingredient deep-dives, 4C tutorials, new arrivals, and community spotlights - for those <br className=" hidden md:block" />
                who treat their coils like the crown they are.
            </p>
            <div className=" gap-y-3 grid grid-rows-2 md:grid-rows-1 md:grid-cols-[2.5fr_1fr] h-fit md:h-14 justify-self-center mt-12 w-3/4 md:w-1/2">
                <input className=" bg-mchark/10 h-full focus-visible:outline-0 px-3 md:px-6" type="email" name="emailsub" id="emailsub" placeholder="you@example.com" />
                <button className=" bg-mchark cursor-pointer font-lato font-medium h-full justify-self-center px-8 py-3 md:p-0 text-cream text-sm tracking-wider w-full">SUBSCRIBE</button>
            </div>
        </div>
    );
}


export default Newsletter;