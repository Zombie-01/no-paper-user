"use client";
import {
  ChevronUp,
  Facebook,
  Linkedin,
  MapPinned,
  MessagesSquare,
  Phone,
  PhoneCall,
  Twitter,
  X,
  XIcon
} from "lucide-react";
import Image from "next/image";
import { DarkThemeToggle, useThemeMode } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const { computedMode } = useThemeMode();
  const handleSaveContact = () => {
    const phoneNumber = "88162058";
    const emailAddress = "shijirbum@gmail.com";
    const imageUrl = "https://example.com/profile-image.jpg"; // Replace with the actual image URL

    const phoneUri = `tel:${phoneNumber}`;
    const emailUri = `mailto:${emailAddress}`;
    const imageUri = `https://example.com/profile-image.jpg`; // Replace with the actual image URL

    const contactUri = `${phoneUri},${emailUri},${imageUri}`;

    window.open(contactUri);
  };
  return (
    <main className="w-screen flex relative h-screen">
      <div
        style={{ top: toggle ? "0%" : "60%" }}
        className="w-full cubic h-full relative flex flex-col items-center justify-center ">
        <div
          className="fixed top-0 left-0 right-0 h-[65%] "
          style={{
            background: "url(/shijkajpeg.jpeg) center center/cover no-repeat "
          }}
        />
        <div
          className="w-screen text-white h-screen fixed flex rounded-t-xl overflow-auto flex-col gap-10 sm:gap-10 py-6 px-6 sm:px-10"
          style={{
            background:
              computedMode === "dark"
                ? "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(153deg, #370617 0.42%, #370617 0.43%, #6A040F 51.34%, #9D0208 101.22%)"
                : "linear-gradient(186deg, #6ABAB1 5.48%, #FFDDD2 95.1%)"
          }}>
          <div className="flex items-center">
            <button
              onClick={() => setToggle(!toggle)}
              className="w-full flex items-center">
              <ChevronUp
                className={` cubic ${
                  toggle ? "  rotate-[-90deg] " : "w-[50%] translate-x-1/2"
                }`}
              />
              {toggle && <span>Profile</span>}
            </button>
            <DarkThemeToggle className="py-2 text-white dark:text-white z-100 px-4 bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:hover:bg-transparent:hover focus:ring-0 focus-visible:border-none focus-visible:outline-none " />
          </div>
          <div className="flex px-4 flex-col gap-1">
            <h4 className="text-[30px] font-bold ">Batchuluun Shijirbum</h4>
            <p className="items-center text-[15px] flex gap-1">
              <span>CEO of MS</span>
              <span className="flex items-center">
                <MapPinned /> Mongolia
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-white items-center text-[15px] flex gap-4">
              <span>
                <PhoneCall fill="#FFFFFF" />
              </span>
              <span className="font-bold text-[18px]">88162058</span>
            </div>
            <div className="text-white items-center text-[15px] flex gap-4">
              <span>
                <MessagesSquare fill="#FFFFFF" />
              </span>
              <span className="font-bold text-[18px]">shijirbum@gmail.com</span>
            </div>
          </div>
          <div className="text-white items-center text-[15px] px-2 flex gap-4">
            <button className="border font-bold text-[14px] px-4 py-2 rounded-lg">
              Save contact
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link href={""}>
              <Facebook fill="white" className="" />
            </Link>
            <Link href={""}>
              <Linkedin fill="white" className="" />
            </Link>
            <Link href={""}>
              <Twitter fill="white" className="" />
            </Link>
          </div>
          <div className="text-white items-start flex flex-col">
            <h4 className="font-bold text-[25px]">ABOUT</h4>
            <p className="text-[13px]">
              psda we psda chine tng ymu hashein lorem ipsum llruda psda we psda
              chine tng ymu hashein lorem ipsum llruda psda we psda chine tng
              ymu hashein lorem ipsum llruda
            </p>
          </div>
          <div className="text-white items-start flex flex-col">
            <h4 className="font-bold text-[25px]">PROJECTS</h4>
            <p className="text-[13px]">
              psda we psda chine tng ymu hashein lorem ipsum llruda psda we psda
              chine tng ymu hashein lorem ipsum llruda psda we psda chine tng
              ymu hashein lorem ipsum llruda
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
