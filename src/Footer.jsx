


function FootItem(item) {
    return (
        <div className=" py-0.5">
            <a className=" cursor-pointer font-lato text-cream/60 text-xs tracking-wider" href={item.src}>{item.name}</a>
        </div>
    )
}

export default function Footer() {
    return (
        <div className=" bg-nblack px-12 md:px-24 pb-20 pt-24">
            <div className=" border-b border-b-cream/25 gap-x-2.5 grid grid-cols-3 md:grid-cols-4 grid-rows-2 md:grid-rows-1 pb-24 pl-6 md:pl-12">
                <div className=" col-start-1 col-end-4 md:col-end-2 row-start-1 row-end-2">
                    <div>
                        <h3 className=" font-bold font-playfair text-cream text-xl tracking-widest">OSHUN</h3>
                        <span className=" font-lato text-wgold text-[10px] tracking-widest">4C HAIR RITUALS</span>
                    </div>
                    <p className=" font-lato leading-6 pt-5 text-cream/60 text-xs tracking-wider">
                        Rooted in Lagos. <br />
                        Grown across the continent. <br />
                        For 4C coils, always.
                    </p>
                </div>
                <div className=" col-start-1 md:col-start-2 col-end-2 md:col-end-3 row-start-2 md:row-start-1 row-end-3 md:row-end-2">
                    <span className=" block font-lato font-medium pb-3 text-wgold text-xs tracking-widest">SHOP</span>
                    <FootItem name="All Products" src />
                    <FootItem name="Co-Wash" src />
                    <FootItem name="Deep Condition" src />
                    <FootItem name="Oils & Elixirs" src />
                    <FootItem name="Gift Sets" src />
                </div>
                <div className=" col-start-2 md:col-start-3 col-end-3 md:col-end-4 row-start-2 md:row-start-1 row-end-3 md:row-end-2">
                    <span className=" block font-lato font-medium pb-3 text-wgold text-xs tracking-widest">LEARN</span>
                    <FootItem name="4C Hair Guide" src />
                    <FootItem name="LOC Method" src />
                    <FootItem name="Ingredients" src />
                    <FootItem name="Our Sourcing" src />
                    <FootItem name="Trichology Notes" src />
                </div>
                <div className=" col-start-3 md:col-start-4 col-end-4 md:col-end-5  row-start-2 md:row-start-1 row-end-3 md:row-end-2">
                    <span className=" block font-lato font-medium pb-3 text-wgold text-xs tracking-widest">SUPPORT</span>
                    <FootItem name="FAQ" src />
                    <FootItem name="Shipping" src />
                    <FootItem name="Returns" src />
                    <FootItem name="Contact" src />
                    <FootItem name="Privacy" src />
                </div>
            </div>
            <div className=" justify-self-end pr-6 md:pr-12 pt-5 ">
                <p className=" font-lato text-cream/60 text-xs tracking-wider">
                    &copy; 2026 OSHUN Hair Rituals • Lagos, Nigeria • All rights reserved.
                </p>
            </div>
        </div>
    )
}