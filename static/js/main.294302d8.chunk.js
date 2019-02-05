(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){e.exports=a(431)},166:function(e,t,a){},168:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},199:function(e,t,a){},422:function(e,t,a){},425:function(e,t,a){},427:function(e,t,a){},429:function(e,t,a){},431:function(e,t,a){"use strict";a.r(t);var i={};a.r(i),a.d(i,"GET_DATA",function(){return E}),a.d(i,"SORT",function(){return N}),a.d(i,"GET_PAGES_NUMBERS",function(){return P}),a.d(i,"GET_PRODUCTS_ON_PAGE",function(){return O}),a.d(i,"ACTIVE_PAGE",function(){return j}),a.d(i,"GET_PRODUCT",function(){return k}),a.d(i,"ADD_TO_CART",function(){return C}),a.d(i,"DEL_FROM_CART",function(){return y}),a.d(i,"UPDATE_PRODUCTS_IN_MAGAZINE",function(){return q}),a.d(i,"PRODUCT_IN_CART_COUNTER",function(){return I}),a.d(i,"getData",function(){return A}),a.d(i,"sort",function(){return D}),a.d(i,"pagesNumbers",function(){return M}),a.d(i,"getProductsOnPage",function(){return T}),a.d(i,"activePage",function(){return R}),a.d(i,"getProduct",function(){return z}),a.d(i,"addToCart",function(){return S}),a.d(i,"defFromCart",function(){return _}),a.d(i,"productInCartCount",function(){return x}),a.d(i,"updateProductsInMagazine",function(){return U});var r=a(0),n=a.n(r),s=a(155),c=a(433),u=a(435),o=a(424),l=a(434),m=a(3),d=a(4),p=a(6),b=a(5),g=a(7),v=a(12),h=a(170),f=a(436),E="GET_DATA",N="SORT",P="GET_PAGES_NUMBERS",O="GET_PRODUCTS_ON_PAGE",j="ACTIVE_PAGE",k="GET_PRODUCT",C="ADD_TO_CART",y="DEL_FROM_CART",q="UPDATE_PRODUCTS_IN_MAGAZINE",I="PRODUCT_IN_CART_COUNTER";function A(){return{type:E}}function D(e){return{type:N,sortParams:e}}function M(){return{type:P}}function T(){return{type:O}}function R(e){return{type:j,number:e}}function z(e){return{type:k,id:e}}function S(e){return{type:C,id:e}}function _(e){return{type:y,id:e}}function x(e,t){return{type:I,id:e,value:t}}function U(){return{type:q}}a(166);var w=function(e){return n.a.createElement("div",{className:"product",key:e.id},n.a.createElement("div",{className:"productPictureArea"},n.a.createElement("img",{className:"productPicture",src:"/React-Shop"+"".concat(e.picture),alt:e.id})),n.a.createElement("div",{className:"productTextArea"},n.a.createElement("div",{className:"productName"},e.name," "),n.a.createElement("div",{className:"productPrice"},"$".concat(parseFloat(e.price).toFixed(2))),n.a.createElement("div",{className:0===e.inMagazine?"soldArea ":"soldArea soldArea--hidden"},n.a.createElement("p",{className:"sold"},"Wyprzedane"))))},L=(a(168),function(e){return n.a.createElement("div",{className:"productsList"},e.item.map(function(e){return n.a.createElement(h.a,{className:"link",to:"/product/"+e.id,key:e.id},n.a.createElement(w,{name:e.name,price:e.price,picture:e.picture,sold:e.sold,inMagazine:e.inMagazine}))}))}),F=a(11),V=a(14),G=function(e){return n.a.createElement("div",{className:"pagesList"},Object(V.a)(Array(e.page)).map(function(t,a){return n.a.createElement(h.a,{className:"link",to:"/"+parseInt(a+1)+"/"+e.sortParams.by+"/"+e.sortParams.order,key:a+1,value:a+1},n.a.createElement("li",{value:a+1,"data-by":e.sortParams.by,"data-order":e.sortParams.order,className:e.active===a+1?"pagesItem pagesItem--active":"pagesItem"},a<9?"0".concat(a+1):a+1," "))}))},B=function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).call(this,e))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.actions.getProductsOnPage()}},{key:"componentDidUpdate",value:function(e){var t=parseInt(this.props.match.params.id,10);this.props.active===e.active&&this.props.sortParams.by===e.sortParams.by&&this.props.sortParams.order===e.sortParams.order&&this.props.page===e.page||this.props.actions.getProductsOnPage(),isNaN(t)||t===this.props.active||this.props.actions.activePage(t),t===this.props.active&&this.props.match.params.by===this.props.sortParams.by&&this.props.match.params.order===this.props.sortParams.order||this.props.actions.sort({by:this.props.match.params.by,order:this.props.match.params.order}),""===this.props.match.url&&this.props.history.push("/1/name/desc"),"/"===this.props.history.location.pathname?this.props.history.push("/1/name/desc"):"name"!==this.props.match.params.by&&"price"!==this.props.match.params.by?this.props.history.push("/error"):"desc"!==this.props.match.params.order&&"asc"!==this.props.match.params.order&&this.props.history.push("/error"),t>this.props.page&&0!==this.props.page&&this.props.history.push("/error")}},{key:"click",value:function(e){this.props.actions.getProduct(e.target.id)}},{key:"render",value:function(){return n.a.createElement("div",{className:"productListArea"},n.a.createElement(L,{item:this.props.itemList,click:this.click,data:this.props.data}),n.a.createElement("div",{className:"pages"},n.a.createElement("ul",{className:"pagesList"},n.a.createElement(G,{page:this.props.page,sortParams:this.props.sortParams,active:this.props.active}),n.a.createElement(h.a,{className:"link",to:this.props.active===this.props.page?"/"+parseInt(this.props.active)+"/"+this.props.sortParams.by+"/"+this.props.sortParams.order:"/"+parseInt(this.props.active+1)+"/"+this.props.sortParams.by+"/"+this.props.sortParams.order},n.a.createElement("i",{className:"fas fa-arrow-right pageArrowRight"})))))}}]),t}(r.Component),W=Object(f.a)(Object(v.connect)(function(e){return{itemList:e.shopReducer.itemList,page:e.shopReducer.page,active:e.shopReducer.active,sortParams:e.shopReducer.sortParams,data:e.shopReducer.data,lastItems:e.shopReducer.lastItems}},function(e){return{actions:Object(F.a)(i,e)}})(B)),K=(a(175),a(61)),Q=a.n(K),Z=(a(177),function(e){return n.a.createElement(Q.a,{interval:2e3,nextIcon:n.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon carouselIconImg"}),prevIcon:n.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon carouselIconImg"})},e.lastItems.map(function(e){return n.a.createElement(Q.a.Item,{key:e.id},n.a.createElement(h.a,{className:"link",to:"/product/"+e.id},n.a.createElement("img",{className:"d-block w-100 carouselImage",src:"/React-Shop"+"".concat(e.picture),alt:"First slide 1"}),n.a.createElement(Q.a.Caption,null,n.a.createElement("p",{className:"carouselProduct"},e.name),n.a.createElement("p",{className:"carouselProduct"},"$".concat(parseFloat(e.price).toFixed(2))))))}))}),$=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"click",value:function(e){console.log(e.target.id),this.props.actions.getProduct(e.target.id)}},{key:"render",value:function(){return n.a.createElement("div",{className:"sideBar"},n.a.createElement("span",null," Sortuj:"),n.a.createElement("ul",{className:"sideBarList"},n.a.createElement(h.a,{className:"link",to:"/"+this.props.active+"/name/asc"},n.a.createElement("li",{className:"sideBarItem",onClick:this.props.actions.sort.bind(this,{by:"name",order:"asc"})},"Nazwa A-Z")),n.a.createElement(h.a,{className:"link",to:"/"+this.props.active+"/name/desc"},n.a.createElement("li",{className:"sideBarItem",onClick:this.props.actions.sort.bind(this,{by:"name",order:"desc"})},"Nazwa Z-A")),n.a.createElement(h.a,{className:"link",to:"/"+this.props.active+"/price/asc"},n.a.createElement("li",{className:"sideBarItem",onClick:this.props.actions.sort.bind(this,{by:"price",order:"asc"})},"Cena rosn\u0105co")),n.a.createElement(h.a,{className:"link",to:"/"+this.props.active+"/price/desc"},n.a.createElement("li",{className:"sideBarItem",onClick:this.props.actions.sort.bind(this,{by:"price",order:"desc"})},"Cena malej\u0105co"))),n.a.createElement("div",null,n.a.createElement("h3",{className:"sliderTitle"},0===this.props.lastItems.length?null:"Ostatnie sztuki!:"),0===this.props.lastItems.length?null:n.a.createElement(Z,{click:this.click,lastItems:this.props.lastItems})))}}]),t}(r.Component),H=Object(f.a)(Object(v.connect)(function(e){return{itemList:e.shopReducer.itemList,active:e.shopReducer.active,sortParams:e.shopReducer.sortParams,lastItems:e.shopReducer.lastItems}},function(e){return{actions:Object(F.a)(i,e)}})($)),J=(a(199),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"pageContainer"},n.a.createElement(n.a.Fragment,null,n.a.createElement(H,null),n.a.createElement(W,null)))}}]),t}(r.Component)),Y=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"pageContainer"},n.a.createElement("div",{className:"subpageArea"},n.a.createElement("h1",{className:"subpageTitle"}," FAQ"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque mi vel sapien gravida varius. Vivamus pulvinar volutpat leo, quis mollis orci venenatis quis. Nam blandit convallis ornare. Ut accumsan finibus lacus, ac elementum mauris pellentesque ut. Nam sagittis rhoncus vulputate. Mauris molestie dolor a lectus mattis facilisis. Cras in quam quis sem pellentesque sagittis feugiat at diam. Morbi mollis elementum nisi ac sagittis. Quisque maximus urna lorem, id dapibus mauris luctus vel. Nullam blandit sagittis cursus. Aenean auctor fermentum dignissim. Nulla quis metus sit amet odio blandit ornare ac eget purus. Integer pharetra, nunc non pharetra fermentum, lorem nibh elementum enim, a sodales libero libero sit amet risus. Mauris ac elementum risus. Integer et dolor ut arcu luctus fringilla quis id nibh. Proin lectus lorem, blandit in nulla eget, laoreet venenatis metus. Aenean urna mi, cursus nec dignissim accumsan, porttitor sit amet purus. Nullam id felis urna. Phasellus scelerisque dictum elit vel vestibulum. Ut faucibus ligula laoreet, fermentum neque vel, vestibulum erat. Suspendisse nunc dui, venenatis sed nisl porta, dictum fringilla arcu. Maecenas id nunc tellus. Vivamus ut fringilla ligula. Donec augue lorem, suscipit ut faucibus porttitor, accumsan quis libero. Proin aliquam et tortor eu convallis. Etiam tincidunt lacus nec sem accumsan, ut consectetur sem dignissim. Duis scelerisque eu tellus sit amet semper. Vivamus placerat facilisis nibh, sit amet dapibus massa tristique vel. Donec vel turpis orci. Sed vitae metus sed nibh dignissim elementum a vitae diam. Praesent id dui venenatis, venenatis risus et, bibendum libero. Duis fringilla libero vitae efficitur suscipit. Sed congue hendrerit neque, ac tempor urna elementum aliquam. Nam ut nunc vehicula, egestas libero nec, sodales dolor. Nulla varius felis eget justo auctor, nec dignissim lacus imperdiet. Suspendisse commodo neque sed placerat tincidunt. Cras non est eu leo rutrum auctor nec sed felis. Morbi vestibulum, eros eu pulvinar molestie, risus justo placerat diam, dictum interdum elit felis faucibus nunc. Praesent id scelerisque sem. Pellentesque eget imperdiet dui. Donec eu lectus vel nibh malesuada suscipit aliquet sed lorem. Cras quis diam in ex vestibulum porta in in mi. Morbi in nibh in purus faucibus eleifend. Morbi condimentum lacus eget ultricies interdum. Duis nec dui magna. Donec sit amet ante ligula. Aliquam cursus auctor libero, eget mollis quam. Donec a ultrices urna. Nam semper nulla sed ligula placerat, ac molestie arcu faucibus. Donec at enim lacus. In et eleifend ipsum. Sed ornare orci nunc, quis fringilla arcu ullamcorper sit amet. Vivamus vitae enim hendrerit, accumsan est nec, euismod elit. Suspendisse potenti. Nam in nibh id dui feugiat gravida. Suspendisse sed nisl ullamcorper, fringilla metus vel, interdum orci. Proin eu tortor commodo, suscipit velit ac, viverra urna. Sed cursus ultrices leo id aliquet. Curabitur commodo nunc vulputate urna condimentum, at luctus lacus imperdiet. Aenean aliquam risus vitae velit cursus pulvinar non sagittis dolor. Donec pulvinar vitae mi eu sollicitudin. In hac habitasse platea dictumst. In euismod maximus nisi at pharetra. Ut euismod interdum eros sed lobortis. Nunc commodo dolor eget mi sagittis suscipit. Etiam cursus molestie ultricies. Morbi vel ipsum sed risus suscipit ullamcorper. Sed sollicitudin orci sit amet ante pharetra aliquam. Donec urna augue, interdum cursus sapien a, dictum egestas diam. Nullam viverra quis risus vel semper. Nam luctus finibus elit, id vulputate nisi egestas eget. Nam luctus libero quis odio pulvinar, non consequat metus venenatis. Donec tortor eros, mattis eu semper et, aliquet eget ligula. Nulla ac massa laoreet, condimentum mauris in, dictum augue. Sed eget lorem sed augue venenatis laoreet. Morbi maximus interdum efficitur. Integer ex libero, blandit faucibus dui eu, congue consequat nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tristique, enim ac dignissim malesuada, est velit euismod mi, tristique rutrum velit tortor in neque. Aenean fringilla, nulla eu feugiat venenatis, dolor neque gravida ligula, at hendrerit ante velit volutpat ipsum. Praesent eu ante dignissim, ultricies magna sed, laoreet orci. Maecenas tristique commodo sodales. Nam feugiat condimentum dolor sed interdum. Vivamus interdum mi orci. In eget justo pulvinar massa porttitor dapibus. Duis eu turpis lorem. Cras lacinia orci fermentum, condimentum tellus eu, malesuada orci. Proin massa sem, mattis quis mattis et, ullamcorper id erat. Phasellus facilisis nibh eu cursus accumsan.")))}}]),t}(n.a.Component),X=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"pageContainer"},n.a.createElement("div",{className:"subpageArea"},n.a.createElement("h1",{className:"subpageTitle"}," Regulamin"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque mi vel sapien gravida varius. Vivamus pulvinar volutpat leo, quis mollis orci venenatis quis. Nam blandit convallis ornare. Ut accumsan finibus lacus, ac elementum mauris pellentesque ut. Nam sagittis rhoncus vulputate. Mauris molestie dolor a lectus mattis facilisis. Cras in quam quis sem pellentesque sagittis feugiat at diam. Morbi mollis elementum nisi ac sagittis. Quisque maximus urna lorem, id dapibus mauris luctus vel. Nullam blandit sagittis cursus. Aenean auctor fermentum dignissim. Nulla quis metus sit amet odio blandit ornare ac eget purus. Integer pharetra, nunc non pharetra fermentum, lorem nibh elementum enim, a sodales libero libero sit amet risus. Mauris ac elementum risus. Integer et dolor ut arcu luctus fringilla quis id nibh. Proin lectus lorem, blandit in nulla eget, laoreet venenatis metus. Aenean urna mi, cursus nec dignissim accumsan, porttitor sit amet purus. Nullam id felis urna. Phasellus scelerisque dictum elit vel vestibulum. Ut faucibus ligula laoreet, fermentum neque vel, vestibulum erat. Suspendisse nunc dui, venenatis sed nisl porta, dictum fringilla arcu. Maecenas id nunc tellus. Vivamus ut fringilla ligula. Donec augue lorem, suscipit ut faucibus porttitor, accumsan quis libero. Proin aliquam et tortor eu convallis. Etiam tincidunt lacus nec sem accumsan, ut consectetur sem dignissim. Duis scelerisque eu tellus sit amet semper. Vivamus placerat facilisis nibh, sit amet dapibus massa tristique vel. Donec vel turpis orci. Sed vitae metus sed nibh dignissim elementum a vitae diam. Praesent id dui venenatis, venenatis risus et, bibendum libero. Duis fringilla libero vitae efficitur suscipit. Sed congue hendrerit neque, ac tempor urna elementum aliquam. Nam ut nunc vehicula, egestas libero nec, sodales dolor. Nulla varius felis eget justo auctor, nec dignissim lacus imperdiet. Suspendisse commodo neque sed placerat tincidunt.")))}}]),t}(n.a.Component),ee=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"pageContainer"},n.a.createElement("div",{className:"subpageArea"},n.a.createElement("h1",{className:"subpageTitle"}," Kontakt:"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque mi vel sapien gravida varius. Vivamus pulvinar volutpat leo, quis mollis orci venenatis quis. Nam blandit convallis ornare. Ut accumsan finibus lacus, ac elementum mauris pellentesque ut. Nam sagittis rhoncus vulputate. Mauris molestie dolor a lectus mattis facilisis. Cras in quam quis sem pellentesque sagittis feugiat at diam. Morbi mollis elementum nisi ac sagittis. Quisque maximus urna lorem, id dapibus mauris luctus vel. Nullam blandit sagittis cursus. Aenean auctor fermentum dignissim. Nulla quis metus sit amet odio blandit ornare ac eget purus. Integer pharetra, nunc non pharetra fermentum, lorem nibh elementum enim, a sodales libero libero sit amet risus. Mauris ac elementum risus. Integer et dolor ut arcu luctus fringilla quis id nibh. Proin lectus lorem, blandit in nulla eget, laoreet venenatis metus. Aenean urna mi, cursus nec dignissim accumsan, porttitor sit amet purus. Nullam id felis urna. Phasellus scelerisque dictum elit vel vestibulum. Ut faucibus ligula laoreet, fermentum neque vel, vestibulum erat. Suspendisse nunc dui, venenatis sed nisl porta, dictum fringilla arcu. Maecenas id nunc tellus. Vivamus ut fringilla ligula. Donec augue lorem, suscipit ut faucibus porttitor, accumsan quis libero. Proin aliquam et tortor eu convallis. Etiam tincidunt lacus nec sem accumsan, ut consectetur sem dignissim. Duis scelerisque eu tellus sit amet semper. Vivamus placerat facilisis nibh, sit amet dapibus massa tristique vel. Donec vel turpis orci. Sed vitae metus sed nibh dignissim elementum a vitae diam. Praesent id dui venenatis, venenatis risus et, bibendum libero.")))}}]),t}(n.a.Component),te=a(27),ae=a(99),ie={data:ae,itemList:[],page:0,active:1,sortParams:{by:"name",order:"desc"},selectedProduct:{},cart:[],lastItems:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a=ae.filter(function(e){return e.inMagazine<=3}),i=e.data.length,r=e.page;if(i>6&&r<=i/6){var n=0;for(n=0;n<i;n+=6)r++}else r=1;return Object.assign({},e,{lastItems:a,page:r});case N:return function(e,t){var a=t.sortParams.by,i=t.sortParams.order;if(a===e.sortParams.by&&i===e.sortParams.order)return e;var r=e.data.sort(function(e,t){return"price"===a&&"desc"===i?t.price-e.price:"price"===a&&"asc"===i?e.price-t.price:"name"===a&&"asc"===i?e.name.localeCompare(t.name):"name"===a&&"desc"===i?t.name.localeCompare(e.name):null});return Object.assign({},e,{itemList:Object(V.a)(r),sortParams:{by:a,order:i}})}(e,t);case O:return function(e){var t=e.data.slice(6*(e.active-1),6*e.active),a=e.data.filter(function(e){return e.inMagazine<=3&&e.inMagazine>0});return Object.assign({},e,{itemList:Object(V.a)(t),lastItems:a})}(e);case j:var s=t.number;return s=void 0===t.number?e.active:t.number,Object.assign({},e,{active:parseInt(s)});case k:var c=e.data.find(function(e){return e.id===t.id});return c.count=0,Object.assign({},e,{selectedProduct:c});case C:var u=e.data.find(function(e){return e.id===t.id}),o=e.cart.find(function(e){return e.id===u.id});if(0!==u.inMagazine){if(o){if(o.count<o.inMagazine){var l=e.cart.findIndex(function(e){return e.id===t.id}),m=Object(te.a)({},e.cart[l],{count:e.cart[l].count+1});return Object.assign({},e,{cart:[].concat(Object(V.a)(e.cart.slice(0,l)),[m],Object(V.a)(e.cart.slice(l+1))),selectedProduct:Object(te.a)({},e.selectedProduct,{count:e.selectedProduct.count+1})})}return Object.assign({},e,{selectedProduct:Object(te.a)({},e.selectedProduct,{count:o.inMagazine})})}return e.selectedProduct.count=1,Object.assign({},e,Object(te.a)({cart:[].concat(Object(V.a)(e.cart),[u])},c))}return e;case y:var d=e.cart.filter(function(e){return e.id!==t.id});return Object.assign({},e,{cart:Object(V.a)(d)});case I:return function(e,t){var a=e.cart.findIndex(function(e){return e.id===t.id}),i=Object(te.a)({},e.cart[a],{count:e.cart[a].count+=t.value});return Object.assign({},e,{cart:[].concat(Object(V.a)(e.cart.slice(0,a)),[i],Object(V.a)(e.cart.slice(a+1)))})}(e,t);case q:return function(e){for(var t in e.data)if(e.data.hasOwnProperty(t))for(var a in e.cart)e.cart.hasOwnProperty(a)&&e.data[t].id===e.cart[a].id&&(e.data[t].sold=e.cart[a].count,e.data[t].inMagazine=e.data[t].inMagazine-e.cart[a].count);return Object.assign({},e,Object(te.a)({},e,{cart:[]}))}(e)}return e},ne=Object(F.b)({shopReducer:re}),se=a(56),ce=a(172),ue=a.n(ce),oe=a(173),le=a.n(oe),me=Object(se.createDevTools)(n.a.createElement(le.a,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q"},n.a.createElement(ue.a,null))),de=Object(F.c)(ne,me.instrument()),pe=(a(422),a(432)),be=function(e){return n.a.createElement("div",{className:"menu"},n.a.createElement("div",{className:"logoArea"},n.a.createElement("img",{className:"logoPicture",src:"/React-Shop/img/logo.png",alt:"logo1"})),n.a.createElement("div",{className:"menuArea"},n.a.createElement("ul",{className:"menuList"},n.a.createElement("li",{className:"menuItem"},n.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/1/name/desc"},"Home")),n.a.createElement("li",{className:"menuItem"},n.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/faq"},"FAQ")),n.a.createElement("li",{className:"menuItem"},n.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/eula"},"Regulamin")),n.a.createElement("li",{className:"menuItem"},n.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/contact"},"Kontakt")),n.a.createElement("li",{className:"menuItem cartIconArea"},n.a.createElement(pe.a,{activeStyle:{color:"black"},className:"link",to:"/cart"},n.a.createElement("i",{className:"fas fa-shopping-bag cartIcon"}),n.a.createElement("div",{className:e.cart.length>0?"productsInCart":"hide"},parseFloat(e.cart.reduce(function(e,t){return e+t.count},0))))))),n.a.createElement("div",null,e.children))},ge=(a(425),function(e){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"allRightsArea"},n.a.createElement("p",null,"All rights reserved")),n.a.createElement("div",{className:"footerArea"},n.a.createElement("ul",{className:"footerList"},n.a.createElement("li",{className:"footerItem"},n.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/"+e.active+"/"+e.sortParams.by+"/"+e.sortParams.order},"Home")),n.a.createElement("li",{className:"footerItem"},n.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/faq"},"FAQ")),n.a.createElement("li",{className:"footerItem"},n.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/eula"},"Regulamin")),n.a.createElement("li",{className:"footerItem"},n.a.createElement(pe.a,{activeStyle:{fontWeight:"bold",color:"black"},className:"link",to:"/contact"},"Kontakt")))))}),ve=function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).call(this,e))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(be,{active:this.props.active,sortParams:this.props.sortParams,cart:this.props.cart}),this.props.children,n.a.createElement(ge,{active:this.props.active,sortParams:this.props.sortParams}))}}]),t}(r.Component),he=Object(f.a)(Object(v.connect)(function(e){return{active:e.shopReducer.active,sortParams:e.shopReducer.sortParams,cart:e.shopReducer.cart}})(ve)),fe=(a(427),function(e){return n.a.createElement("div",{className:"productDetailComponent"},n.a.createElement("div",{className:"productDetailContainer"},n.a.createElement("div",{className:"productDetailImageArea"},n.a.createElement("img",{className:"productDetailImage",src:"/React-Shop"+"".concat(e.product.picture),alt:"product".concat(e.product.id)})),n.a.createElement("div",{className:"productDetailDescriptions"},n.a.createElement("p",{className:"productDetailTitle"},e.product.name),n.a.createElement("p",{className:"productDetailPrice"},"$".concat(parseFloat(e.product.price).toFixed(2))),n.a.createElement("p",{className:"productDetailText"},e.product.description),n.a.createElement("button",{className:e.product.inMagazine-e.product.count===0||0===e.product.inMagazine?"buttonCart buttonCart--empty":"buttonCart ",onClick:function(){return e.handleClickAddToCart(e.product.id)}},e.product.inMagazine-e.product.count===0||0===e.product.inMagazine?"Wybacz, brak wi\u0119cej produkt\xf3w w magazynie":"Dodaj do koszyka"))))}),Ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleClickAddToCart=function(e){a.props.actions.addToCart(e)},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.actions.getProduct(this.props.match.params.id)}},{key:"render",value:function(){return n.a.createElement(fe,{product:this.props.selectedProduct,handleClickAddToCart:this.handleClickAddToCart,cart:this.props.cart})}}]),t}(r.Component),Ne=Object(f.a)(Object(v.connect)(function(e){return{selectedProduct:e.shopReducer.selectedProduct,cart:e.shopReducer.cart}},function(e){return{actions:Object(F.a)(i,e)}})(Ee)),Pe=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"pageContainer"},n.a.createElement("a",{href:"https://www.freepik.com/free-photos-vectors/computer"},n.a.createElement("img",{src:"https://image.freepik.com/free-vector/page-found-error-404_23-2147508324.jpg",alt:"not found"})),n.a.createElement("div",{className:"notFoundTextArea"},n.a.createElement(h.a,{className:"link",to:"/1/name/desc"},n.a.createElement("p",null,"Wr\xf3\u0107 na stron\u0119 g\u0142\xf3wn\u0105"))))}}]),t}(n.a.Component),Oe=(a(429),function(e){return n.a.createElement("div",{className:"pageContainer"},n.a.createElement("div",{className:"subpageArea"},n.a.createElement("h1",null,"KOSZYK"),e.cart.map(function(t){return n.a.createElement("div",{className:"cartComponent",key:t.id},n.a.createElement("div",{className:"cartContainer"},n.a.createElement("div",{className:"cartImageArea"},n.a.createElement("img",{className:"cartProductImage",src:"/React-Shop"+"".concat(t.picture),alt:"product".concat(t.id)})),n.a.createElement("div",{className:"cartProductDescriptions"},n.a.createElement("div",{className:"cartProductDescriptionsContainer"},n.a.createElement("p",{className:"cartProductTitle"},t.name),n.a.createElement("p",{className:"cartProductText"},t.description)),n.a.createElement("div",{className:"cartProductBuyingArea"},n.a.createElement("div",{className:"cartProductBuyingContainer"},n.a.createElement("p",{className:"cartProduct cartProduct--grey"},"$".concat(parseFloat(t.price).toFixed(2))),n.a.createElement("span",{className:t.count>1?"cartProduct cartProductClick":"cartProduct cartProductDisabled",onClick:function(){return 1===t.count?null:e.clickCartCounter(t.id,-1)}},"-"),n.a.createElement("p",{className:"cartProduct"},t.count),n.a.createElement("span",{className:t.count===t.inMagazine?"cartProduct cartProductDisabled":"cartProduct cartProductClick",onClick:function(){return t.count===t.inMagazine?null:e.clickCartCounter(t.id,1)}},"+"),n.a.createElement("p",{className:"cartProduct"},"szt"),n.a.createElement("span",{className:"cartDelProductButton",onClick:function(){return e.clickDelProduct(t.id)}},"usu\u0144 produkt"))))))}),n.a.createElement("div",{className:0!==e.cart.length?"hide":"emptyCart"},n.a.createElement("h3",null," Tw\xf3j koszyk jest pusty :(")),n.a.createElement("div",{className:0===e.cart.length?"hide":"cartFinishArea"},n.a.createElement("p",{className:"cartProduct cartProduct--grey"},"kod rabatowy"),n.a.createElement("input",{placeholder:"Tw\xf3j kod rabatowy"}),n.a.createElement("p",{className:"cartProduct"},"TOTAL:"," $".concat(parseFloat(e.cart.reduce(function(e,t){return e+t.price*t.count},0)).toFixed(2)," ")),n.a.createElement("button",{className:"buttonCart",onClick:function(){return e.clickUpdateMagazine()}},"Zap\u0142a\u0107"))))}),je=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleClickDelProduct=function(e){return a.props.actions.defFromCart(e)},a.handleClickCartCounter=function(e,t){return a.props.actions.productInCartCount(e,t)},a.handleClickUpdateMagazine=function(){return a.props.actions.updateProductsInMagazine()},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement(Oe,{product:this.props.selectedProduct,cart:this.props.cart,clickDelProduct:this.handleClickDelProduct,clickCartCounter:this.handleClickCartCounter,clickUpdateMagazine:this.handleClickUpdateMagazine})}}]),t}(r.Component),ke=Object(f.a)(Object(v.connect)(function(e){return{selectedProduct:e.shopReducer.selectedProduct,cart:e.shopReducer.cart}},function(e){return{actions:Object(F.a)(i,e)}})(je));Object(s.render)(n.a.createElement(v.Provider,{store:de},n.a.createElement(c.a,{basename:"/React-Shop"},n.a.createElement(he,null,n.a.createElement(u.a,null,n.a.createElement(o.a,{exact:!0,path:"/",component:J}),n.a.createElement(o.a,{exact:!0,path:"/:id/:by/:order",component:J}),n.a.createElement(o.a,{path:"/cart",component:ke}),n.a.createElement(o.a,{path:"/product/:id",component:Ne}),n.a.createElement(o.a,{path:"/faq",component:Y}),n.a.createElement(o.a,{path:"/eula",component:X}),n.a.createElement(o.a,{path:"/contact",component:ee}),n.a.createElement(o.a,{path:"/error",render:function(){return n.a.createElement(Pe,null)}}),n.a.createElement(l.a,{to:"/error"}))))),document.getElementById("root")),de.dispatch(A())},99:function(e){e.exports=[{id:"5c46211473b20bdc7158a391",name:"okulary",price:10.99,picture:"/img/1.jpg",description:"Eiusmod tempor officia incididunt eu. Laboris mollit ex commodo velit eu nulla voluptate officia. Do nulla laborum eu cillum aliquip irure qui sint enim ut do.",inMagazine:3,sold:0,count:0},{id:"5c462114d7b4cffdbb3bcb81",name:"zapalniczka",price:5.99,picture:"/img/2.jpg",description:"Ad magna adipisicing ullamco duis id sit. Veniam labore proident nostrud minim mollit. Anim id amet nostrud id qui. Consequat excepteur dolor voluptate nostrud velit velit quis.",inMagazine:12,sold:0,count:0},{id:"5c462114c79a3b1cd7063afb",name:"perfum",price:203.99,picture:"/img/3.jpg",description:"Veniam deserunt laborum dolor do exercitation ut deserunt. Laborum eiusmod ut aute nisi veniam. Excepteur et excepteur ullamco commodo ut quis. Duis do reprehenderit id eu qui tempor",inMagazine:2,sold:0,count:0},{id:"5c4621142aab069708c053fd",name:"zawieszka",price:3.99,picture:"/img/4.jpg",description:"Officia consectetur culpa cillum magna pariatur amet ut. Tempor minim nostrud laborum ipsum esse. Ut quis voluptate adipisicing ullamco occaecat cillum deserunt labore Lorem consequat.",inMagazine:22,sold:0,count:0},{id:"5c4621142aab02dt38c053fa",name:"aparat",price:999.99,picture:"/img/5.jpg",description:"Minim aute laboris mollit aliquip sit do eiusmod. Id culpa sint aute qui ex nostrud incididunt proident. Excepteur reprehenderit cillum labore dolor sunt in esse.",inMagazine:3,sold:0,count:0},{id:"z57nm21142aab02dt38c098hsa",name:"zegarek",price:199.99,picture:"/img/6.jpeg",description:"Labore voluptate velit adipisicing magna amet consequat elit aliquip mollit. Dolor aliquip labore nisi adipisicing nisi amet sint. Non ea nostrud amet exercitation anim esse dolor.",inMagazine:5,sold:0,count:0},{id:"p9jkj7ffsdfbmj863234fdf42",name:"zegarek",price:129.99,picture:"/img/7.jpeg",description:"Eiusmod laborum deserunt aute quis ex. Minim esse occaecat id veniam do. Et id voluptate ex officia excepteur et. Anim anim officia reprehenderit eu incididunt veniam deserunt nisi.",inMagazine:3,sold:0,count:0},{id:"bgt5670kjgsss354gjydv6579ks",name:"pomadka",price:19.99,picture:"/img/8.jpeg",description:"Duis esse amet irure id esse aliquip amet aute culpa irure anim laborum. Ipsum est ad et excepteur. Aute eiusmod consectetur ipsum et dolore tempor.",inMagazine:13,sold:0,count:0}]}},[[157,2,1]]]);
//# sourceMappingURL=main.294302d8.chunk.js.map