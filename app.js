var  slogan = document.querySelector('.slogan');
var  headline = document.getElementById('sloganHeading');
var  para = document.getElementById('sloganPara');

const tl = new TimelineMax();
tl.fromTo(slogan,1,{height: "0%"} , {height:"50%", ease:Power2.easeInOut})
.fromTo(
    slogan,1.2,
    {width:"0%"},
    {width:"80%", ease:Power2.easeInOut}
)
.fromTo(headline, 1.2,{x:"-100%"}, {x:"0%"}, "-=1.5")
.fromTo(para,1.2, {y: "50px", opacity:"0"}, {y:"0", opacity: "1",ease:Power2.ease})


