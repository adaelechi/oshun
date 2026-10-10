



function Step(step) {
    return (
        <div className="">
            <span className=" stepnumber block font-playfair py-4 text-6xl text-wgold tracking-wider">{step.number}</span>
            <h5 className=" font-medium font-playfair py-5 text-2xl text-cream">{step.title}</h5>
            <p className=" font-lato leading-6 text-cream/60 text-sm tracking-wider ">{step.cont}</p>
        </div>
    );
}

function Ritual() {
    return (
        <div id="ritual" className=" bg-nblack px-12 md:px-24 py-24">
            <h3 className=" font-lato mb-6 text-wgold text-sm tracking-widest">WASH DAY, ELEVATED</h3>
            <h2 className=" font-playfair text-5xl md:text-6xl text-cream">Your 4C ritual.</h2>
            <div className=" gap-y-5 md:gap-x-10 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 mt-14 md:mt-24 ">
                <Step number="01" title="Pre-Poo" cont="Apply the Baobab Elixir to dry hair in sections before wash day. Leave for 30 minutes minimum. This primes the strand to resist hygral fatigue during cleansing." />
                <Step number="02" title="Cleanse & Condition" cont="Co-wash section by section, massaging the scalp in circles. Follow with the Bhringraj Mask while hair is soaking wet. Finger-detangle from tip to root under the shower." />
                <Step number="03" title="LOC & Seal" cont="Apply leave-in on dripping wet hair (L), then the Baobab Elixir (O), then the Shea Butter Cream (C) to seal. Twist or braid for definition. Do not disturb until dry." />
            </div>

        </div>
    )
};


export default Ritual;