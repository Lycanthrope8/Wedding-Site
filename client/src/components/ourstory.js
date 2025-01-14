import React from 'react';
import corner3 from "../assets/corner3.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Ourstory = () => {
    const sectionRef = React.useRef(null);
    const mufti = React.useRef(null);
    const weds = React.useRef(null);
    const momo = React.useRef(null);

    const getResponsiveValues = () => {
        const width = window.innerWidth;
        if (width < 640) {
            // mobile
            return {
                mufti: { scale: 0.6, x: 155, y: 130 },
                weds: { y: 157 },
                momo: { scale: 0.6, x: -130, y: 180 },
            };
        } else if (width < 1024) {
            // tablet
            return {
                mufti: { x: 120, y: 200 },
                weds: { y: 207 },
                momo: { x: -110, y: 232 },
            };
        } else {
            // desktop
            return {
                mufti: { x: 170, y: 300 },
                weds: { y: 307 },
                momo: { x: -155, y: 332 },
            };
        }
    };

    // Add resize listener to update animations
    React.useEffect(() => {
        const handleResize = () => {
            const values = getResponsiveValues();

            // Update animations on resize
            gsap.set(mufti.current, {
                scale: values.mufti.scale,
                x: values.mufti.x,
                y: values.mufti.y,
            });
            gsap.set(weds.current, {
                scale: 0.5,
                y: values.weds.y,
            });
            gsap.set(momo.current, {
                scale: values.momo.scale,
                x: values.momo.x,
                y: values.momo.y,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useGSAP(() => {
        const values = getResponsiveValues();

        gsap.fromTo(
            mufti.current,
            {
                scale: 0.5,
                x: values.mufti.x,
                y: values.mufti.y,
            },
            {
                scale: 1,
                x: 0,
                y: 0,
                scrollTrigger: {
                    trigger: mufti.current,
                    start: "top center",
                    end: "top top",
                    scrub: 1,
                },
            }
        );
        gsap.fromTo(
            weds.current,
            {
                scale: 0.5,
                y: values.weds.y,
            },
            {
                scale: 1,
                y: 0,
                scrollTrigger: {
                    trigger: weds.current,
                    start: "top center",
                    end: "top top",
                    scrub: 1,
                },
            }
        );
        gsap.fromTo(
            momo.current,
            {
                scale: 0.5,
                x: values.momo.x,
                y: values.momo.y,
            },
            {
                scale: 1,
                x: 0,
                y: 0,
                scrollTrigger: {
                    trigger: momo.current,
                    start: "top center",
                    end: "top top",
                    scrub: 1,
                },
            }
        );
    });
    return (
        <>
            <div
                id="ourstory"
                className="w-full min-h-screen pb-12 px-4 sm:px-6 lg:px-0"
            >
                <h1 className="absolute left-1/2 translate-x-[-50%] font-bold text-md lg:text-2xl text-custom-golden">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِي
                </h1>
                <img
                    src={corner3}
                    alt="Corner"
                    className="absolute top-100 left-0 size-24 lg:size-48 scale-x-[-1] -rotate-90"
                />
                <img
                    src={corner3}
                    alt="Corner"
                    className="absolute top-100 right-0 size-24 lg:size-48 rotate-90"
                />
                <div
                    className="flex items-center justify-center gap-2 lg:gap-4 pt-24 lg:pt-32"
                    ref={sectionRef}
                >
                    <h1
                        ref={mufti}
                        className="font-passionsConflict text-6xl sm:text-6xl lg:text-9xl text-yellow-600 z-40 will-change-transform"
                    >
                        Mufti
                    </h1>
                    <span
                        ref={weds}
                        className="font-passionsConflict text-2xl sm:text-6xl lg:text-6xl z-40 will-change-transform"
                    >
                        weds
                    </span>
                    <h1
                        ref={momo}
                        className="font-passionsConflict text-6xl sm:text-6xl lg:text-9xl text-yellow-600 z-40 will-change-transform"
                    >
                        Momo
                    </h1>

                </div>
            </div>
        </>
    )
}

export default Ourstory