import { useState } from "react";
import Logo from "./assets/oshun-mark.svg";


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" bg-chark border-b border-b-wgold/25 flex h-16 justify-between px-8 sticky top-0 w-full z-50">
            <div className=" content-center gap-2 grid grid-cols-[40px_1fr]">
                <a href="#home">
                    <img className=" h-10 w-10" src={Logo} alt="" />
                </a>
                <div className=" content-center leading-2 self-baseline">
                    <h3 className=" font-bold font-playfair text-cream text-xl tracking-widest">OSHUN</h3>
                    <span className=" font-lato text-wgold text-[10px] tracking-widest">4C HAIR RITUALS</span>
                </div>
            </div>
            <div className=" content-center relative">
                <div className={isOpen ? " flex lg:hidden menu" : " flex lg:hidden menu"} onClick={()=> setIsOpen((prev) => !prev)}>
                    <span id={isOpen ? "bar-a-open" : "bar-a"} className="menubar"></span>
                    <span id={isOpen ? "bar-b-open" : "bar-b"} className="menubar"></span>
                    <span id={isOpen ? "bar-c-open" : "bar-c"} className="menubar"></span>
                </div>
                <div className={isOpen ? " backdrop-blur-sm menu-open flex flex-col" : "hidden lg:flex lg:flex-row"}>
                    <button className={isOpen ? "nav-open nav-link" : " nav-link "}><a href="#philosophy">OUR ROOTS</a></button>
                    <button className={isOpen ? "nav-open nav-link" : " nav-link "}><a href="#collection">COLLECTIONS</a></button>
                    <button className={isOpen ? "nav-open nav-link" : " nav-link "}><a href="#roots">INGREDIENTS</a></button>
                    <button className={isOpen ? "nav-open nav-link" : " nav-link "}><a href="#ritual">RITUALS</a></button>
                    <button className={isOpen ? "nav-open nav-link" : " nav-link "}><a href="#testimonials">STOCKISTS</a></button>
                    <button className={isOpen ? "nav-open nav-link" : " hidden "}><a href="">CART</a></button>
                </div>
            </div>
            <div className=" content-center hidden lg:block">
                <span className=" text-cream">CART</span>    
            </div>
        </div>
    )
};


export default NavBar;