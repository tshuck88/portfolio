(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,c){e.exports={Contact:"Contact_Contact__56FuD",ContactText:"Contact_ContactText__2mqVf",ContactImage:"Contact_ContactImage__2Ha_w",Container:"Contact_Container__2S5kY"}},14:function(e,t,c){e.exports={Projects:"Projects_Projects__1i54O",buttonWrapper:"Projects_buttonWrapper__16uQ1"}},32:function(e,t,c){e.exports={NavigationMenu:"NavigationMenu_NavigationMenu__3Enik",navScroll:"NavigationMenu_navScroll__3eWb9",Sidebar:"NavigationMenu_Sidebar__2_1Gi"}},37:function(e,t,c){e.exports={AboutMe:"AboutMe_AboutMe__2NHjc",imgWrapper:"AboutMe_imgWrapper__ntPRo"}},39:function(e,t,c){e.exports={NavMenuItem:"NavMenuItem_NavMenuItem__AZiGj"}},40:function(e,t,c){e.exports={DrawerToggle:"Hamburger_DrawerToggle__2Bwav"}},42:function(e,t,c){e.exports={Jumbotron:"Jumbotron_Jumbotron__CCKtS"}},55:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),s=c(5),i=c.n(s),l=(c(55),c(56),c(30)),o=c(32),b=c.n(o),d=c(39),j=c.n(d),u=function(e){return Object(n.jsx)("li",{className:j.a.NavMenuItem,children:Object(n.jsx)("a",{href:e.link,children:e.children})})},h=c(25),m=c(36),p=c(4),x=c(87),O=c(92),f=c(91),g=c(89),N=c(93),v=c(40),k=c.n(v),y=function(){return Object(n.jsxs)("div",{className:k.a.DrawerToggle,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})},w=Object(x.a)({list:{width:250},fullList:{width:"auto"}});function _(){var e=w(),t=a.a.useState({left:!1}),c=Object(l.a)(t,2),r=c[0],s=c[1],i=function(e,t){return function(c){("keydown"!==c.type||"Tab"!==c.key&&"Shift"!==c.key)&&s(Object(m.a)(Object(m.a)({},r),{},Object(h.a)({},e,t)))}},o=function(e){switch(e){case"home":return"/";case"about":return"/#about";case"projects":return"/#projects";case"contact":return"/#contact";case"resume":default:return"/"}},b=function(t){return Object(n.jsx)("div",{className:Object(p.a)(e.list,Object(h.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:i(t,!1),onKeyDown:i(t,!1),children:Object(n.jsx)(g.a,{children:["home","about","projects","contact","resume"].map((function(e,t){return Object(n.jsx)(N.a,{button:!0,children:Object(n.jsx)(u,{link:o(e),children:e.toUpperCase()})},e)}))})})};return Object(n.jsx)("div",{children:["left"].map((function(e){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(f.a,{onClick:i(e,!0),children:Object(n.jsx)(y,{})}),Object(n.jsx)(O.a,{anchor:e,open:r[e],onClose:i(e,!1),children:b(e)})]},e)}))})}var C=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(r.useRef)();return s.current=c,Object(r.useEffect)((function(){var e=function(){var e=window.scrollY>100;s.current!==e&&a(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),Object(n.jsxs)("nav",{className:"sticky-top ".concat(c?b.a.navScroll:null),children:[Object(n.jsxs)("ul",{className:b.a.NavigationMenu,children:[Object(n.jsx)(u,{link:"/",children:"HOME"}),Object(n.jsx)(u,{link:"/index.html#about",children:"ABOUT"}),Object(n.jsx)(u,{link:"/index.html#projects",children:"PROJECTS"}),Object(n.jsx)(u,{link:"/index.html#contact",children:"CONTACT"}),Object(n.jsx)(u,{link:"/resume",children:"RESUME"})]}),Object(n.jsx)("div",{className:b.a.Sidebar,children:Object(n.jsx)(_,{})})]})},B=c(42),S=c.n(B),M=c(33),W=(c(61),c(43)),I=c(44),T=c(46),D=c(45),A=function(e){Object(T.a)(c,e);var t=Object(D.a)(c);function c(e){var n;return Object(W.a)(this,c),(n=t.call(this,e)).state={hidden:!0},n}return Object(I.a)(c,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({hidden:!1})}),this.props.waitBeforeShow)}},{key:"render",value:function(){return this.state.hidden?"":this.props.children}}]),c}(a.a.Component),R=function(){return Object(n.jsxs)("div",{className:S.a.Jumbotron,children:[Object(n.jsx)(M.a,{string:"Hi,",delay:150,stopBlinkinOnComplete:!0}),Object(n.jsx)("br",{}),Object(n.jsx)(A,{waitBeforeShow:2e3,children:Object(n.jsx)(M.a,{string:"I'm Tyler.",delay:150,stopBlinkinOnComplete:!0})}),Object(n.jsx)("br",{}),Object(n.jsx)(A,{waitBeforeShow:5e3,children:Object(n.jsx)(M.a,{string:"Welcome to my website.",delay:150})})]})},P=c(37),L=c.n(P),E=c.p+"static/media/bioPic.d30cacfc.jpg",F=function(){return Object(n.jsx)("div",{className:L.a.AboutMe,id:"about",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("div",{className:L.a.imgWrapper,children:Object(n.jsx)("img",{src:E,alt:"Tyler Shuck"})})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h1",{children:"About Me"}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})})})},G=c(14),J=c.n(G),H=function(){return Object(n.jsx)("div",{className:J.a.Projects,id:"projects",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("h1",{children:"My Projects"}),Object(n.jsxs)("div",{className:"row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Burger Builder"}),Object(n.jsx)("p",{className:"card-text",children:"Application allowing users to build and order themselves a burger. Built with React, Redux, and Firebase."})]}),Object(n.jsxs)("div",{className:"".concat(J.a.buttonWrapper," buttonWrapper d-flex justify-content-between"),children:[Object(n.jsx)("a",{href:"https://github.com/tshuck88/burger-builder",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Github"})}),Object(n.jsx)("a",{href:"https://cranky-yalow-0d2e3c.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Demo"})})]})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"VolunTeam!"}),Object(n.jsx)("p",{className:"card-text",children:"Volunteering and community service event website allowing users to search for and create events. Developed in a group of 4 using React, Node.js, Express, MongoDB, and more."})]}),Object(n.jsxs)("div",{className:"".concat(J.a.buttonWrapper," buttonWrapper d-flex justify-content-between"),children:[Object(n.jsx)("a",{href:"https://github.com/ajperkins92/Project-3",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Github"})}),Object(n.jsx)("a",{href:"https://quiet-hamlet-85082.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Demo"})})]})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Shopazon"}),Object(n.jsx)("p",{className:"card-text",children:"E-commerce website where users can browse and purchase products. Built in a group of 4 using JavaScript, jQuery, Node.js, Express Handlebars, MySQL, and more."})]}),Object(n.jsxs)("div",{className:"".concat(J.a.buttonWrapper," buttonWrapper d-flex justify-content-between"),children:[Object(n.jsx)("a",{href:"https://github.com/jazznerd206/Shopazon",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Github"})}),Object(n.jsx)("a",{href:"https://evening-mesa-27220.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Demo"})})]})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Plant-Forge"}),Object(n.jsx)("p",{className:"card-text",children:"Website developed for a startup company using HTML, CSS, JavaScript, MailChimp, and BigCommerce online store."})]}),Object(n.jsxs)("div",{className:"".concat(J.a.buttonWrapper," buttonWrapper d-flex justify-content-between"),children:[Object(n.jsx)("a",{href:"https://github.com/tshuck88/plant-forge",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Github"})}),Object(n.jsx)("a",{href:"http://plant-forge.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Demo"})})]})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Burger Builder"}),Object(n.jsx)("p",{className:"card-text",children:"Application allowing users to build and order themselves a burger. Built with React, Redux, and Firebase."})]}),Object(n.jsxs)("div",{className:"".concat(J.a.buttonWrapper," buttonWrapper d-flex justify-content-between"),children:[Object(n.jsx)("a",{href:"https://github.com/tshuck88/burger-builder",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Github"})}),Object(n.jsx)("a",{href:"https://cranky-yalow-0d2e3c.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Demo"})})]})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Burger Builder"}),Object(n.jsx)("p",{className:"card-text",children:"Application allowing users to build and order themselves a burger. Built with React, Redux, and Firebase."})]}),Object(n.jsxs)("div",{className:"".concat(J.a.buttonWrapper," buttonWrapper d-flex justify-content-between"),children:[Object(n.jsx)("a",{href:"https://github.com/tshuck88/burger-builder",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Github"})}),Object(n.jsx)("a",{href:"https://cranky-yalow-0d2e3c.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Demo"})})]})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Burger Builder"}),Object(n.jsx)("p",{className:"card-text",children:"Application allowing users to build and order themselves a burger. Built with React, Redux, and Firebase."})]}),Object(n.jsxs)("div",{className:"".concat(J.a.buttonWrapper," buttonWrapper d-flex justify-content-between"),children:[Object(n.jsx)("a",{href:"https://github.com/tshuck88/burger-builder",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Github"})}),Object(n.jsx)("a",{href:"https://cranky-yalow-0d2e3c.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Demo"})})]})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Burger Builder"}),Object(n.jsx)("p",{className:"card-text",children:"Application allowing users to build and order themselves a burger. Built with React, Redux, and Firebase."})]}),Object(n.jsxs)("div",{className:"".concat(J.a.buttonWrapper," buttonWrapper d-flex justify-content-between"),children:[Object(n.jsx)("a",{href:"https://github.com/tshuck88/burger-builder",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Github"})}),Object(n.jsx)("a",{href:"https://cranky-yalow-0d2e3c.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Demo"})})]})]})})]})]})})},z=c(11),Q=c.n(z),U=function(){return Object(n.jsx)("div",{className:Q.a.Contact,id:"contact",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h1",{children:"Contact"}),Object(n.jsx)("div",{className:Q.a.Container,children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{className:Q.a.ContactItem,children:[Object(n.jsx)("a",{href:"mailto:tshuck88@gmail.com",children:Object(n.jsx)("button",{className:"".concat(Q.a.ContactImage," btn btn-dark"),type:"button",children:Object(n.jsx)("i",{className:"far fa-envelope"})})}),Object(n.jsx)("a",{className:Q.a.ContactText,href:"mailto:tshuck88@gmail.com",children:"tshuck88@gmail.com"})]}),Object(n.jsxs)("p",{className:Q.a.ContactItem,children:[Object(n.jsx)("a",{className:"".concat(Q.a.ContactImage," btn btn-dark"),href:"https://github.com/tshuck88",type:"button",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("i",{className:"fab fa-github"})}),Object(n.jsx)("a",{className:Q.a.ContactText,href:"https://github.com/tshuck88",target:"_blank",rel:"noreferrer",children:"github.com/tshuck88"})]}),Object(n.jsxs)("p",{className:Q.a.ContactItem,children:[Object(n.jsx)("a",{className:"".concat(Q.a.ContactImage," btn btn-dark"),href:"https://www.linkedin.com/in/tyler-shuck/",type:"button",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("i",{className:"fab fa-linkedin"})}),Object(n.jsx)("a",{className:Q.a.ContactText,href:"https://www.linkedin.com/in/tyler-shuck/",target:"_blank",rel:"noreferrer",children:"linkedin.com/in/tyler-shuck"})]})]})})]})})})})};var V=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(C,{}),Object(n.jsx)(R,{}),Object(n.jsx)(F,{}),Object(n.jsx)(H,{}),Object(n.jsx)(U,{})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,95)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};i.a.render(Object(n.jsx)(V,{}),document.getElementById("root")),q()}},[[62,1,2]]]);
//# sourceMappingURL=main.03cf6355.chunk.js.map