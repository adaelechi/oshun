
import Chebe from "./assets/chebe-cleansing-co-wash.jpg";
import Bhringraj from "./assets/bhringraj-detangling-mask.jpg";
import Baobab from "./assets/baobab-growth-elixir.jpg";
import Shea from "./assets/shea-moringa-butter-cream.jpg";


function Product(product) {
    return (
        <div className=" grid grid-rows-[1.5fr_1fr]">
            <figure className=" row-start-1 row-end-2">
                <img className=" h-full w-full" src={product.img} alt="" />
            </figure>
            <div className=" pt-5 row-start-2 row-end-3">
                <span className=" block capitalize font-lato mb-2 text-wgold text-xs tracking-widest">{product.type}</span>
                <h6 className=" block font-playfair mb-0.5 text-cream text-sm">{product.name}</h6>
                <span className=" block font-lato mb-2.5 text-cream/40 text-xs">{product.alt}</span>
                <p className=" block font-lato mb-2.5 text-cream/60 text-xs tracking-wider">{product.desc}</p>
                <div className=" flex flex-row justify-between">
                    <span className=" font-playfair text-cream text-sm">₦{product.price}</span>
                    <button className=" border border-wgold cursor-pointer px-3.5 py-1 text-xs text-wgold">ADD</button>
                </div>
            </div>
        </div>
    )
};

function Collection() {
    return (
        <div id="collection" className=" bg-nblack px-12 md:px-24 py-24">
            <h3 className=" font-lato mb-4 text-wgold text-sm tracking-widest">THE COLLECTION</h3>
            <h4 className=" font-playfair leading-10 md:leading-16 my-4 text-cream text-4xl md:text-5xl ">
                Four rituals, <br />
                one coil system.
            </h4>
            <div>
                <button className=" block cursor-pointer font-lato mb-5 place-self-end text-cream/60 text-xs">VIEW ALL</button>
                <div className=" gap-10 grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1">
                    <Product img={Chebe} type="CLEANSE" name="Chebe Cleansing Co-Wash" alt="Gentle Cleanse & Retain" desc="Chadi chebe powder and Ghanian black soap work together to cleanse 4C coils without stripping a single drop of moisture." price="11,500" />
                    <Product img={Bhringraj} type="DEEP CONDITION" name="Bhringraj Detangling Mask" alt="Slip, Strength & Softness" desc="Bhringraj leaf extract and raw Ugandan shea melt through knots and build protein bonds in every coil." price="7,000" />
                    <Product img={Baobab} type="TREATMENT" name="Baobab Growth Elixir" alt="Length Retention Oil" desc="Tanzanian baobab, black seed, and amla press into a single penetrating oil that feeds the follicle and seals the strands." price="5,500" />
                    <Product img={Shea} type="STYLE & SEAL" name="Shea & Moringa Butter Cream" alt="LOC Sealing Butter" desc="Raw Ghanian shea and Kenyan moringa set moisture inside the coils and defines pattern without crunchy cast" price="7,500" />
                </div>
            </div>
        </div>
    )
};


export default Collection;