gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".text-about")

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".about-container",
        start: "bottom bottom",
        scrub: 1,
        pin: true,
        snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 1 },
        },
        end: ("+=3000"),

    },
});