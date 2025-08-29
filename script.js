var fixed_con = document.querySelector("#fixed-element-image")
var element_con = document.querySelector("#row-content")

element_con.addEventListener("mouseenter", function(){
    fixed_con.style.display = "block"
})

element_con.addEventListener("mouseleave", function(){
    fixed_con.style.display = "none"
})

var elements = document.querySelectorAll(".element")
console.log(elements)
elements.forEach(function(x){
    x.addEventListener("mouseenter", function(){
        var imgPath = x.getAttribute("data-img")
        fixed_con.style.backgroundImage = `url(${imgPath})`
    })
})


// applying smooth scroll on our main wrapper using locomotive js library

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});