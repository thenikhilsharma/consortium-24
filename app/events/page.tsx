"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Cursor from "@/components/Cursor";
import gsap from "gsap";

import wallstreet from "../../public/assets/events/wallstreet.png";
import ipl from "../../public/assets/events/ipl.png";
import ceo from "../../public/assets/events/ceo.png";
import expo from "../../public/assets/events/expo.png";
import adventure from "../../public/assets/events/adventure.png";
import suc from "../../public/assets/events/suc.png";

import tanmay from "../../public/assets/team/tanmay.jpg";
import tanishqa from "../../public/assets/team/tanishqa.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const EventCard = ({ event }: { event: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#1f2937] shadow-2xl rounded-3xl flex justify-center items-center overflow-hidden m-5 p-5">
      <div
        className={`relative h-full w-full flex flex-col justify-center items-center rounded-3xl overflow-hidden event-card transition-transform transform-gpu ${
          isHovered ? "tilt-animation" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`floating_div h-4/5 w-4/5 items-center transition-transform ${
            isHovered ? "blur-sm" : ""
          }`}
        >
          <div className="flex justify-center mt-6">
            <div>
              <Image
                src={event.thumbnail}
                alt="Event Thumbnail"
                width="210"
                height="210"
                className={`rounded-full h-52 ${
                  isHovered ? "scale-125 duration-200" : ""
                }`}
              />
            </div>
          </div>
          <div className="text-4xl flex justify-center mt-12 font-medium">
            {event.title}
          </div>
        </div>

        {isHovered && (
          <div className="p-1 absolute inset-0 flex flex-col items-center gap-10 rounded-3xl justify-center bg-white bg-opacity-70 transition-opacity duration-300 opacity-100 overflow-hidden text-black">
            <div className="mt-1 text-2xl font-extrabold">{event.title}</div>
            <div className="p-1 overflow-hidden">
              <p>{event.description}</p>
            </div>
            <div>
              <button className="bg-transparent hover:bg-[#d5242a] text-red-700 font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EventList = ({ events }: { events: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-10 gap-10 px-2">
      {events.map((event: any, index: number) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const { orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
  }, [isDesktop]);

  const events = [
    {
      title: "Wallstreet",
      thumbnail: wallstreet,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: ceo,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: ipl,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: wallstreet,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: ceo,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: ipl,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    // Add more events as needed
  ];

  return (
    // <div className="h-full bg-[#121212] bg-[url('/assets/event_red1.png')] bg-center bg-blend-color bg-no-repeat">
    //   <div className="h-full bg-gradient-to-b from-[#000_25%] via-[rgba(0,0,0,0)_54.05%] to-[#000_100%]">
    //     <div className="w-full h-full flex justify-center overflow-hidden">
    //       <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
    //         <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
    //           <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
    //           <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
    //             Events
    //           </span>
    //           <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
    //         </div>
    //         <EventList events={events} />
    //         <div className="flex justify-center mt-10 py-16">
    //           <Link
    //             href="/events"
    //             className="text-white text-lg lg:w-1/6 py-2 px-4 bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]  uppercase text-center"
    //           >
    //             View all events
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <Cursor isDesktop={isDesktop} />
      <div className="bg-[#121212]">
        <div className="bg-red-800 bg-[url('/assets/event_red2.png')] bg-blend-darken bg-cover bg-left bg-no-repeat">
          <div className="h-full bg-gradient-to-b from-[#000_-7.15%] via-[rgba(0,0,0,0.7)_55.96%] to-[#000_91.54%]">
            <Navbar />
            <div className="w-full h-full flex justify-center overflow-hidden">
              <div className="w-full max-w-6xl 2xl:max-w-[95%] px-6 py-16">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
                  <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                    Events
                  </span>
                  <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
                </div>

                <EventList events={events} />
                <div className="flex justify-center mt-10 pb-16">
                  <Link
                    href="/events/carnival"
                    className="text-center text-white text-base w-3/4 md:w-1/2 lg:w-1/6 py-2 px-4 bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34] uppercase"
                  >
                    View Conso Carnival
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-[url('/assets/red.png')] bg-top">
          <div className="h-full bg-gradient-to-b from-[#000_8%] via-[rgba(0,0,0,0.7)_26.83%] to-[#000_93.79%]">
            <div className="w-full h-full flex justify-center overflow-hidden">
              <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]">
                    Contact Us
                  </span>
                  <div className="w-3/4 lg:w-1/4 h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
                  <h2 className="text-white mt-6 text-center text-xs sm:text-base">
                    For any queries relating to speaker sessions, do reach out
                    to us at{" "}
                    <Link
                      href="mailto:consortium@ecellvnit.co.in"
                      className="text-[#FF2D34]"
                    >
                      consortium@ecellvnit.co.in
                    </Link>
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center gap-10 px-2">
                  <div />
                  <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="md:w-[450px] hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] relative bg-black lg:scale-90 mb-5 overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
                        <div className="flex items-center gap-4">
                          <Image
                            src={tanmay}
                            alt="tanmay"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-100 transform"
                          />

                          <div className="transition-all transform duration-500">
                            <h1 className="text-white-600 dark:text-gray-200 font-bold">
                              Tanmay Nagrale
                            </h1>
                            <p className="text-gray-400">
                              Head Of Events and Planning
                            </p>
                          </div>
                        </div>
                        <div className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                            <Link href="">
                              <FaPhone
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <MdEmail
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <FaLinkedin
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="md:w-[450px] hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] relative bg-black lg:scale-90 mb-5 overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
                        <div className="flex items-center gap-4">
                          <Image
                            src={tanmay}
                            alt="tanmay"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-100 transform"
                          />

                          <div className="transition-all transform duration-500">
                            <h1 className="text-white-600 dark:text-gray-200 font-bold">
                              Tanmay Nagrale
                            </h1>
                            <p className="text-gray-400">
                              Head Of Events and Planning
                            </p>
                            <a
                              href=""
                              className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all duration-500"
                            ></a>
                          </div>
                        </div>
                        <div className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                            <Link href="">
                              <FaPhone
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <MdEmail
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <FaLinkedin
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
