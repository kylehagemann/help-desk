(this["webpackJsonphelp-desk"]=this["webpackJsonphelp-desk"]||[]).push([[0],{37:function(e,a,t){e.exports=t(60)},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(15),l=t.n(c),i=t(19),s=t(16),o=t(12),u={loading:!1,error:null,formattedData:[]};var d=t(32),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,m=Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_DATA_BEGIN":return Object(o.a)({},e,{loading:!0,error:null});case"FETCH_DATA_SUCCESS":return Object(o.a)({},e,{loading:!1,formattedData:a.payload.formattedData});case"FETCH_DATA_FAILURE":case"PARSE_DATA_FAILURE":return Object(o.a)({},e,{loading:!1,error:a.payload.error,formattedData:[]});default:return e}}),h(Object(s.a)(d.a))),b=t(14),p=t(6),f=t(7),E=t(9),g=t(8),x=t(11),O=t(10),y=t(69),j=t(70),k=t(66),v=t(63),C=t(24),_=t.n(C),I=(t(47),function(e,a){return"object"!==typeof a?String(a):a||""}),S=function(e){var a=[];return!N(e)&&e.forEach((function(e){!N(e)&&a.push(JSON.parse(JSON.stringify(e),I))})),a},N=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];var n=a;return n.some((function(e){if(e){if("string"===typeof e&&0===e.length)return!0;if("object"===typeof e){if(Array.isArray(e)&&0===e.length)return!0;if(0===Object.entries(e).length&&e.constructor)return!0}return!1}return!0}))};function D(e){return e.ok?Promise.resolve(e):Promise.reject(new Error(e.statusText))}var A=["organizations","tickets","users","exact match"],F=["search key","search value"],T=["data/organizations.json","data/tickets.json","data/users.json"],w=[],R=[];var z=function(){return{type:"FETCH_DATA_BEGIN"}},q=function(e){return{type:"FETCH_DATA_SUCCESS",payload:{formattedData:e}}},U=function(e){return{type:"FETCH_DATA_FAILURE",payload:{error:e}}},P=function(e){return{type:"PARSE_DATA_FAILURE",payload:{error:e}}},H=t(36),L=t(61),M=t(62),W=function(e){function a(){return Object(p.a)(this,a),Object(E.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(O.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props.result;return r.a.createElement("li",{className:"pl-0 pb-3"},r.a.createElement(L.a,{className:"result-card"},r.a.createElement(M.a,null,r.a.createElement("ul",{className:"card-list pl-0"},e?Object.entries(e).map((function(e){var a=Object(H.a)(e,2),t=a[0],n=a[1];return r.a.createElement("li",{key:t,arialabel:"Data Group"},r.a.createElement("div",{className:"d-inline",arialabel:t,tabIndex:"0"},t),":",r.a.createElement("div",{className:"d-inline",arialabel:n,tabIndex:"0"}," ",n.toString()))})):r.a.createElement("div",{arialabel:"No Results",tabIndex:"0"},"No Results")))))}}]),a}(r.a.Component),B=function(e){function a(){return Object(p.a)(this,a),Object(E.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(O.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props,a=e.id,t=e.results;return r.a.createElement(v.a,{md:"4"},r.a.createElement("h1",{className:"pb-1 text-center",arialabel:a,tabIndex:"0"},a),r.a.createElement("ul",{className:"px-2 data-list"},N(a)||N(t)?Object.values(a).includes("*")?r.a.createElement("div",{arialabel:"Section Disabled",tabIndex:"0"},"*Section Disabled"):r.a.createElement("div",{arialabel:"No Results",tabIndex:"0"},"No Results"):t.map((function(e){return N(e)?Object.values(a).includes("*")?r.a.createElement("div",{arialabel:"Section Disabled",tabIndex:"0"},"*Section Disabled"):r.a.createElement("div",{arialabel:"No Results",tabIndex:"0"},"No Results"):r.a.createElement(W,{key:e._id,result:e})}))))}}]),a}(r.a.Component),J=t(64),G=t(65),V=t(34),X=t(72),$=t(33),Q=t(35),Z=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(x.a)(t)),t}return Object(O.a)(a,e),Object(f.a)(a,[{key:"handleChange",value:function(e){this.props.onSearchChange(e)}},{key:"render",value:function(){var e=this.props,a=e.label,t=e.searchValue,n=e.required;return r.a.createElement("label",{className:"mx-3"},n&&a&&a.includes("search key")?a+"(*Required)":a,r.a.createElement(J.a,null,r.a.createElement(G.a,{addonType:"prepend"},r.a.createElement(V.a,null,r.a.createElement($.a,{icon:Q.a}))),r.a.createElement(X.a,{name:a,onChange:this.handleChange,className:"search-input",arailabel:a,value:t,required:n})))}}]),a}(r.a.Component),K=function(e){function a(){return Object(p.a)(this,a),Object(E.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(O.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.isSelected,n=e.onCheckboxChange;return r.a.createElement("label",{className:"mx-3"},r.a.createElement("input",{arialabel:a,checked:t,className:"checkbox-input mr-1",name:a,onChange:n,type:"checkbox"}),a)}}]),a}(r.a.Component),Y=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(c)))).createCheckbox=function(e){var a=t.props,n=a.checkboxes,c=a.handleCheckboxChange;return r.a.createElement(K,{label:e,isSelected:n[e],onCheckboxChange:c,key:e})},t.createSearchInput=function(e){var a=t.props,n=a.searchInputs,c=a.handleSearchChange,l=a.required;return r.a.createElement(Z,{label:e,searchValue:n[e],onSearchChange:c,key:e,required:l})},t.createCheckboxes=function(){var e=t.props.checkboxData;return e&&e.map(t.createCheckbox)},t.createSearchInputs=function(){var e=t.props.searchInputData;return e&&e.map(t.createSearchInput)},t}return Object(O.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{md:"12"},r.a.createElement(k.a,{className:"my-3 justify-content-center"},this.createCheckboxes()),r.a.createElement(k.a,{className:"my-3 justify-content-center"},this.createSearchInputs()))}}]),a}(r.a.Component),ee=t(71),ae=t(67),te=t(68),ne=function(e){function a(){return Object(p.a)(this,a),Object(E.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(O.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props.message;return r.a.createElement("div",{className:"d-flex justify-content-center p-3 bg-danger my-2 rounded"},r.a.createElement(ee.a,null,r.a.createElement(ae.a,{arialabel:"Error",tabIndex:"0"},"ERROR!"),r.a.createElement(te.a,{arialabel:e,tabIndex:"0"},e)))}}]),a}(r.a.Component),re=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).handleCheckboxChange=function(e){var a=e.target.name;[a].includes("exact match")&&t.setState((function(e){return{required:!e.required}})),t.setState((function(e){return{checkboxes:Object(o.a)({},e.checkboxes,Object(b.a)({},a,!e.checkboxes[a]))}}))},t.handleSearchChange=function(e){var a=e.target.name,n=e.target.value;t.setState((function(e){return{searchInputs:Object(o.a)({},e.searchInputs,Object(b.a)({},a,n))}}))},t.handleSearchChange=t.handleSearchChange.bind(Object(x.a)(t)),t.handleCheckboxChange=t.handleCheckboxChange.bind(Object(x.a)(t)),t.state={checkboxes:A.reduce((function(e,a){return Object(o.a)({},e,Object(b.a)({},a,!0))}),{}),searchInputs:F.reduce((function(e,a){return Object(o.a)({},e,Object(b.a)({},a,""))}),{}),required:!0,filteredData:[]},t}return Object(O.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e(z()),a.prev=1,a.next=4,_.a.awrap((t=T,Promise.all(N(t)?function(e){return{error:e}}:t.map((function(e){return window.fetch(e).then(D).then((function(e){return e.json()})).then((function(a){return{name:e.split("\\").pop().split("/").pop().split(".")[0],data:a}})).catch((function(a){return{error:a,url:e}}))})))));case 4:w=a.sent,a.prev=5,R=S(w),a.next=12;break;case 9:return a.prev=9,a.t0=a.catch(5),a.abrupt("return",e(P(a.t0)));case 12:e(q(R)),a.next=18;break;case 15:return a.prev=15,a.t1=a.catch(1),a.abrupt("return",e(U(a.t1)));case 18:case 19:case"end":return a.stop()}var t}),null,null,[[1,15],[5,9]])}))}},{key:"render",value:function(){var e=this.props,a=e.error,t=e.loading,n=e.formattedData,c=this.state,l=c.searchInputs,i=c.checkboxes,s=c.required,o=this.state.filteredData,u=l["search key"],d=l["search value"],h=new RegExp("^"+u+"$"),m=new RegExp("^"+d+"$");return N(n)||(o=i["exact match"]?n.map((function(e){return N(e,e.name)?"":i[e.name]?N(u)?N(u)&&!N(d)?{name:e.name,data:[]}:N(u)&&N(d)?{name:e.name,data:e.data}:{name:e.name,data:[]}:{name:e.name,data:e.data.filter((function(e){return Object.keys(e).some((function(a){return a.match(h)?Array.isArray(e[a])?e[a].some((function(e){return e.match(m)})):e[a].match(m):""}))}))}:{name:"*".concat(e.name),data:[]}})):n.map((function(e){return N(e,e.name)?"":i[e.name]?{name:e.name,data:e.data.filter((function(e){return Object.keys(e).some((function(a){return a.startsWith(u)?Array.isArray(e[a])?e[a].some((function(e){return e.startsWith(d)})):e[a].startsWith(d):""}))}))}:{name:"*"+e.name,data:[]}}))),t?r.a.createElement("div",{className:"text-center p-3 my-2"},r.a.createElement("h3",null,"Loading"),r.a.createElement(y.a,{color:"primary"})):a?r.a.createElement(ne,{message:a.message}):r.a.createElement(j.a,null,r.a.createElement(k.a,null,r.a.createElement(v.a,{md:"12",className:"my-5"},r.a.createElement("h1",{className:"text-center",arialabel:"Page Title",tabIndex:"0"},"Zendesk Quick Search Application"))),r.a.createElement(k.a,null,r.a.createElement("p",{arialabel:"Welcome Message",tabIndex:"0"},'Instructions: Click on the filter checkboxes below to toggle by Organizations, Tickets and Users.\nTo toggle between a filtering search (narrowing results that are similar such as "th" resulting\nin the, there, etc...) and an exact search, click on the exact match checkbox. Filtering can be \ndone independently on the search key and/or value. When using exact search, a key must be entered \nfirst before entering a value (as indicated by the required text). Empty value matching is possible \nin exact match, just enter your key filter first and if it has an empty value, there is no need to \nenter anything in the value field (ex: filter key: "details", filter value: "").')),r.a.createElement(k.a,null,r.a.createElement("h3",{arialabel:"Searchable Fields",tabIndex:"0",className:"mt-3 w-100 text-center"},"Searchable Fields"),r.a.createElement(v.a,{md:"4"},r.a.createElement("h5",{arialabel:"Organization Fields",tabIndex:"0",className:"mt-3 w-100 text-center"},"Organization Fields:"),r.a.createElement("p",{arialabel:"Organization Fields",tabIndex:"0",className:"text-center"},"\n_id,\nurl\nexternal_id\nname\ndomain_names\ncreated_at\ndetails\nshared_tickets\ntags\n")),r.a.createElement(v.a,{md:"4"},r.a.createElement("h5",{arialabel:"Organization Fields",tabIndex:"0",className:"mt-3 w-100 text-center"},"Ticket Fields:"),r.a.createElement("p",{arialabel:"Organization Fields",tabIndex:"0",className:"text-center"},"\n_id,\nurl,\nexternal_id,\ncreated_at,\ntype,\nsubject,\ndescription,\npriority,\nstatus,\nsubmitter_id,\nassignee_id,\norganization_id,\ntags,\nhas_incidents,\nvia,\n")),r.a.createElement(v.a,{md:"4"},r.a.createElement("h5",{arialabel:"Organization Fields",tabIndex:"0",className:"mt-3 w-100 text-center"},"User Fields:"),r.a.createElement("p",{arialabel:"Organization Fields",tabIndex:"0",className:"text-center"},"\n_id\nurl,\nexternal_id,\nname,\nalias,\ncreated_at,\nactive,\nverified,\nshared,\nlocale,\ntimezone,\nlast_login_at,\nemail,\nphone,\nsignature,\norganization_id,\ntags,\nsuspended,\nrole\n"))),r.a.createElement(k.a,null,N(i)?r.a.createElement(ne,{message:"Missing Checkbox Controls"}):N(l)?r.a.createElement(ne,{message:"Missing Search Input Controls"}):r.a.createElement(Y,{handleSearchChange:this.handleSearchChange,searchInputs:l,checkboxes:i,checkboxData:A,searchInputData:F,handleCheckboxChange:this.handleCheckboxChange,required:s})),r.a.createElement(k.a,null,N(o)?r.a.createElement(ne,{message:"No Data To Be Filtered"}):o.map((function(e,a){return N(e)?r.a.createElement("div",{key:a,className:"col-md-4"},r.a.createElement(ne,{key:a,message:"Error Processing Object Data"})):r.a.createElement(B,{key:e.name,id:e.name,results:e.data})}))))}}]),a}(r.a.Component),ce=Object(i.b)((function(e){return{error:e.error,formattedData:e.formattedData,loading:e.loading}}))(re);t(58),t(59);l.a.render(r.a.createElement(i.a,{store:m},r.a.createElement(ce,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d14d26c1.chunk.js.map