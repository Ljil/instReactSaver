(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),l=n.n(i),r=n(2),c=n(3),s=n(5),u=n(4),p=n(1),h=n(6),d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.links.length<1?o.a.createElement("p",null,"use link to download!"):this.props.links.map(function(e){return o.a.createElement("a",{href:e.node.display_url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:e.node.display_url,alt:"downloaded"}))})}}]),t}(o.a.Component),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={inputValue:""},n.handleURLInputChange=n.handleURLInputChange.bind(Object(p.a)(n)),n.handleURLButtonClick=n.handleURLButtonClick.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleURLInputChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handleURLButtonClick",value:function(e){this.state.inputValue.match(/https:\/\/www.instagram.com\/p\/[\w\d+_-]*\//i)?(console.log("Correct!"),this.ImageDownload(this.state.inputValue)):console.log("Invalid URL!"),this.setState({inputValue:""}),e.preventDefault()}},{key:"ImageDownload",value:function(e){var t=this,n=new XMLHttpRequest;n.open("GET",e+"?__a=1"),n.responseType="json",n.onload=function(){var e=n.response.graphql.shortcode_media.edge_sidecar_to_children.edges;console.log(e),console.log("props len ".concat(t.props.length)),t.props.handler(e)},n.send()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleURLButtonClick},o.a.createElement("input",{id:"URL",type:"text",value:this.state.inputValue,placeholder:"https://www.instagram.com/p/BwcKFP4nQ-o/",onChange:this.handleURLInputChange}),o.a.createElement("input",{type:"submit",value:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"}))}}]),t}(o.a.Component),g=(n(15),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={links:[],fetching:!0},n.updateState=n.updateState.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateState",value:function(e){this.setState({links:e,fetching:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,{handler:this.updateState}),o.a.createElement("div",{id:"Gallery-container"},o.a.createElement(d,{links:this.state.links})))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.32fc2cfb.chunk.js.map