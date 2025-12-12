"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full bg-white font-sans md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
                <h2 className="-mt-12 text-5xl tracking-wider flex justify-center align-middle text-center" style={{ fontFamily: "'Anton', sans-serif" }}>My Experiences</h2>
                <p className="text-neutral-700 mt-4 flex justify-center align-middle text-center mb-20 lg:mb-6">

                    Over the years, I’ve taken on diverse roles and projects that have helped me grow both personally and professionally.<br /> This timeline highlights the pivotal moments in my journey, showcasing the skills, achievements, and learnings that define my career path
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl -my-32 pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-black">

                                <h3>{item.date}</h3>
                                <h3 className="text-3xl text-neutral-700 ">{item.title}</h3>
                                <h3 className="text-3xl text-neutral-500 ">{item.job}</h3>
                            </h3>
                        </div>


                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                                <h3>{item.date}</h3>
                                <h3 className="text-3xl text-neutral-700 ">{item.title}</h3>
                                <h3 className="text-3xl text-neutral-500 ">{item.job}</h3>
                            </h3>
                            {item.contents.map((content, idx) => (
                                <p
                                    className="mb-3 mt-2 text-base sm:text-lg md:text-xl text-neutral-900 leading-relaxed"
                                    key={idx}
                                >
                                    {content}
                                </p>
                            ))}

                        </div>
                    </div>
                ))}

                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-neutral-700 via-neutral-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
