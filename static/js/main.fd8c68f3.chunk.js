(this["webpackJsonpreact-firebase-todo-app"]=this["webpackJsonpreact-firebase-todo-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(13),o=a.n(r);a(24);const c={appBar:{display:"flex",justifyContent:"space-between",padding:"10px",backgroundColor:"#2196F3",color:"#fff"},logoContainer:{flex:1},logo:{maxWidth:"100%",maxHeight:"40px"},loginContainer:{flex:.2,textAlign:"right"},loginButton:{padding:"8px 16px",fontSize:"14px",backgroundColor:"#4CAF50",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"}};var i=()=>n.a.createElement("div",{style:c.appBar},n.a.createElement("div",{style:{}},n.a.createElement("p",{style:{marginLe:"0px",fontFamily:"console.assert(first, second)",fontWeight:"bolder"}},"BILLING ")),n.a.createElement("div",{style:c.loginContainer},n.a.createElement("button",{onClick:()=>{window.location.href="/addproducts"},style:c.loginButton},"Admin"))),d=(a(25),a(16));var m=a.n(d).a.initializeApp({apiKey:"AIzaSyBCzgB_sW4Ol12WTcnJ2A9Q9yfJUaEp6aI",authDomain:"sensordata-ff1d3.firebaseapp.com",databaseURL:"https://sensordata-ff1d3-default-rtdb.europe-west1.firebasedatabase.app",projectId:"sensordata-ff1d3",storageBucket:"sensordata-ff1d3.appspot.com",messagingSenderId:"1094614512668",appId:"1:1094614512668:web:232d53e804b974f5e45bd9",measurementId:"G-JMR1DV7NMJ"}).firestore(),s=a(17);var u=()=>{const[e,t]=Object(l.useState)([]),[a,r]=Object(l.useState)([]),[o,c]=Object(l.useState)(""),[i,d]=Object(l.useState)([]),[u,p]=Object(l.useState)("");Object(l.useEffect)(()=>{(async()=>{const e=(await m.collection("productCategories").get()).docs.map(e=>e.data().name);t(e)})(),(async()=>{const e=(await m.collection("products").get()).docs.map(e=>e.data());r(e)})()},[]);return n.a.createElement("div",null,n.a.createElement("h1",null,"Please Bill Your Order"),n.a.createElement("label",null,"Search Product:",n.a.createElement("input",{type:"text",placeholder:"Search by Product Name",value:u,onChange:e=>p(e.target.value)})),n.a.createElement("label",null,"Select Product:",n.a.createElement("select",{onChange:e=>c(e.target.value),value:o},n.a.createElement("option",{value:""},"Select Product"),a.filter(e=>e.name.toLowerCase().includes(u.toLowerCase())).map(e=>n.a.createElement("option",{key:e.name,value:e.name},e.name," - ",e.price,"$")))),n.a.createElement("div",null,n.a.createElement("h2",null,"Create Sale"),n.a.createElement("button",{className:"Success",style:{backgroundColor:"#5dcef0"},onClick:async()=>{if(o){const e=a.find(e=>e.name===o);if(e){const t=await(async e=>{const t=await m.collection("gstRates").doc(e).get();return t.exists?t.data():null})(e.category);d([...i,{...e,taxData:t}]),c("")}}}},"+Add to Sale")),n.a.createElement("div",null,n.a.createElement("h2",null,"Generate Final Bill"),n.a.createElement("button",{style:{backgroundColor:"#76f05b"},onClick:()=>{const e=new s.a;e.text("Final Bill",10,10),i.forEach((t,a)=>{e.text("".concat(t.name," - ").concat(t.price,"$ - Tax: ").concat(t.taxName?t.taxName:"N/A"," (").concat(t.taxRate?t.taxRate:"N/A","%)"),10,20+10*a)});const t=i.reduce((e,t)=>e+t.price,0);e.text("Total: ".concat(t,"$"),10,20+10*i.length+10),e.save("final-bill.pdf")}},"Generate Bill and Download PDF")),n.a.createElement("div",null,n.a.createElement("h2",null,"Final Bill"),n.a.createElement("table",{border:"1"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Category"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Tax Name"),n.a.createElement("th",null,"Tax Rate"))),n.a.createElement("tbody",null,i.map((e,t)=>n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.category),n.a.createElement("td",null,e.price,"$"),n.a.createElement("td",null,e.taxRate?e.taxName:"N/A"),n.a.createElement("td",null,e.taxName?e.taxRate:"N/A")))))))};const p={container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},title:{fontSize:"24px",fontWeight:"bold",marginBottom:"20px"},formContainer:{width:"400px",padding:"20px",border:"1px solid #ccc",borderRadius:"8px",backgroundColor:"#fff",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",marginBottom:"20px"},formLabel:{marginBottom:"10px",fontSize:"14px",fontWeight:"bold"},formInput:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ccc",boxSizing:"border-box",marginBottom:"15px",fontSize:"14px"},formButton:{backgroundColor:"#64f5fa",color:"#fff",padding:"10px",borderRadius:"4px",cursor:"pointer",fontSize:"16px"},searchContainer:{display:"flex",marginBottom:"20px"},searchInput:{width:"200px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc",boxSizing:"border-box",marginRight:"10px"},searchButton:{backgroundColor:"#64f5fa",color:"#fff",padding:"8px",borderRadius:"4px",cursor:"pointer"},table:{borderCollapse:"collapse",width:"80%",marginTop:"20px"},"table th, table td":{border:"1px solid #ddd",padding:"8px",textAlign:"left"}};var E=()=>{const[e,t]=Object(l.useState)([]),[a,r]=Object(l.useState)([]),[o,c]=Object(l.useState)([]),[i,d]=Object(l.useState)([]),[s,u]=Object(l.useState)(""),[E,b]=Object(l.useState)(""),[g,f]=Object(l.useState)(""),[x,h]=Object(l.useState)(""),[y,v]=Object(l.useState)(""),[C,S]=Object(l.useState)(""),[w,k]=Object(l.useState)(""),[B,O]=Object(l.useState)(""),[j,N]=Object(l.useState)("");Object(l.useEffect)(()=>{(async()=>{const e=(await m.collection("productCategories").get()).docs.map(e=>e.data().name);t(e)})(),(async()=>{const e=(await m.collection("taxRates").get()).docs.map(e=>e.data().rate);r(e)})(),(async()=>{const e=(await m.collection("taxNames").get()).docs.map(e=>e.data().name);c(e)})(),(async()=>{try{const e=(await m.collection("products").get()).docs.map(e=>({id:e.id,...e.data()}));d(e)}catch(e){console.error("Error fetching products: ",e)}})()},[]);return n.a.createElement("div",{style:p.container},n.a.createElement("h2",{style:p.title},"Admin Panel"),n.a.createElement("div",{style:p.formContainer},n.a.createElement("label",{style:p.formLabel},"Product Name:",n.a.createElement("input",{type:"text",value:x,onChange:e=>h(e.target.value),style:p.formInput})),n.a.createElement("label",{style:p.formLabel},"Product Category:",n.a.createElement("select",{value:y,onChange:e=>v(e.target.value),style:p.formInput},n.a.createElement("option",{value:"",disabled:!0},"Select category..."),e.map(e=>n.a.createElement("option",{key:e,value:e},e))),n.a.createElement("input",{type:"text",value:s,onChange:e=>u(e.target.value),style:p.formInput,placeholder:"Or type a new category..."})),n.a.createElement("label",{style:p.formLabel},"Tax Rate (%):",n.a.createElement("input",{type:"text",value:E,onChange:e=>b(e.target.value),style:p.formInput})),n.a.createElement("label",{style:p.formLabel},"Tax Name:",n.a.createElement("select",{value:C,onChange:e=>S(e.target.value),style:p.formInput},n.a.createElement("option",{value:"",disabled:!0},"Select tax name..."),o.map(e=>n.a.createElement("option",{key:e,value:e},e))),n.a.createElement("input",{type:"text",value:g,onChange:e=>f(e.target.value),style:p.formInput,placeholder:"Or type a new tax name..."})),n.a.createElement("label",{style:p.formLabel},"Product Price:",n.a.createElement("input",{type:"text",value:w,onChange:e=>k(e.target.value),style:p.formInput})),n.a.createElement("button",{style:p.formButton,onClick:async()=>{if(x&&w&&(y||s)&&(C||g)&&E)try{await m.collection("products").add({name:x,category:y||s,price:parseFloat(w),taxRate:parseFloat(E),taxName:C||g}),O(""),h(""),v(""),k(""),b(""),S(""),u(""),f("")}catch(e){O("Error adding product: "+e.message)}else O("All fields are mandatory.")}},"Add Data"),B&&n.a.createElement("p",{style:{color:"red"}},B)),n.a.createElement("div",{style:p.searchContainer},n.a.createElement("input",{type:"text",placeholder:"Search by Product Name",value:j,onChange:e=>N(e.target.value),style:p.searchInput}),n.a.createElement("button",{style:p.searchButton,onClick:()=>{const e=i.filter(e=>e.name.toLowerCase().includes(j.toLowerCase()));d(e)}},"Search")),n.a.createElement("table",{style:p.table},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product Name"),n.a.createElement("th",null,"Product Category"),n.a.createElement("th",null,"Tax Rate (%)"),n.a.createElement("th",null,"Tax Name"),n.a.createElement("th",null,"Product Price"),n.a.createElement("th",null,"Edit"),n.a.createElement("th",null,"Delete"))),n.a.createElement("tbody",null,i.map(e=>n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.category),n.a.createElement("td",null,e.taxRate||""),n.a.createElement("td",null,e.taxName||""),n.a.createElement("td",null,e.price),n.a.createElement("td",null,n.a.createElement("button",{onClick:()=>{const t=prompt("Enter updated product name:",e.name);var a,l;null!==t&&(a=e.id,l={name:t},m.collection("products").doc(a).set(l))}},"Edit")),n.a.createElement("td",null,n.a.createElement("button",{onClick:()=>{return t=e.id,void m.collection("products").doc(t).delete().then(()=>{});var t}},"Delete")))))))},b=a(18),g=a(3);var f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"App"},n.a.createElement(b.a,null,n.a.createElement(g.c,null,n.a.createElement(g.a,{exact:!0,path:"/",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(u,null))}),n.a.createElement(g.a,{exact:!0,path:"/addproducts",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(E,null))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[19,1,3]]]);
//# sourceMappingURL=main.fd8c68f3.chunk.js.map