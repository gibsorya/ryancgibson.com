(this["webpackJsonpryancgibson.com"]=this["webpackJsonpryancgibson.com"]||[]).push([[0],{251:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(68),r=a.n(c),i=(a(75),a(76),a(2)),o=a(3),s=a(5),m=a(4),u=a(6),b=(a(77),n.Component,a(38),a(78),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},this.props.children)}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,c="tab-list-item";return a===n&&(c+=" tab-list-active"),l.a.createElement("li",{className:c,onClick:e},n)}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return l.a.createElement("div",{className:"tabs"},l.a.createElement("ol",{className:"tab-list"},t.map((function(t){var n=t.props.label;return l.a.createElement(p,{activeTab:a,key:n,label:n,onClick:e})}))),l.a.createElement("div",{className:"tab-content"},t.map((function(e){if(e.props.label===a)return e.props.children}))))}}]),t}(n.Component),h=(a(79),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"item"},"1"))}}]),t}(n.Component)),v=(a(80),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.image;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:""+a,alt:""}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"skillName"},t))))}}]),t}(n.Component)),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about",className:"content_wrapper"},l.a.createElement(d,null,l.a.createElement("div",{label:"About Me"},"UPDATE: June 4th, 2020",l.a.createElement("p",{style:{textAlign:"left",fontSize:"1.1em",display:"flex"}},"Hello! Thank you for checking out my site. This website is under constant development and isn't finished. Updates are made everyday. There will most likely be a video placed in this about me section, which I will do last. Meanwhile, I'll post updates in here!"),l.a.createElement("h2",{style:{marginBottom:0}},"Changelog 6/4/2020"),l.a.createElement("ul",{style:{margin:"0 auto",display:"table",textAlign:"left"}},l.a.createElement("li",null,"Added skills and their respective logos"),l.a.createElement("li",null,"Updated Grid component to be more responsive"),l.a.createElement("li",null,"Fixed fonts not working correctly on most devices"))),l.a.createElement("div",{label:"Skills"},l.a.createElement("div",{className:"headers",style:{marginTop:"0px"}},"Tools/Languages"),l.a.createElement(b,null,l.a.createElement(v,{name:"Java",image:"/logos/java.png"}),l.a.createElement(v,{name:"C#",image:"/logos/c.png"}),l.a.createElement(v,{name:"Python",image:"/logos/python.png"}),l.a.createElement(v,{name:"JavaScript",image:"/logos/js.png"}),l.a.createElement(v,{name:"React",image:"/logos/react.png"}),l.a.createElement(v,{name:"Unity",image:"/logos/unity.png"}))),l.a.createElement("div",{label:"Projects"},l.a.createElement(b,null,l.a.createElement(h,null),l.a.createElement(h,null),l.a.createElement(h,null),l.a.createElement(h,null)))))}}]),t}(n.Component),E=(a(81),a(69)),y=a.n(E),g=(a(67),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{width:"98vw",height:"100vh",params:{particles:{number:{value:120,density:{enable:!0,value_area:800}},color:{value:["#ff4141","#D90E27","#ff5a5a","B80606","F31010","FF8F8F"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:1,shape:"triangle"}},opacity:{value:.9,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:100,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:200,color:{value:["#ff4141","#D90E27","#ff5a5a","B80606","F31010","FF8F8F"]},opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:300,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}))}}]),t}(n.Component)),j=(a(251),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"noTouch"},l.a.createElement("div",{id:"section-header"},l.a.createElement("div",{className:"Button_Wrapper"},l.a.createElement("div",{className:"yesTouch"},l.a.createElement("a",{className:"ButtonAnimation ButtonAnimation_Item",href:"#about"},"LEARN MORE"))))))}}]),t}(n.Component)),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"panel"},l.a.createElement("div",{className:"mainText"},l.a.createElement("h1",{className:"mainIntro"},"Ryan Gibson"),l.a.createElement("h3",{className:"subIntro"},"Full-Stack Software Developer")),l.a.createElement("div",{className:"mobileText"},l.a.createElement("h1",{className:"mainIntroMobile"},"Ryan Gibson"),l.a.createElement("h3",{className:"subIntroMobile"},"Software Developer")),l.a.createElement(j,null)))}}]),t}(n.Component);var k=function(){return l.a.createElement("div",{className:"flex"},l.a.createElement("section",{id:"home",className:"canvas"},l.a.createElement(g,null),l.a.createElement(O,null)),l.a.createElement(f,null),l.a.createElement("footer",{className:"footer"},"Website in active development by Ryan Gibson"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){e.exports=a(252)},75:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/background.3b8b00e0.jpg"},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.6c3ebf4d.chunk.js.map