(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(41)},22:function(e,a,t){},32:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),s=t(12),o=(t(22),t(2)),i=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,s=i.includes(c)?c:i[0],u=m.includes(r)?r:m[0];return l.a.createElement(o.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(32);var b=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),i=Object(s.a)(r,2),m=i[0],b=i[1],E=function(){return c(!1)},p=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(n.useEffect)(function(){p()},[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(o.b,{to:"/",className:"navbar-logo",onClick:E},"A.V.L",l.a.createElement("i",{class:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/",className:"nav-links",onClick:E},"Homepage")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/services",className:"nav-links",onClick:E},"Courses")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/products",className:"nav-links",onClick:E},"Projects")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/sign-up",className:"nav-links-mobile",onClick:E},"Information"))),m&&l.a.createElement(u,{buttonStyle:"btn--outline"},"About Me"))))};t(8),t(35);var E=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(o.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var p=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check Out My Awesome Projects!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(E,{src:"./images/img-9.jpg",text:"Database project storing info",label:"Main",path:"/services"}),l.a.createElement(E,{src:"./images/img-2.jpg",text:"Building a professional website through React",label:"Main",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(E,{src:"./images/img-3.jpg",text:"Making a mobile app",label:"Secondary",path:"/services"}),l.a.createElement(E,{src:"./images/img-4.jpg",text:"Developing a website through basic HTML, CSS, & Javascript",label:"Secondary",path:"/products"}),l.a.createElement(E,{src:"./images/img-8.jpg",text:"Coding a game under Unreal Engine 5",label:"Secondary",path:"/sign-up"})))))};t(37);var d=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"Andy Luong"),l.a.createElement("p",null,"San Jose State University: Computer Science"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"About Me"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"Video About Me ",l.a.createElement("i",{className:"far fa-play-circle"}))))};t(39);var g=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Enter your email if you are interested in contacting me."),l.a.createElement("p",{className:"footer-subscription-text"},"I will be in contact in the next 24-48 hours."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Send")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Me"),l.a.createElement(o.b,{to:"/sign-up"},"Profile"),l.a.createElement(o.b,{to:"/"},"1st Year"),l.a.createElement(o.b,{to:"/"},"2nd Year"),l.a.createElement(o.b,{to:"/"},"3rd Year"),l.a.createElement(o.b,{to:"/"},"4th Year")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Languages"),l.a.createElement(o.b,{to:"/"},"Python and Java"),l.a.createElement(o.b,{to:"/"},"HTML, CSS, Javascript"),l.a.createElement(o.b,{to:"/"},"SQL"),l.a.createElement(o.b,{to:"/"}))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(o.b,{to:"/"}),l.a.createElement(o.b,{to:"/"}),l.a.createElement(o.b,{to:"/"}),l.a.createElement(o.b,{to:"/"})),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(o.b,{to:{pathname:"https://www.linkedin.com/in/andy-luong-computer-scientist/"},target:"_blank"},"LinkedIn"),l.a.createElement(o.b,{to:{pathname:"https://www.instagram.com/andwhyluong/"},target:"_blank"},"Instagram"),l.a.createElement(o.b,{to:{pathname:"https://www.facebook.com/andy.luong.967"},target:"_blank"},"Facebook"),l.a.createElement(o.b,{to:{pathname:"https://www.youtube.com/channel/UCh3hzSlmuEo9aRo2GYSjkag"},target:"_blank"},"YouTube"),l.a.createElement(o.b,{to:{pathname:"https://github.com/AndyVuLuong/Tunderstom"},target:"_blank"},"GitHub")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(o.b,{to:"/",className:"social-logo"},"A.V.L",l.a.createElement("i",{class:"fab fa-typo3"}))),l.a.createElement("small",{class:"website-rights"},"A.V.L \xa9 2022"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(o.b,{class:"social-icon-link facebook",to:{pathname:"https://www.facebook.com/andy.luong.967"},target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(o.b,{class:"social-icon-link instagram",to:{pathname:"https://www.instagram.com/andwhyluong/"},target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(o.b,{class:"social-icon-link youtube",to:{pathname:"https://www.youtube.com/channel/UCh3hzSlmuEo9aRo2GYSjkag"},target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(o.b,{class:"social-icon-link twitter",to:{pathname:"https://twitter.com/Tunderstom"},target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(o.b,{class:"social-icon-link twitter",to:{pathname:"https://www.linkedin.com/in/andy-luong-computer-scientist/"},target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(p,null),l.a.createElement(g,null))},h=t(1);function v(){return l.a.createElement("h1",{className:"services"},"Courses")}function k(){return l.a.createElement("h1",{className:"products"},"Projects")}function w(){return l.a.createElement("h1",{className:"sign-up"},"Thank You For Watching")}var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(b,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/",exact:!0,component:f}),l.a.createElement(h.a,{path:"/services",component:v}),l.a.createElement(h.a,{path:"/products",component:k}),l.a.createElement(h.a,{path:"/sign-up",component:w}))))};r.a.render(l.a.createElement(N,null),document.getElementById("root"))},8:function(e,a,t){}},[[17,2,1]]]);
//# sourceMappingURL=main.a0a5a0d6.chunk.js.map