


function Review(review) {
    return (
        <div className=" bg-mchark p-8">
            <span className=" font-playfair text-7xl text-wgold/50">"</span>
            <p className=" font-playfair italic pb-8 pt-4 text-cream/70 text-[16px] ">{review.content}</p>
            <div className=" border-t border-t-cream/20 pt-5 pb-3">
                <h5 className=" font-lato text-cream text-sm">{review.name}</h5>
                <h6 className=" capitalize font-lato text-cream/60 text-xs">{review.city} • {review.product}</h6>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <div id="testimonials" className=" bg-nblack px-12 md:px-24 py-24">
            <h4 className=" font-lato mb-12 text-2xl text-center text-wgold tracking-widest">FROM THE COMMUNITY</h4>
            <div className=" gap-y-10 md:gap-x-10 grid md:grid-cols-3 md:grid-rows-1">
                <Review name="Adaeze O." city="LAGOS" product="CHEBE CO-WASH" content="I've been natural for six years and my 4c hair has never retained this much length. The co-wash alone changed everything." />
                <Review name="Yemi K.." city="NAIROBI" product="BAOBAB GROWTH ELIXIR" content="My shrinkage is still there, I love it, but my curls are defined, moisturised, and they stay that way for days." />
                <Review name="Chinwe B." city="LONDON" product="SHEA & MORINGA BUTTER CREAM" content="Finally a brand that actually understands what 4C hair needs. Every product is formulated for us, not adopted for us." />
            </div>
        </div>
    );
}

