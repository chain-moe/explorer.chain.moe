(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"40b0ce33b6b63ef42fa0":function(t,e,a){"use strict";a.r(e);var o,n=a("8af190b70a6bc55c6f1b"),c=a.n(n),r=(a("8a2d1b95e05b6a321e74"),a("d7dd51e1bf6bfc2c9c3d")),i=a("0d7f0986bcd2f33d8a2a"),d=a("ab039aecd4a1d4fedc0e"),s=a("ab4cb61bcb2dc161defb"),u=a("a28fc3c963a1d4d1a2e5"),l=a("d95b0cf107403b178365"),f=a("adc20f99e57c573c589c"),b=a("bd204c14a87413c57e8c"),m=a("e95a63b25fb92ed15721"),p=a("95baf4d8cb484eb005cb"),v=a("c81e5538d2f1446e7ca2"),h="app.containers.Tx",y=Object(d.defineMessages)({creatDate:{id:"".concat(h,".creatDate"),defaultMessage:"\u521b\u5efa\u65f6\u95f4"},actions:{id:"".concat(h,".actions"),defaultMessage:"\u52a8\u4f5c"},contract:{id:"".concat(h,".contract"),defaultMessage:"\u5408\u7ea6"},data:{id:"".concat(h,".data"),defaultMessage:"\u6570\u636e"},transaction:{id:"".concat(h,".transaction"),defaultMessage:"\u4ea4\u6613"},transactionColon:{id:"".concat(h,".transactionColon"),defaultMessage:"\u4ea4\u6613:"},notFoundTransaction:{id:"".concat(h,".notFoundTransaction"),defaultMessage:"\u627e\u4e0d\u5230\u4ea4\u6613"},block:{id:"".concat(h,".block"),defaultMessage:"\u533a\u5757"},authorizer:{id:"".concat(h,".authorizer"),defaultMessage:"\u6388\u6743"}}),g=a("049c95fcdedac638d341"),w=a("88b16445083d6bbbec33"),M=a("006776e187b24c5fd4d3");function C(t){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e,a,n){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=t&&t.defaultProps,r=arguments.length-3;if(e||0===r||(e={children:void 0}),1===r)e.children=n;else if(r>1){for(var i=new Array(r),d=0;d<r;d++)i[d]=arguments[d+3];e.children=i}if(e&&c)for(var s in c)void 0===e[s]&&(e[s]=c[s]);else e||(e=c||{});return{$$typeof:o,type:t,key:void 0===a?null:""+a,ref:null,props:e,_owner:null}}function k(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,o=E(t);if(e){var n=E(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"===typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,a)}}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}a.d(e,"Tx",function(){return S});var S=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(r,c.a.Component);var e,a,o,n=j(r);function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),n.apply(this,arguments)}return e=r,(a=[{key:"componentWillMount",value:function(){var t=this.props.dispatch,e=this.props.match.params.txHash;this.setState({txHash:e}),t(g.a.chainTransactionRequest({txHash:e}))}},{key:"render",value:function(){var t=this,e=this.props.currentChain.chainTransaction.payload;return O(p.a,{},void 0,c.a.createElement(d.FormattedMessage,y.transactionColon,function(e){return O(i.Helmet,{},void 0,O("title",{},void 0,v.b.name," ",e," ",t.state.txHash))}),c.a.createElement(d.FormattedMessage,y.transaction,function(t){return O(b.i.Header,{title:"".concat(v.b.name," ").concat(t),subTitle:""})}),e&&!e.id&&c.a.createElement(d.FormattedMessage,y.notFoundTransaction),e&&e.id&&O(c.a.Fragment,{},void 0,O(b.e,{},void 0,O(b.e.Header,{},void 0,O(b.e.Title,{},void 0,v.b.name," ",c.a.createElement(d.FormattedMessage,y.transactionColon)," ",e.id," ")),O(b.m,{cards:!0,striped:!0,responsive:!0,className:""},void 0,O(b.m.Body,{},void 0,O(b.m.Row,{},void 0,O(b.m.ColHeader,{},void 0,c.a.createElement(d.FormattedMessage,y.block)),O(b.m.Col,{},void 0,O("strong",{},void 0,O(m.Link,{to:"/".concat(v.b.bindPath,"/block/").concat(e.block_num)},void 0,e.block_num.toLocaleString()))),O(b.m.ColHeader,{},void 0,c.a.createElement(d.FormattedMessage,y.creatDate)),O(b.m.Col,{},void 0,O("strong",{},void 0,new Date("".concat(e.block_time,"Z")).toLocaleString())))))),O(b.e,{},void 0,O(b.e.Header,{},void 0,O(b.e.Title,{},void 0,c.a.createElement(d.FormattedMessage,y.actions))),O(b.m,{cards:!0,striped:!0,responsive:!0,className:"",style:{tableLayout:"fixed"}},void 0,O(b.m.Header,{},void 0,O(b.m.Row,{},void 0,O("th",{width:"12%"},void 0,c.a.createElement(d.FormattedMessage,y.authorizer)),O("th",{width:"12%"},void 0,c.a.createElement(d.FormattedMessage,y.contract)),O("th",{width:"10%"},void 0,c.a.createElement(d.FormattedMessage,y.actions)),O("th",{width:""},void 0,c.a.createElement(d.FormattedMessage,y.data)))),O(b.m.Body,{},void 0,e.traces.map(function(t,e){return O(b.m.Row,{},e,O(b.m.Col,{},void 0,t.act.authorization&&t.act.authorization.length?O(c.a.Fragment,{},void 0,O(m.Link,{to:"/".concat(v.b.bindPath,"/account/").concat(t.act.authorization[0].actor)},void 0,t.act.authorization[0].actor),"@",t.act.authorization[0].permission):"-"),O(b.m.Col,{},void 0,t.act.account),O(b.m.Col,{},void 0,t.act.name),O(b.m.Col,{},void 0,JSON.stringify(t.act.data)))}))))))}}])&&k(e.prototype,a),o&&k(e,o),r}(),T=Object(u.b)({currentChain:Object(w.a)()});var _=Object(r.connect)(T,function(t){return{dispatch:t}}),H=Object(l.a)({key:"currentChain",reducer:g.d}),R=Object(f.a)({key:"currentChain",saga:M.a});e.default=Object(s.compose)(H,R,_)(S)}}]);