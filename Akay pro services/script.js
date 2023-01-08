var tl = gsap.timeline();
tl.from("#nav",{
    y: -100,
    duration: .6,
    opacity: 0
})

tl.from("#mainI1",{
    x: -100,
    duration: .6,
    opacity: 0
})

tl.from("#akay",{
    y:200,
    duration: .6,
    opacity: 0
})

tl.from("#paraG1",{
    x:100,
    duration:.6,
    opacity:0
})

tl.from("#bookBtn",{
    duration: .6,
    opacity: 0,
    scale:1.2
})
