(this["webpackJsonpryancgibson.com"]=this["webpackJsonpryancgibson.com"]||[]).push([[0],{250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(68),l=a.n(r),i=(a(75),a(76),a(2)),o=a(3),s=a(5),u=a(4),m=a(6),b=(a(77),n.Component,a(38),a(78),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},this.props.children)}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,r="tab-list-item";return a===n&&(r+=" tab-list-active"),c.a.createElement("li",{className:r,onClick:e},n)}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return c.a.createElement("div",{className:"tabs"},c.a.createElement("ol",{className:"tab-list"},t.map((function(t){var n=t.props.label;return c.a.createElement(p,{activeTab:a,key:n,label:n,onClick:e})}))),c.a.createElement("div",{className:"tab-content"},t.map((function(e){if(e.props.label===a)return e.props.children}))))}}]),t}(n.Component),h=(a(79),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"item"},"1"))}}]),t}(n.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"about",className:"content_wrapper"},c.a.createElement(d,null,c.a.createElement("div",{label:"About Me"}),c.a.createElement("div",{label:"Skills"},"Skills? What skills?"),c.a.createElement("div",{label:"Projects"},c.a.createElement(b,null,c.a.createElement(h,null),c.a.createElement(h,null),c.a.createElement(h,null),c.a.createElement(h,null)))))}}]),t}(n.Component),f=(a(80),a(69)),E=a.n(f),j=(a(67),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{width:"98vw",height:"100vh",params:{particles:{number:{value:120,density:{enable:!0,value_area:800}},color:{value:["#ff4141","#D90E27","#ff5a5a","B80606","F31010","FF8F8F"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:1,shape:"triangle"}},opacity:{value:.9,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:100,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:200,color:{value:["#ff4141","#D90E27","#ff5a5a","B80606","F31010","FF8F8F"]},opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:300,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}))}}]),t}(n.Component)),O=(a(250),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"noTouch"},c.a.createElement("div",{id:"section-header"},c.a.createElement("div",{className:"Button_Wrapper"},c.a.createElement("div",{className:"yesTouch"},c.a.createElement("a",{className:"ButtonAnimation ButtonAnimation_Item",href:"#about"},"LEARN MORE"))))))}}]),t}(n.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"panel"},c.a.createElement("div",{className:"mainText"},c.a.createElement("h1",{className:"mainIntro"},"Ryan Gibson"),c.a.createElement("h3",{className:"subIntro"},"Full-Stack Software Developer")),c.a.createElement("div",{className:"mobileText"},c.a.createElement("h1",{className:"mainIntroMobile"},"Ryan Gibson"),c.a.createElement("h3",{className:"subIntroMobile"},"Software Developer")),c.a.createElement(O,null)))}}]),t}(n.Component);var k=function(){return c.a.createElement("div",{className:"flex"},c.a.createElement("section",{id:"home",className:"canvas"},c.a.createElement(j,null),c.a.createElement(y,null)),c.a.createElement(v,null),c.a.createElement("footer",{className:"footer"},"Website in active development by Ryan Gibson"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){e.exports=a(251)},75:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/background.3b8b00e0.jpg"},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.50a8f143.chunk.js.map