"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import NarrativeCard from "./NarrativeCard";

// Define the content for the tour
const stops = [
    {
        id: 1,
        location: "Antwerp Central Station",
        title: "The Temple of Iron",
        text1: "Welcome to the waiting room of the north. King Leopold wanted a station; he got a temple. Look at the dome—75 meters of glass and iron built for the eye, not just the train.",
        image1: "/images/central.jpg",
        text2: "We start high. We descend deep.",
        bgImage: "/images/station_right.jpg" // Updated per user request
    },
    {
        id: 2,
        location: "The Rubenshuis",
        title: "The Diplomat's Palace",
        text1: "Peter Paul Rubens was not a starving artist. He was a diplomat and a superstar. He bought this house in 1610 to show Antwerp that he had arrived.",
        image1: "/images/1.jpg",
        text2: "Behind these walls, he managed a factory of genius. Van Dyck, Jordaens—they all walked these stones.",
        bgImage: "/images/rubens.jpg" // Updated per user request
    },
    {
        id: 3,
        location: "Cathedral of Our Lady",
        title: "Intimidation in Stone",
        text1: "This space was built to intimidate you. Stone designed to make you feel small so the art can make you feel infinite.",
        image1: "/images/2.jpg",
        text2: "Look at the tension in the muscles. The 'Baroque Diagonal' surges from bottom left to top right. Christ is looking up—the connection between the body and the divine.",
        image2: "/images/3a.jpg",
        bgImage: "/images/Descent_from_the_Cross_(Rubens)_July_2015-1a.jpg"
    },
    {
        id: 4,
        location: "Vlaeykensgang Alley",
        title: "The Gut of the City",
        text1: "Step out of the gold and into the mud. In 1591, this was where the shoemakers lived.",
        image1: "/images/4.jpg",
        text2: "To paint the light of the cross, you must understand the darkness of the street.",
        bgImage: "/images/Vlaaikensgang1.jpg"
    },
    {
        id: 5,
        location: "St. Paul’s Church",
        title: "The Insider's Secret",
        text1: "The Cathedral is for the tourists. St. Paul’s is for the insiders. Fifteen paintings by fifteen masters on one wall.",
        image1: "/images/5.jpg",
        text2: "It is a rap battle in oil paint. We are done walking. Now, you look.",
        bgImage: "/images/cathedral_left.jpg" // Using as stand-in
    }
];

export default function ScrollyTelling() {
    const [activeStop, setActiveStop] = useState(0);

    return (
        <div id="tour-start" className="relative w-full text-[#E6E2D6] font-serif">
            <div className="flex flex-col md:flex-row">

                {/* Left Column: Scrolling Content */}
                <div className="w-full md:w-1/2 z-10 relative">
                    {stops.map((stop, index) => (
                        <StopWrapper
                            key={stop.id}
                            index={index}
                            setActive={setActiveStop}
                        >
                            <NarrativeCard
                                title={stop.title}
                                location={stop.location}
                                text1={stop.text1}
                                image1={stop.image1}
                                text2={stop.text2}
                                image2={stop.image2}
                            />
                        </StopWrapper>
                    ))}

                    {/* Progress Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 hidden md:block">
                        <motion.div
                            className="w-full bg-[#C5A065]"
                            style={{ height: `${((activeStop + 1) / stops.length) * 100}%` }}
                            layout
                        />
                    </div>
                </div>

                {/* Right Column: Backgrounds */}
                {/* Mobile: Fixed Full Screen Background (z-0) */}
                {/* Desktop: Sticky Right Column (w-1/2) */}
                <div className="fixed inset-0 z-0 md:relative md:w-1/2 md:h-screen md:sticky md:top-0 md:right-0 overflow-hidden bg-black">
                    {stops.map((stop, index) => (
                        <motion.div
                            key={stop.id}
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeStop === index ? 1 : 0 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Background Image */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={stop.bgImage}
                                    alt={stop.location}
                                    fill
                                    className="object-cover opacity-40 md:opacity-60" // Subtle on mobile
                                    priority={index <= 1} // Prioritize first images
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1014] via-transparent to-transparent" />
                                {/* Mobile extra darken layer for readability */}
                                <div className="absolute inset-0 bg-black/50 md:bg-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}

// Wrapper to detect view
function StopWrapper({ children, index, setActive }: { children: React.ReactNode, index: number, setActive: (i: number) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActive(index);
        }
    }, [isInView, index, setActive]);

    return <div ref={ref}>{children}</div>;
}
