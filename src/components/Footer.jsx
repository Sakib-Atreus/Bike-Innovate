import Image from "next/image";
import React from "react";
import appStore from "@/assets/ios.png";
import playStore from "@/assets/android.png";

const Footer = () => {
  return (
    <footer className="container mx-auto footer p-10 bg-black text-white flex justify-around">
      <aside>
        <div className="flex gap-3">
          <h2>Download Now</h2>
          <h2>License</h2>
        </div>
        <div className="flex gap-3 mt-3">
          <h2>About</h2>
          <h2>Features</h2>
          <h2>Pricing</h2>
          <h2>Careers</h2>
          <h2>Help</h2>
          <h2>Privacy Policy</h2>
        </div>
        <p className="mt-4 text-gray-300">
          &#169; 2024 bike. All rights reserved by Sakib
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Get the App</h6>
        <div className="grid grid-flow-row gap-4">
          <Image className="w-36" src={appStore} alt=""></Image>
          <Image className="w-36" src={playStore} alt=""></Image>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
