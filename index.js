const lenis = new Lenis()

lenis.on('scroll', (e) => {
   
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.to(".textll",{
    width: "100%",
    scrollTrigger:{
        trigger:".two",

        scroller: 'body',
        start:"top top",
        end:"bottom -100%",
        markers: true,
        scrub:1,
        pin:true

    }
})