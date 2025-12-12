"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";

import { cn } from "../lib/utils";

export const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const TextScroll = ({ text, default_velocity = 2, className }) => {
    const ParallaxText = ({ children, baseVelocity = 2, className }) => {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        });

        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        });

        const [repetitions, setRepetitions] = useState(1);
        const containerRef = useRef(null);
        const textRef = useRef(null);

        useEffect(() => {
            const calculateRepetitions = () => {
                if (containerRef.current && textRef.current) {
                    const containerWidth = containerRef.current.offsetWidth || 1;
                    const textWidth = textRef.current.offsetWidth || 1;
                    const newRepetitions = Math.max(Math.ceil(containerWidth / textWidth) + 2, 1);
                    setRepetitions(newRepetitions);
                }
            };

            const timeout = setTimeout(calculateRepetitions, 50);
            window.addEventListener("resize", calculateRepetitions);

            return () => {
                clearTimeout(timeout);
                window.removeEventListener("resize", calculateRepetitions);
            };
        }, [children]);

        const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
        const directionFactor = useRef(1);

        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

            if (velocityFactor.get() < 0) directionFactor.current = -1;
            else if (velocityFactor.get() > 0) directionFactor.current = 1;

            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        });

        return (
            <div
                className="w-full overflow-hidden whitespace-nowrap relative"
                ref={containerRef}
                style={{ minHeight: "1.5em" }}
            >
                {repetitions > 0 && (
                    <motion.div
                        className={cn(
                            "inline-block whitespace-nowrap text-black dark:text-black",
                            className
                        )}
                        style={{ x }}
                    >
                        {Array.from({ length: repetitions }).map((_, i) => (
                            <span
                                key={i}
                                ref={i === 0 ? textRef : null}
                                className="inline-block text-black dark:text-black"
                            >
                                {children}&nbsp;
                            </span>
                        ))}
                    </motion.div>
                )}
            </div>
        );
    };

    return (
        <section
            className="mt-4 lg:mt-14 relative w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ fontFamily: "'Anton', sans-serif" }}
        >
            {/* Example dummy text */}
            <ParallaxText baseVelocity={default_velocity} className={className}>
  UI/UX Designer · Frontend Developer · Social Media Marketing · SDE Intern —
</ParallaxText>
<ParallaxText baseVelocity={-default_velocity} className={className}>
  Building intuitive designs, scalable apps, and impactful digital experiences —
</ParallaxText>

        </section>
    );
};

export default TextScroll;
