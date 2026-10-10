


function Marquee() {
    const items = ["AFRICAN-SOURCED", "•", "CRUELTY FREE", "•", "4C FORMULATED", "•","AYUVERDIC HERBS", "•",  "CHEBE", "•", "SHEA", "•", "BAOBAB", "•", "AMLA", "•" ];

    return (
        <div className=" bg-wgold grid grid-rows-1 h-10 items-center marquee overflow-hidden text-nblack">
            <div className=" flex-wrap marquee-track flex w-max">
                {[...items, ...items, ...items, ...items, ...items].map((item, i) => (
                    <span key={i} className=" font-lato font-medium mx-3 text-nblack text-sm whitespace-nowrap">{ item }</span>
                ))}
            </div>
        </div>
    )
};

export default Marquee;