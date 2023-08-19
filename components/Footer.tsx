import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import FooterColumn from "./FooterColumn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
        <Link className="logo text-[30px]" href="/">
          {/* <Image src="/logo.svg" width={115} height={43} alt="flexibble" /> */}
           Designer's Domain
        </Link>
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Designers Domain is the <strong>NEXT</strong> leading community for Designers and Developers.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          
       
         
          
        </div>
      </div>
      <div className="flexBetween footer_copyright">
     <p>@ 2023 Flexibble. All rights reserved</p>
     <p className="text-gray"> 
     <span className="text-black font-semibold">10,214</span> projects submitted
     </p>
      </div>
    </footer>
  );
};

export default Footer;
