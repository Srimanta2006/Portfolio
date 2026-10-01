import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {
    const textRef = useRef(null);
    const text =
        "Bridging the gap between UI/UX design and technical execution with a strong focus on responsiveness, accessibility and micro-interaction.";
    const words = text.split(" ");

    React.useEffect(() => {
        const element = textRef.current;

        if (!element) return undefined;

        const context = gsap.context(() => {
            const wordElements = element.querySelectorAll(".word");

            gsap.fromTo(
                wordElements,
                { opacity: 0.15 },
                {
                    opacity: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                    },
                },
            );
        }, element);

        return () => context.revert();
    }, []);

    return (
        <section className="page w-full px-4 sm:px-6 md:px-8" aria-labelledby="about-intro">
            <div className="space"></div>

            <h1
                ref={textRef}
                id="about-intro"
                itemProp="description"
                className="text w-full max-w-5xl m-auto text-[8vw] leading-[1.1] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] lg:leading-[3vw] text-center font-[font1] font-bold"
            >
                {words.map((word, index) => (
                    <span className="word opacity-50" key={`${word}-${index}`}>
                        {word}{" "}
                    </span>
                ))}
            </h1>
        </section>
    );
};

export default AboutText;