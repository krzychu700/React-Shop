(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){e.exports=a(431)},166:function(e,t,a){},168:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},199:function(e,t,a){},422:function(e,t,a){},425:function(e,t,a){},427:function(e,t,a){},429:function(e,t,a){},431:function(e,t,a){"use strict";a.r(t);var i={};a.r(i),a.d(i,"GET_DATA",function(){return E}),a.d(i,"SORT",function(){return N}),a.d(i,"GET_PAGES_NUMBERS",function(){return P}),a.d(i,"GET_PRODUCTS_ON_PAGE",function(){return j}),a.d(i,"ACTIVE_PAGE",function(){return k}),a.d(i,"GET_PRODUCT",function(){return O}),a.d(i,"ADD_TO_CART",function(){return C}),a.d(i,"DEL_FROM_CART",function(){return q}),a.d(i,"UPDATE_PRODUCTS_IN_MAGAZINE",function(){return y}),a.d(i,"PRODUCT_IN_CART_COUNTER",function(){return R}),a.d(i,"getData",function(){return I}),a.d(i,"sort",function(){return D}),a.d(i,"pagesNumbers",function(){return A}),a.d(i,"getProductsOnPage",function(){return S}),a.d(i,"activePage",function(){return M}),a.d(i,"getProduct",function(){return z}),a.d(i,"addToCart",function(){return T}),a.d(i,"defFromCart",function(){return x}),a.d(i,"productInCartCount",function(){return _}),a.d(i,"updateProductsInMagazine",function(){return L});var n=a(0),r=a.n(n),s=a(155),c=a(433),u=a(435),o=a(424),l=a(434),m=a(3),d=a(4),p=a(6),g=a(5),b=a(7),v=a(12),h=a(170),f=a(436),E="GET_DATA",N="SORT",P="GET_PAGES_NUMBERS",j="GET_PRODUCTS_ON_PAGE",k="ACTIVE_PAGE",O="GET_PRODUCT",C="ADD_TO_CART",q="DEL_FROM_CART",y="UPDATE_PRODUCTS_IN_MAGAZINE",R="PRODUCT_IN_CART_COUNTER";function I(){return{type:E}}function D(e){return{type:N,sortParams:e}}function A(){return{type:P}}function S(){return{type:j}}function M(e){return{type:k,number:e}}function z(e){return{type:O,id:e}}function T(e){return{type:C,id:e}}function x(e){return{type:q,id:e}}function _(e,t){return{type:R,id:e,value:t}}function L(){return{type:y}}a(166);var w=function(e){return r.a.createElement("div",{className:"product",key:e.id},r.a.createElement("div",{className:"productPictureArea"},r.a.createElement("img",{className:"productPicture",src:"/React-Shop"+"".concat(e.picture),alt:e.id})),r.a.createElement("div",{className:"productTextArea"},r.a.createElement("div",{className:"productName"},e.name," "),r.a.createElement("div",{className:"productPrice"},"$".concat(parseFloat(e.price).toFixed(2))),r.a.createElement("div",{className:0===e.inMagazine?"soldArea ":"soldArea soldArea--hidden"},r.a.createElement("p",{className:"sold"},"Wyprzedane"))))},U=(a(168),function(e){return r.a.createElement("div",{className:"productsList"},e.item.map(function(e){return r.a.createElement(h.a,{className:"link",to:"/React-Shop/product/"+e.id,key:e.id},r.a.createElement(w,{name:e.name,price:e.price,picture:e.picture,sold:e.sold,inMagazine:e.inMagazine}))}))}),F=a(11),V=a(14),G=function(e){return r.a.createElement("div",{className:"pagesList"},Object(V.a)(Array(e.page)).map(function(t,a){return r.a.createElement(h.a,{className:"link",to:"/React-Shop/"+parseInt(a+1)+"/"+e.sortParams.by+"/"+e.sortParams.order,key:a+1,value:a+1},r.a.createElement("li",{value:a+1,"data-by":e.sortParams.by,"data-order":e.sortParams.order,className:e.active===a+1?"pagesItem pagesItem--active":"pagesItem"},a<9?"0".concat(a+1):a+1," "))}))},B=function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).call(this,e))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.actions.getProductsOnPage()}},{key:"componentDidUpdate",value:function(e){var t=parseInt(this.props.match.params.id,10);this.props.active===e.active&&this.props.sortParams.by===e.sortParams.by&&this.props.sortParams.order===e.sortParams.order&&this.props.page===e.page||this.props.actions.getProductsOnPage(),isNaN(t)||t===this.props.active||this.props.actions.activePage(t),t===this.props.active&&this.props.match.params.by===this.props.sortParams.by&&this.props.match.params.order===this.props.sortParams.order||this.props.actions.sort({by:this.props.match.params.by,order:this.props.match.params.order})}},{key:"click",value:function(e){this.props.actions.getProduct(e.target.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:"productListArea"},r.a.createElement(U,{item:this.props.itemList,click:this.click,data:this.props.data}),r.a.createElement("div",{className:"pages"},r.a.createElement("ul",{className:"pagesList"},r.a.createElement(G,{page:this.props.page,sortParams:this.props.sortParams,active:this.props.active}),r.a.createElement(h.a,{className:"link",to:this.props.active===this.props.page?"/React-Shop/"+parseInt(this.props.active)+"/"+this.props.sortParams.by+"/"+this.props.sortParams.order:"/React-Shop/"+parseInt(this.props.active+1)+"/"+this.props.sortParams.by+"/"+this.props.sortParams.order},r.a.createElement("i",{className:"fas fa-arrow-right pageArrowRight"})))))}}]),t}(n.Component),W=Object(f.a)(Object(v.connect)(function(e){return{itemList:e.shopReducer.itemList,page:e.shopReducer.page,active:e.shopReducer.active,sortParams:e.shopReducer.sortParams,data:e.shopReducer.data,lastItems:e.shopReducer.lastItems}},function(e){return{actions:Object(F.a)(i,e)}})(B)),K=(a(175),a(61)),Q=a.n(K),Z=(a(177),function(e){return r.a.createElement(Q.a,{interval:2e3,nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon carouselIconImg"}),prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon carouselIconImg"})},e.lastItems.map(function(e){return r.a.createElement(Q.a.Item,{key:e.id},r.a.createElement(h.a,{className:"link",to:"/React-Shop/product/"+e.id},r.a.createElement("img",{className:"d-block w-100 carouselImage",src:"/React-Shop"+"".concat(e.picture),alt:"First slide 1"}),r.a.createElement(Q.a.Caption,null,r.a.createElement("p",{className:"carouselProduct"},e.name),r.a.createElement("p",{className:"carouselProduct"},"$".concat(parseFloat(e.price).toFixed(2))))))}))}),$=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"click",value:function(e){console.log(e.target.id),this.props.actions.getProduct(e.target.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:"sideBar"},r.a.createElement("span",null," Sortuj:"),r.a.createElement("ul",{className:"sideBarList"},r.a.createElement(h.a,{className:"link",to:"/React-Shop/"+this.props.active+"/name/asc"},r.a.createElement("li",{className:"sideBarItem",onClick:this.props.actions.sort.bind(this,{by:"name",order:"asc"})},"Nazwa A-Z")),r.a.createElement(h.a,{className:"link",to:"/React-Shop/"+this.props.active+"/name/desc"},r.a.createElement("li",{className:"sideBarItem",onClick:this.props.actions.sort.bind(this,{by:"name",order:"desc"})},"Nazwa Z-A")),r.a.createElement(h.a,{className:"link",to:"/React-Shop/"+this.props.active+"/price/asc"},r.a.createElement("li",{className:"sideBarItem",onClick:this.props.actions.sort.bind(this,{by:"price",order:"asc"})},"Cena rosn\u0105co")),r.a.createElement(h.a,{className:"link",to:"/React-Shop/"+this.props.active+"/price/desc"},r.a.createElement("li",{className:"sideBarItem",onClick:this.props.actions.sort.bind(this,{by:"price",order:"desc"})},"Cena malej\u0105co"))),r.a.createElement("div",null,r.a.createElement("h3",{className:"sliderTitle"},0===this.props.lastItems.length?null:"Ostatnie sztuki!:"),0===this.props.lastItems.length?null:r.a.createElement(Z,{click:this.click,lastItems:this.props.lastItems})))}}]),t}(n.Component),H=Object(f.a)(Object(v.connect)(function(e){return{itemList:e.shopReducer.itemList,active:e.shopReducer.active,sortParams:e.shopReducer.sortParams,lastItems:e.shopReducer.lastItems}},function(e){return{actions:Object(F.a)(i,e)}})($)),J=(a(199),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageContainer"},r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(W,null)))}}]),t}(n.Component)),Y=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageContainer"},r.a.createElement("div",{className:"subpageArea"},r.a.createElement("h1",{className:"subpageTitle"}," FAQ"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque mi vel sapien gravida varius. Vivamus pulvinar volutpat leo, quis mollis orci venenatis quis. Nam blandit convallis ornare. Ut accumsan finibus lacus, ac elementum mauris pellentesque ut. Nam sagittis rhoncus vulputate. Mauris molestie dolor a lectus mattis facilisis. Cras in quam quis sem pellentesque sagittis feugiat at diam. Morbi mollis elementum nisi ac sagittis. Quisque maximus urna lorem, id dapibus mauris luctus vel. Nullam blandit sagittis cursus. Aenean auctor fermentum dignissim. Nulla quis metus sit amet odio blandit ornare ac eget purus. Integer pharetra, nunc non pharetra fermentum, lorem nibh elementum enim, a sodales libero libero sit amet risus. Mauris ac elementum risus. Integer et dolor ut arcu luctus fringilla quis id nibh. Proin lectus lorem, blandit in nulla eget, laoreet venenatis metus. Aenean urna mi, cursus nec dignissim accumsan, porttitor sit amet purus. Nullam id felis urna. Phasellus scelerisque dictum elit vel vestibulum. Ut faucibus ligula laoreet, fermentum neque vel, vestibulum erat. Suspendisse nunc dui, venenatis sed nisl porta, dictum fringilla arcu. Maecenas id nunc tellus. Vivamus ut fringilla ligula. Donec augue lorem, suscipit ut faucibus porttitor, accumsan quis libero. Proin aliquam et tortor eu convallis. Etiam tincidunt lacus nec sem accumsan, ut consectetur sem dignissim. Duis scelerisque eu tellus sit amet semper. Vivamus placerat facilisis nibh, sit amet dapibus massa tristique vel. Donec vel turpis orci. Sed vitae metus sed nibh dignissim elementum a vitae diam. Praesent id dui venenatis, venenatis risus et, bibendum libero. Duis fringilla libero vitae efficitur suscipit. Sed congue hendrerit neque, ac tempor urna elementum aliquam. Nam ut nunc vehicula, egestas libero nec, sodales dolor. Nulla varius felis eget justo auctor, nec dignissim lacus imperdiet. Suspendisse commodo neque sed placerat tincidunt. Cras non est eu leo rutrum auctor nec sed felis. Morbi vestibulum, eros eu pulvinar molestie, risus justo placerat diam, dictum interdum elit felis faucibus nunc. Praesent id scelerisque sem. Pellentesque eget imperdiet dui. Donec eu lectus vel nibh malesuada suscipit aliquet sed lorem. Cras quis diam in ex vestibulum porta in in mi. Morbi in nibh in purus faucibus eleifend. Morbi condimentum lacus eget ultricies interdum. Duis nec dui magna. Donec sit amet ante ligula. Aliquam cursus auctor libero, eget mollis quam. Donec a ultrices urna. Nam semper nulla sed ligula placerat, ac molestie arcu faucibus. Donec at enim lacus. In et eleifend ipsum. Sed ornare orci nunc, quis fringilla arcu ullamcorper sit amet. Vivamus vitae enim hendrerit, accumsan est nec, euismod elit. Suspendisse potenti. Nam in nibh id dui feugiat gravida. Suspendisse sed nisl ullamcorper, fringilla metus vel, interdum orci. Proin eu tortor commodo, suscipit velit ac, viverra urna. Sed cursus ultrices leo id aliquet. Curabitur commodo nunc vulputate urna condimentum, at luctus lacus imperdiet. Aenean aliquam risus vitae velit cursus pulvinar non sagittis dolor. Donec pulvinar vitae mi eu sollicitudin. In hac habitasse platea dictumst. In euismod maximus nisi at pharetra. Ut euismod interdum eros sed lobortis. Nunc commodo dolor eget mi sagittis suscipit. Etiam cursus molestie ultricies. Morbi vel ipsum sed risus suscipit ullamcorper. Sed sollicitudin orci sit amet ante pharetra aliquam. Donec urna augue, interdum cursus sapien a, dictum egestas diam. Nullam viverra quis risus vel semper. Nam luctus finibus elit, id vulputate nisi egestas eget. Nam luctus libero quis odio pulvinar, non consequat metus venenatis. Donec tortor eros, mattis eu semper et, aliquet eget ligula. Nulla ac massa laoreet, condimentum mauris in, dictum augue. Sed eget lorem sed augue venenatis laoreet. Morbi maximus interdum efficitur. Integer ex libero, blandit faucibus dui eu, congue consequat nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tristique, enim ac dignissim malesuada, est velit euismod mi, tristique rutrum velit tortor in neque. Aenean fringilla, nulla eu feugiat venenatis, dolor neque gravida ligula, at hendrerit ante velit volutpat ipsum. Praesent eu ante dignissim, ultricies magna sed, laoreet orci. Maecenas tristique commodo sodales. Nam feugiat condimentum dolor sed interdum. Vivamus interdum mi orci. In eget justo pulvinar massa porttitor dapibus. Duis eu turpis lorem. Cras lacinia orci fermentum, condimentum tellus eu, malesuada orci. Proin massa sem, mattis quis mattis et, ullamcorper id erat. Phasellus facilisis nibh eu cursus accumsan.")))}}]),t}(r.a.Component),X=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageContainer"},r.a.createElement("div",{className:"subpageArea"},r.a.createElement("h1",{className:"subpageTitle"}," Regulamin"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque mi vel sapien gravida varius. Vivamus pulvinar volutpat leo, quis mollis orci venenatis quis. Nam blandit convallis ornare. Ut accumsan finibus lacus, ac elementum mauris pellentesque ut. Nam sagittis rhoncus vulputate. Mauris molestie dolor a lectus mattis facilisis. Cras in quam quis sem pellentesque sagittis feugiat at diam. Morbi mollis elementum nisi ac sagittis. Quisque maximus urna lorem, id dapibus mauris luctus vel. Nullam blandit sagittis cursus. Aenean auctor fermentum dignissim. Nulla quis metus sit amet odio blandit ornare ac eget purus. Integer pharetra, nunc non pharetra fermentum, lorem nibh elementum enim, a sodales libero libero sit amet risus. Mauris ac elementum risus. Integer et dolor ut arcu luctus fringilla quis id nibh. Proin lectus lorem, blandit in nulla eget, laoreet venenatis metus. Aenean urna mi, cursus nec dignissim accumsan, porttitor sit amet purus. Nullam id felis urna. Phasellus scelerisque dictum elit vel vestibulum. Ut faucibus ligula laoreet, fermentum neque vel, vestibulum erat. Suspendisse nunc dui, venenatis sed nisl porta, dictum fringilla arcu. Maecenas id nunc tellus. Vivamus ut fringilla ligula. Donec augue lorem, suscipit ut faucibus porttitor, accumsan quis libero. Proin aliquam et tortor eu convallis. Etiam tincidunt lacus nec sem accumsan, ut consectetur sem dignissim. Duis scelerisque eu tellus sit amet semper. Vivamus placerat facilisis nibh, sit amet dapibus massa tristique vel. Donec vel turpis orci. Sed vitae metus sed nibh dignissim elementum a vitae diam. Praesent id dui venenatis, venenatis risus et, bibendum libero. Duis fringilla libero vitae efficitur suscipit. Sed congue hendrerit neque, ac tempor urna elementum aliquam. Nam ut nunc vehicula, egestas libero nec, sodales dolor. Nulla varius felis eget justo auctor, nec dignissim lacus imperdiet. Suspendisse commodo neque sed placerat tincidunt.")))}}]),t}(r.a.Component),ee=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageContainer"},r.a.createElement("div",{className:"subpageArea"},r.a.createElement("h1",{className:"subpageTitle"}," Kontakt:"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque mi vel sapien gravida varius. Vivamus pulvinar volutpat leo, quis mollis orci venenatis quis. Nam blandit convallis ornare. Ut accumsan finibus lacus, ac elementum mauris pellentesque ut. Nam sagittis rhoncus vulputate. Mauris molestie dolor a lectus mattis facilisis. Cras in quam quis sem pellentesque sagittis feugiat at diam. Morbi mollis elementum nisi ac sagittis. Quisque maximus urna lorem, id dapibus mauris luctus vel. Nullam blandit sagittis cursus. Aenean auctor fermentum dignissim. Nulla quis metus sit amet odio blandit ornare ac eget purus. Integer pharetra, nunc non pharetra fermentum, lorem nibh elementum enim, a sodales libero libero sit amet risus. Mauris ac elementum risus. Integer et dolor ut arcu luctus fringilla quis id nibh. Proin lectus lorem, blandit in nulla eget, laoreet venenatis metus. Aenean urna mi, cursus nec dignissim accumsan, porttitor sit amet purus. Nullam id felis urna. Phasellus scelerisque dictum elit vel vestibulum. Ut faucibus ligula laoreet, fermentum neque vel, vestibulum erat. Suspendisse nunc dui, venenatis sed nisl porta, dictum fringilla arcu. Maecenas id nunc tellus. Vivamus ut fringilla ligula. Donec augue lorem, suscipit ut faucibus porttitor, accumsan quis libero. Proin aliquam et tortor eu convallis. Etiam tincidunt lacus nec sem accumsan, ut consectetur sem dignissim. Duis scelerisque eu tellus sit amet semper. Vivamus placerat facilisis nibh, sit amet dapibus massa tristique vel. Donec vel turpis orci. Sed vitae metus sed nibh dignissim elementum a vitae diam. Praesent id dui venenatis, venenatis risus et, bibendum libero.")))}}]),t}(r.a.Component),te=a(27),ae=a(99),ie={data:ae,itemList:[],page:0,active:1,sortParams:{by:"name",order:"desc"},selectedProduct:{},cart:[],inCart:0,lastItems:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a=6;window.screen.availWidth>768?a=6:window.screen.availWidth<426&&(a=3);var i=ae.filter(function(e){return e.inMagazine<=10}),n=e.data.length,r=e.page;if(n>a&&r<=n/a){var s=0;for(s=0;s<n;s+=a)r++}else r=1;return Object.assign({},e,{lastItems:i,page:r});case N:return function(e,t){var a=t.sortParams.by,i=t.sortParams.order;if(a===e.sortParams.by&&i===e.sortParams.order)return e;var n=e.data.sort(function(e,t){return"price"===a&&"desc"===i?t.price-e.price:"price"===a&&"asc"===i?e.price-t.price:"name"===a&&"asc"===i?e.name.localeCompare(t.name):"name"===a&&"desc"===i?t.name.localeCompare(e.name):null});return Object.assign({},e,{itemList:Object(V.a)(n),sortParams:{by:a,order:i}})}(e,t);case j:return function(e){var t=6;window.screen.availWidth>768?t=6:window.screen.availWidth<426&&(t=3);var a=e.data.slice((e.active-1)*t,e.active*t),i=e.data.filter(function(e){return e.inMagazine<=10&&e.inMagazine>0});return Object.assign({},e,{itemList:Object(V.a)(a),lastItems:i})}(e);case k:var c=t.number;return c=void 0===t.number?e.active:t.number,Object.assign({},e,{active:parseInt(c)});case O:var u=e.data.find(function(e){return e.id===t.id});return u.count=0,Object.assign({},e,{selectedProduct:u});case C:var o=e.data.find(function(e){return e.id===t.id}),l=e.cart.find(function(e){return e.id===o.id});if(0!==o.inMagazine){if(l){if(l.count<l.inMagazine){var m=e.cart.findIndex(function(e){return e.id===t.id}),d=e.inCart+1,p=Object(te.a)({},e.cart[m],{count:e.cart[m].count+1});return Object.assign({},e,{cart:[].concat(Object(V.a)(e.cart.slice(0,m)),[p],Object(V.a)(e.cart.slice(m+1))),selectedProduct:Object(te.a)({},e.selectedProduct,{count:e.selectedProduct.count+1}),inCart:d})}return Object.assign({},e,{selectedProduct:Object(te.a)({},e.selectedProduct,{count:l.inMagazine})})}e.selectedProduct.count=1;var g=e.inCart+1;return Object.assign({},e,Object(te.a)({cart:[].concat(Object(V.a)(e.cart),[o]),inCart:g},u))}return e;case q:var b=e.cart.filter(function(e){return e.id!==t.id});return Object.assign({},e,{cart:Object(V.a)(b)});case R:return function(e,t){var a=e.cart.findIndex(function(e){return e.id===t.id}),i=Object(te.a)({},e.cart[a],{count:e.cart[a].count+=t.value}),n=e.inCart+=t.value;return Object.assign({},e,{cart:[].concat(Object(V.a)(e.cart.slice(0,a)),[i],Object(V.a)(e.cart.slice(a+1))),inCart:n})}(e,t);case y:return function(e){for(var t in e.data)if(e.data.hasOwnProperty(t))for(var a in e.cart)e.cart.hasOwnProperty(a)&&e.data[t].id===e.cart[a].id&&(e.data[t].sold=e.cart[a].count,e.data[t].inMagazine=e.data[t].inMagazine-e.cart[a].count);return Object.assign({},e,Object(te.a)({},e,{cart:[],inCart:0}))}(e)}return e},re=Object(F.b)({shopReducer:ne}),se=a(56),ce=a(172),ue=a.n(ce),oe=a(173),le=a.n(oe),me=Object(se.createDevTools)(r.a.createElement(le.a,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q"},r.a.createElement(ue.a,null))),de=Object(F.c)(re,me.instrument()),pe=(a(422),a(432)),ge=function(e){return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"logoArea"},r.a.createElement("img",{className:"logoPicture",src:"/React-Shop/img/logo.png",alt:"logo1"})),r.a.createElement("div",{className:"menuArea"},r.a.createElement("ul",{className:"menuList"},r.a.createElement("li",{className:"menuItem"},r.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/React-Shop/1/name/desc"},"Home")),r.a.createElement("li",{className:"menuItem"},r.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/React-Shop/faq"},"FAQ")),r.a.createElement("li",{className:"menuItem"},r.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/React-Shop/eula"},"Regulamin")),r.a.createElement("li",{className:"menuItem"},r.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/React-Shop/contact"},"Kontakt")),r.a.createElement("li",{className:"menuItem cartIconArea"},r.a.createElement(pe.a,{activeStyle:{color:"black"},className:"link",to:"/React-Shop/cart"},r.a.createElement("i",{className:"fas fa-shopping-bag cartIcon"}),r.a.createElement("div",{className:e.cart.length>0?"productsInCart":"hide"},e.inCart))))),r.a.createElement("div",null,e.children))},be=(a(425),function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"allRightsArea"},r.a.createElement("p",null,"All rights reserved")),r.a.createElement("div",{className:"footerArea"},r.a.createElement("ul",{className:"footerList"},r.a.createElement("li",{className:"footerItem"},r.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/React-Shop/"+e.active+"/"+e.sortParams.by+"/"+e.sortParams.order},"Home")),r.a.createElement("li",{className:"footerItem"},r.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/React-Shop/faq"},"FAQ")),r.a.createElement("li",{className:"footerItem"},r.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/React-Shop/eula"},"Regulamin")),r.a.createElement("li",{className:"footerItem"},r.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/React-Shop/contact"},"Kontakt")))))}),ve=function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).call(this,e))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ge,{active:this.props.active,sortParams:this.props.sortParams,cart:this.props.cart,inCart:this.props.inCart}),this.props.children,r.a.createElement(be,{active:this.props.active,sortParams:this.props.sortParams}))}}]),t}(n.Component),he=Object(f.a)(Object(v.connect)(function(e){return{active:e.shopReducer.active,sortParams:e.shopReducer.sortParams,cart:e.shopReducer.cart,inCart:e.shopReducer.inCart}})(ve)),fe=(a(427),function(e){return r.a.createElement("div",{className:"productDetailComponent"},r.a.createElement("div",{className:"productDetailContainer"},r.a.createElement("div",{className:"productDetailImageArea"},r.a.createElement("img",{className:"productDetailImage",src:"/React-Shop"+"".concat(e.product.picture),alt:"product".concat(e.product.id)})),r.a.createElement("div",{className:"productDetailDescriptions"},r.a.createElement("p",{className:"productDetailTitle"},e.product.name),r.a.createElement("p",{className:"productDetailPrice"},"$".concat(parseFloat(e.product.price).toFixed(2))),r.a.createElement("p",{className:"productDetailText"},e.product.description),r.a.createElement("button",{className:e.product.inMagazine-e.product.count===0||0===e.product.inMagazine?"buttonCart buttonCart--empty":"buttonCart ",onClick:function(){return e.handleClickAddToCart(e.product.id)}},e.product.inMagazine-e.product.count===0?"Wybacz, brak wi\u0119cej produkt\xf3w w magazynie":"Dodaj do koszyka"))))}),Ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).handleClickAddToCart=function(e){a.props.actions.addToCart(e)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.actions.getProduct(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement(fe,{product:this.props.selectedProduct,handleClickAddToCart:this.handleClickAddToCart,cart:this.props.cart})}}]),t}(n.Component),Ne=Object(f.a)(Object(v.connect)(function(e){return{selectedProduct:e.shopReducer.selectedProduct,cart:e.shopReducer.cart}},function(e){return{actions:Object(F.a)(i,e)}})(Ee)),Pe=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageContainer"},r.a.createElement("a",{href:"https://www.freepik.com/free-photos-vectors/computer"},r.a.createElement("img",{src:"https://image.freepik.com/free-vector/page-found-error-404_23-2147508324.jpg",alt:"not found"})),r.a.createElement("div",{className:"notFoundTextArea"},r.a.createElement(h.a,{className:"link",to:"/React-Shop/1/name/desc"},r.a.createElement("p",null,"Wr\xf3\u0107 na stron\u0119 g\u0142\xf3wn\u0105"))))}}]),t}(r.a.Component),je=(a(429),function(e){return r.a.createElement("div",{className:"pageContainer"},r.a.createElement("div",{className:"subpageArea"},r.a.createElement("h1",null,"KOSZYK"),e.cart.map(function(t){return r.a.createElement("div",{className:"cartComponent",key:t.id},r.a.createElement("div",{className:"cartContainer"},r.a.createElement("div",{className:"cartImageArea"},r.a.createElement(h.a,{className:"link",to:"process.env.PUBLIC_URL+/product/"+t.id},r.a.createElement("img",{className:"cartProductImage",src:"/React-Shop"+"".concat(t.picture),alt:"product".concat(t.id)}))),r.a.createElement("div",{className:"cartProductDescriptions"},r.a.createElement("div",{className:"cartProductDescriptionsContainer"},r.a.createElement(h.a,{className:"link",to:"process.env.PUBLIC_URL+/product/"+t.id},r.a.createElement("p",{className:"cartProductTitle"},t.name)),r.a.createElement("p",{className:"cartProductText"},t.description)),r.a.createElement("div",{className:"cartProductBuyingArea"},r.a.createElement("div",{className:"cartProductBuyingContainer"},r.a.createElement("p",{className:"cartProduct cartProduct--grey"},"$".concat(parseFloat(t.price).toFixed(2))),r.a.createElement("span",{className:t.count>1?"cartProduct cartProductClick":"cartProduct cartProductDisabled",onClick:function(){return 1===t.count?null:e.clickCartCounter(t.id,-1)}},"-"),r.a.createElement("p",{className:"cartProduct"},t.count),r.a.createElement("span",{className:t.count===t.inMagazine?"cartProduct cartProductDisabled":"cartProduct cartProductClick",onClick:function(){return t.count===t.inMagazine?null:e.clickCartCounter(t.id,1)}},"+"),r.a.createElement("p",{className:"cartProduct"},"szt"),r.a.createElement("span",{className:"cartDelProductButton",onClick:function(){return e.clickDelProduct(t.id)}},"usu\u0144 produkt"))))))}),r.a.createElement("div",{className:0!==e.cart.length?"hide":"emptyCart"},r.a.createElement("h3",null," Tw\xf3j koszyk jest pusty :(")),r.a.createElement("div",{className:0===e.cart.length?"hide":"cartFinishArea"},r.a.createElement("p",{className:"cartProduct cartProduct--grey"},"kod rabatowy"),r.a.createElement("input",{placeholder:"Tw\xf3j kod rabatowy"}),r.a.createElement("p",{className:"cartProduct"},"TOTAL:"," $".concat(parseFloat(e.cart.reduce(function(e,t){return e+t.price*t.count},0)).toFixed(2)," ")),r.a.createElement("button",{className:"buttonBuy",onClick:function(){return e.clickUpdateMagazine()}},"Zap\u0142a\u0107"))))}),ke=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).handleClickDelProduct=function(e){return a.props.actions.defFromCart(e)},a.handleClickCartCounter=function(e,t){return a.props.actions.productInCartCount(e,t)},a.handleClickUpdateMagazine=function(){return a.props.actions.updateProductsInMagazine()},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(je,{product:this.props.selectedProduct,cart:this.props.cart,inCart:this.props.inCart,clickDelProduct:this.handleClickDelProduct,clickCartCounter:this.handleClickCartCounter,clickUpdateMagazine:this.handleClickUpdateMagazine})}}]),t}(n.Component),Oe=Object(f.a)(Object(v.connect)(function(e){return{selectedProduct:e.shopReducer.selectedProduct,cart:e.shopReducer.cart,inCart:e.shopReducer.inCart}},function(e){return{actions:Object(F.a)(i,e)}})(ke));Object(s.render)(r.a.createElement(v.Provider,{store:de},r.a.createElement(c.a,{basename:"/#"},r.a.createElement(he,null,r.a.createElement(u.a,null,r.a.createElement(o.a,{path:"/React-Shop/",exact:!0,component:J}),r.a.createElement(o.a,{path:"/React-Shop/:id/:by/:order",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(o.a,{path:"/React-Shop/cart",component:Oe}),r.a.createElement(o.a,{path:"/React-Shop/product/:id",component:Ne}),r.a.createElement(o.a,{path:"/React-Shop/faq",component:Y}),r.a.createElement(o.a,{path:"/React-Shop/eula",component:X}),r.a.createElement(o.a,{path:"/React-Shop/contact",component:ee}),r.a.createElement(o.a,{path:"/React-Shop/error",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(l.a,{from:"*",to:"/React-Shop/error"}))))),document.getElementById("root")),de.dispatch(I())},99:function(e){e.exports=[{id:"5c46211473b20bdc7158a391",name:"okulary",price:10.99,picture:"/img/1.jpg",description:"Eiusmod tempor officia incididunt eu. Laboris mollit ex commodo velit eu nulla voluptate officia. Do nulla laborum eu cillum aliquip irure qui sint enim ut do.",inMagazine:11,sold:0,count:0},{id:"5c462114d7b4cffdbb3bcb81",name:"zapalniczka",price:5.99,picture:"/img/2.jpg",description:"Ad magna adipisicing ullamco duis id sit. Veniam labore proident nostrud minim mollit. Anim id amet nostrud id qui. Consequat excepteur dolor voluptate nostrud velit velit quis.",inMagazine:12,sold:0,count:0},{id:"5c462114c79a3b1cd7063afb",name:"perfum",price:203.99,picture:"/img/3.jpg",description:"Veniam deserunt laborum dolor do exercitation ut deserunt. Laborum eiusmod ut aute nisi veniam. Excepteur et excepteur ullamco commodo ut quis. Duis do reprehenderit id eu qui tempor",inMagazine:8,sold:0,count:0},{id:"5c4621142aab069708c053fd",name:"zawieszka",price:3.99,picture:"/img/4.jpg",description:"Officia consectetur culpa cillum magna pariatur amet ut. Tempor minim nostrud laborum ipsum esse. Ut quis voluptate adipisicing ullamco occaecat cillum deserunt labore Lorem consequat.",inMagazine:22,sold:0,count:0},{id:"5c4621142aab02dt38c053fa",name:"aparat",price:999.99,picture:"/img/5.jpg",description:"Minim aute laboris mollit aliquip sit do eiusmod. Id culpa sint aute qui ex nostrud incididunt proident. Excepteur reprehenderit cillum labore dolor sunt in esse.",inMagazine:5,sold:0,count:0},{id:"z57nm21142aab02dt38c098hsa",name:"zegarek",price:199.99,picture:"/img/6.jpeg",description:"Labore voluptate velit adipisicing magna amet consequat elit aliquip mollit. Dolor aliquip labore nisi adipisicing nisi amet sint. Non ea nostrud amet exercitation anim esse dolor.",inMagazine:8,sold:0,count:0},{id:"p9jkj7ffsdfbmj863234fdf42",name:"zegarek",price:129.99,picture:"/img/7.jpeg",description:"Eiusmod laborum deserunt aute quis ex. Minim esse occaecat id veniam do. Et id voluptate ex officia excepteur et. Anim anim officia reprehenderit eu incididunt veniam deserunt nisi.",inMagazine:7,sold:0,count:0},{id:"bgt5670kjgsss354gjydv6579ks",name:"pomadka",price:19.99,picture:"/img/8.jpeg",description:"Duis esse amet irure id esse aliquip amet aute culpa irure anim laborum. Ipsum est ad et excepteur. Aute eiusmod consectetur ipsum et dolore tempor.",inMagazine:13,sold:0,count:0},{id:"bgt5670kjgm8ih5543dfby92ks",name:"aparat",price:199.99,picture:"/img/9.jpeg",description:"Labore voluptate velit adipisicing magna amet consequat elit aliquip mollit. Dolor aliquip labore nisi adipisicing nisi amet sint. Non ea nostrud amet exercitation anim esse dolor.",inMagazine:12,sold:0,count:0},{id:"zxdd4568ihgd457iknfdf679fdf3",name:"telefon",price:499.99,picture:"/img/10.jpeg",description:"Veniam deserunt laborum dolor do exercitation ut deserunt. Laborum eiusmod ut aute nisi veniam. Excepteur et excepteur ullamco commodo ut quis. Duis do reprehenderit id eu qui tempor",inMagazine:9,sold:0,count:0},{id:"zxdd4454gbftg565hgbvz3246bzx2",name:"telefon",price:699.99,picture:"/img/11.jpeg",description:"Labore voluptate velit adipisicing magna amet consequat elit aliquip mollit. Dolor aliquip labore nisi adipisicing nisi amet sint. Non ea nostrud amet exercitation anim esse dolor.",inMagazine:13,sold:0,count:0},{id:"009oksai983hdsxknhj7t2873nba",name:"pier\u015bcionek",price:189.99,picture:"/img/12.jpeg",description:"Labore voluptate velit adipisicing magna amet consequat elit aliquip mollit. Dolor aliquip labore nisi adipisicing nisi amet sint. Non ea nostrud amet exercitation anim esse dolor.",inMagazine:5,sold:0,count:0},{id:"f45656hu789kjjjjre5j7t2873nba",name:"pier\u015bcionek",price:149.99,picture:"/img/13.jpeg",description:"Labore voluptate velit adipisicing magna amet consequat elit aliquip mollit. Dolor aliquip labore nisi adipisicing nisi amet sint. Non ea nostrud amet exercitation anim esse dolor.",inMagazine:7,sold:0,count:0},{id:"f456345tghyu89olkj763fnm76th",name:"czapka",price:49.99,picture:"/img/14.jpeg",description:"Labore voluptate velit adipisicing magna amet consequat elit aliquip mollit. Dolor aliquip labore nisi adipisicing nisi amet sint. Non ea nostrud amet exercitation anim esse dolor.",inMagazine:17,sold:0,count:0}]}},[[157,2,1]]]);
//# sourceMappingURL=main.e192f7e0.chunk.js.map