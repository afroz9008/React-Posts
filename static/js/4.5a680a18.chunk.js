(this["webpackJsonpfunction-component"]=this["webpackJsonpfunction-component"]||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n(0),o=n.n(c),r=n(86),l=function(e){var t=e.color,n=e.onClick,a=e.disabled,c=e.label,l=e.className;return o.a.createElement(r.a,{className:"font-weight-bolder d-flex align-items-center shadow-none "+l,size:"sm",color:t,outline:!0,onClick:n,disabled:a},c)},s=n(2),i=n(5),u=n(1),f=n.n(u),b=n(9),d=n.n(b),m=n(3),p=f.a.oneOfType([f.a.number,f.a.string]),h=f.a.oneOfType([f.a.bool,f.a.string,f.a.number,f.a.shape({size:p,order:p,offset:p})]),O={children:f.a.node,hidden:f.a.bool,check:f.a.bool,size:f.a.string,for:f.a.string,tag:m.o,className:f.a.string,cssModule:f.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:f.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},j=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},v=function(e){var t=e.className,n=e.cssModule,a=e.hidden,c=e.widths,r=e.tag,l=e.check,u=e.size,f=e.for,b=Object(i.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];c.forEach((function(t,a){var c=e[t];if(delete b[t],c||""===c){var o,r=!a;if(Object(m.i)(c)){var l,s=r?"-":"-"+t+"-";o=j(r,t,c.size),p.push(Object(m.k)(d()(((l={})[o]=c.size||""===c.size,l["order"+s+c.order]=c.order||0===c.order,l["offset"+s+c.offset]=c.offset||0===c.offset,l))),n)}else o=j(r,t,c),p.push(o)}}));var h=Object(m.k)(d()(t,!!a&&"sr-only",!!l&&"form-check-label",!!u&&"col-form-label-"+u,p,!!p.length&&"col-form-label"),n);return o.a.createElement(r,Object(s.a)({htmlFor:f},b,{className:h}))};v.propTypes=O,v.defaultProps=g;var y=v,k=function(e){Object(c.useEffect)((function(){document.title="".concat(e.type," : ").concat(e.counts)}),[e.type,e.counts])};var E=function(e){var t=e.counter,n=e.count,r=e.dispatch,s=e.number1,i=Object(c.useRef)(null),u=Object(c.useState)(0),f=Object(a.a)(u,2),b=f[0],d=f[1];return k({type:t,counts:n}),Object(c.useEffect)((function(){return i.current=setInterval((function(){d((function(e){return e+1}))}),1e3),console.log("Counter component is mount"),function(){clearInterval(i.current),console.log("Counter Component Unmount")}}),[]),o.a.createElement("div",{className:"cards m-1"},o.a.createElement(y,null,s),o.a.createElement("br",null),o.a.createElement("div",{className:"d-flex align-items-center flex-column shadow p-5 bg-white rounded"},o.a.createElement("span",{className:"mb-3 border p-2"},"Timer : ",b,o.a.createElement(l,{color:"danger",onClick:function(){return clearInterval(i.current)},label:"Stop",className:"float-right mx-3 py-0"})),o.a.createElement("h3",{className:"mb-5 text-dark font-weight-bolder"},"Counts : ",n),o.a.createElement("div",{className:"d-flex justify-content-between w-100"},o.a.createElement(l,{color:"primary",onClick:function(){return r({type:"increment",counterType:t})},label:"+"}),o.a.createElement(l,{color:"warning",onClick:function(){return r({type:"decrement",counterType:t})},disabled:0===n,label:"-"}),o.a.createElement(l,{color:"danger",onClick:function(){return r({type:"reset",counterType:t})},disabled:0===n,label:"Reset"}))))},N=n(19),w=n(61),x={count1:0,count2:0},C=function(e,t){var n=t.type,a=t.counterType;switch(n){case"increment":return Object(w.a)(Object(w.a)({},e),{},Object(N.a)({},a,e[a]+1));case"decrement":return Object(w.a)(Object(w.a)({},e),{},Object(N.a)({},a,e[a]-1));case"reset":return Object(w.a)(Object(w.a)({},e),{},Object(N.a)({},a,x[a]));default:return e}},z=n(87),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(c.useState)(e),n=Object(a.a)(t,2),o=n[0],r=n[1],l=function(){r(e)},s={value:o,onChange:function(e){r(e.target.value)}};return[o,s,l]};var R=o.a.memo((function(e){e.number;var t=M(""),n=Object(a.a)(t,3),c=n[0],l=n[1],s=n[2],i=M(""),u=Object(a.a)(i,3),f=u[0],b=u[1],d=u[2];return o.a.createElement("div",{className:"cards"},o.a.createElement("div",{className:"d-flex flex-column m-1 shadow py-2 px-4 bg-white rounded"},o.a.createElement(y,{className:"my-3"},"FirstName : ",o.a.createElement(z.a,Object.assign({},l,{type:"text"}))),o.a.createElement(y,{className:"my-2"},"LastName : ",o.a.createElement(z.a,Object.assign({},b,{type:"text"}))),o.a.createElement(y,{className:"my-1 heading w-100"},c," - ",f),o.a.createElement(r.a,{onClick:function(){alert("Hello ".concat(c," ").concat(f," ")),s(),d()},className:"my-2",disabled:""===c.trim()||""===f.trim()},"Submit")))}));t.default=o.a.memo((function(){var e=Object(c.useReducer)(C,x),t=Object(a.a)(e,2),n=t[0],r=t[1],l=(Object(c.useMemo)((function(){return Math.floor(Math.random()*n.count1)}),[n.count1]),Object(c.useMemo)((function(){return Math.floor(Math.random()*n.count2)}),[n.count2]),Object(c.useCallback)((function(){return Math.random()}),[]));return o.a.createElement("div",{className:"vh-100 my-5 d-flex flex-wrap align-items-center justify-content-center"},o.a.createElement(E,{counter:"count1",count:n.count1,dispatch:r}),o.a.createElement(E,{counter:"count2",count:n.count2,dispatch:r}),o.a.createElement(R,{number:l}))}))},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(19);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},86:function(e,t,n){"use strict";var a=n(2),c=n(5),o=n(18),r=n(6),l=n(0),s=n.n(l),i=n(1),u=n.n(i),f=n(9),b=n.n(f),d=n(3),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,r=e.className,l=e.close,i=e.cssModule,u=e.color,f=e.outline,m=e.size,p=e.tag,h=e.innerRef,O=Object(c.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof O.children&&(O.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(f?"-outline":"")+"-"+u,j=Object(d.k)(b()(r,{close:l},l||"btn",l||g,!!m&&"btn-"+m,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),i);O.href&&"button"===p&&(p="a");var v=l?"Close":null;return s.a.createElement(p,Object(a.a)({type:"button"===p&&O.onClick?"button":void 0},O,{className:j,ref:h,onClick:this.onClick,"aria-label":n||v}))},t}(s.a.Component);p.propTypes=m,p.defaultProps={color:"secondary",tag:"button"},t.a=p},87:function(e,t,n){"use strict";var a=n(2),c=n(5),o=n(18),r=n(6),l=n(0),s=n.n(l),i=n(1),u=n.n(i),f=n(9),b=n.n(f),d=n(3),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,r=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,p=e.innerRef,h=Object(c.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),O=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),j=u||("select"===o||"textarea"===o?o:"input"),v="form-control";m?(v+="-plaintext",j=u||"input"):"file"===o?v+="-file":"range"===o?v+="-range":O&&(v=f?null:"form-check-input"),h.size&&g.test(h.size)&&(Object(d.q)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var y=Object(d.k)(b()(t,i&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,v),n);return("input"===j||u&&"function"===typeof u)&&(h.type=o),h.children&&!m&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(d.q)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),s.a.createElement(j,Object(a.a)({},h,{ref:p,className:y,"aria-invalid":i}))},t}(s.a.Component);p.propTypes=m,p.defaultProps={type:"text"},t.a=p}}]);
//# sourceMappingURL=4.5a680a18.chunk.js.map