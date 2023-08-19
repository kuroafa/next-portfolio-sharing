import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NavLinks } from "@/constants";
import Authproviders from "@/components/AuthProviders";
import { getCurrentUser } from "@/lib/session";
import { signOut } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";
import Button from "./Button";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 slex-start gap-10">
        <Link className="logo xl:text-[50px] lg:text-[40px]  md:text-[30px]  xs:text-[20px]" href="/">
          {/* <Image src="/logo.svg" width={115} height={43} alt="flexibble" /> */}
           Designer's Domain
        </Link>
        <ul className="xl:flex hidden mt-5  text-small gap-7 ">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link className="font-bold text-xl text-gray-600" href="/create-project"><Button
            title="Post project"/></Link>
          </>
        ) : (
          <Authproviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
