const lenis = new Lenis()

lenis.on('scroll', (e) => {
   
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.to(".textlm",{
    width: "100%",
    scrollTrigger:{
        trigger:".two",

        scroller: 'body',
        start:"top top",
        end:"bottom -100%",
      
        scrub:1,
        pin:true

    }
})
gsap.to("body",{
    backgroundColor:"black",
   color:"white",
    scrollTrigger:{
        trigger:".two",

        scroller: 'body',
        start:"top top",
        end:" top 100%",
      
        scrub:1,
        pin:true

    }
})
