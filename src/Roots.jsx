

function Ingredient(fixing) {
    return(
        <div className=" border-b border-r border-wgold/30 p-6 md:p-8">
            <span className=" capitalize font-lato mb-4 text-wgold text-xs tracking-wider">{fixing.country}</span>
            <h6 className=" font-playfair mb-2 text-cream text-xl">{fixing.name}</h6>
            <p className=" font-lato text-cream/65 text-xs tracking-wider">{fixing.desc}</p>
        </div>
    )
};

function Roots() {
    return (
        <div id="roots" className=" border-b border-wgold/30 bg-nblack px-12 md:px-24 py-24">
            <h3 className=" font-lato mb-6 text-wgold text-sm tracking-widest">ROOTS & REMEDIES</h3>
            <div className=" lg:flex justify-between mb-12">
                <h2 className=" font-playfair leading-10 md:leading-16 mb-8 lg:m-0 text-cream text-5xl md:text-6xl">
                    Ayuverdic science. <br />
                    African heritage. <br />
                    <span className=" italic">One formula.</span>
                </h2>
                <p className=" font-lato lg:place-self-end text-cream lg:text-right text-sm tracking-wider">
                    Our sourcing network spans four African nations and two Ayuverdic <br className=" hidden md:block" />
                    growing regions. Every ingredient is single-origin, cold-processed, <br className=" hidden md:block" />
                    and traceable. None of our botanicals are filler - each one earns <br className=" hidden md:block" />
                    its place with published trichological evidence.
                </p>
            </div>
            <div className=" border-l border-t border-wgold/30 grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2">
                <Ingredient country="Chad" name="Chebe Powder" desc="Legendary length retention & strengthening" />
                <Ingredient country="Ghana" name="Raw Shea Butter" desc="Deep moisture sealing & softness" />
                <Ingredient country="India" name="Bhringraj" desc="Stimulates growth & scalp circulation" />
                <Ingredient country="Tanzania" name="Baobab Oil" desc="Penetrates the cortex for true hydration" />
                <Ingredient country="India" name="Amla (Indian Gooseberry)" desc="Strengthens, adds shine & reduces breakage" />
                <Ingredient country="Kenya" name="Moringa Leaf" desc="Protein-rich antioxidant repair" />
            </div>
        </div>
    )
};


export default Roots;