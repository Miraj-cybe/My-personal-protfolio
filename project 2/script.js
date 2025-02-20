// JavaScript for interactive elements
function showMessage() {
    document.getElementById("message").textContent = "Thanks for visiting!";
    document.getElementById("message").style.color = "yellow";
}
// Animate the header elements
gsap.from("header h1", { 
    duration: 1.5, 
    opacity: 0, 
    y: -50, 
    ease: "power2.out" 
});

gsap.from("header p", { 
    duration: 1.5, 
    opacity: 0, 
    y: 50, 
    ease: "power2.out", 
    delay: 0.5 
});

// Animate the cards with a stagger effect
gsap.from(".card", { 
    duration: 1, 
    opacity: 0, 
    scale: 0.8, 
    ease: "back.out(1.7)", 
    stagger: 0.3 
});

// Button click animation
document.querySelector("button").addEventListener("click", () => {
    gsap.to("#message", { 
        duration: 0.5, 
        opacity: 1, 
        scale: 1.2, 
        color: "yellow", 
        ease: "elastic.out(1, 0.5)" 
    });
});
gsap.from(".container", { 
    scrollTrigger: ".container",
    duration: 1.5, 
    opacity: 0, 
    y: 100, 
    ease: "power2.out" 
});
