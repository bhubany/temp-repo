(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{6880:function(e,a,t){Promise.resolve().then(t.bind(t,4282))},4282:function(e,a,t){"use strict";t.r(a);var s=t(9268),l=t(6006),r=t(5846),n=t.n(r);t(6394);var c=t(6008),i=t(6766),o=t(2),d=t.n(o);let{publicRuntimeConfig:u}=d()(),m=u.apiUrl;a.default=function(){let{isUserLoggedIn:e,setIsUserLoggedIn:a}=(0,l.useContext)(i.default),t=(0,c.useRouter)();e&&t.push("/");let[r,o]=(0,l.useState)(""),[d,u]=(0,l.useState)(""),[b,h]=(0,l.useState)(""),[x,p]=(0,l.useState)(""),[f,g]=(0,l.useState)(""),v=async e=>{e.preventDefault();try{let e=await fetch("".concat(m,"/api/user/adduser"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:r,lastName:d,email:b,password:x,contact:f})});console.log("res after api hit",e),200===e.status?(console.log("Registration successful!"),t.push("/login")):console.error("Registration failed!")}catch(e){console.error("Error:",e)}};return(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsxs)("div",{className:"bg-white p-9 rounded shadow-md min-h-full w-150",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4 text-black",children:"Registration"}),(0,s.jsx)("form",{className:"text-black",onSubmit:v,children:(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"firstName",className:"block mb-2 text-black",children:"Firstname:"}),(0,s.jsx)("input",{id:"firstname",type:"firstname",value:r,onChange:e=>o(e.target.value),className:"w-full border border-gray-300 px-3 py-2 rounded"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"lastName",className:"block mb-3 text-black",children:"Lastname:"}),(0,s.jsx)("input",{type:"lastname",value:d,onChange:e=>u(e.target.value),className:"w-full border border-gray-300 px-3 py-2 rounded"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"email",className:"block mb-1 text-black",children:"Email:"}),(0,s.jsx)("input",{type:"email",value:b,onChange:e=>h(e.target.value),className:"w-full border border-gray-300 px-3 py-2 rounded"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"password",className:"block mb-1 text-black",children:"Password:"}),(0,s.jsx)("input",{type:"password",value:x,onChange:e=>p(e.target.value),className:"w-full border border-gray-300 px-3 py-2 rounded"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"contact",className:"block mb-1 text-black",children:"Contact"}),(0,s.jsx)("input",{type:"contact",value:f,onChange:e=>g(e.target.value),className:"w-full border border-gray-300 px-3 py-2 rounded"})]}),(0,s.jsx)("div",{className:"mb-4 mt-2",children:(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600",children:"Register"})}),(0,s.jsx)("div",{className:"text-blue-500 underline hover:underline-offset-4",children:(0,s.jsx)(n(),{href:"/login",children:"Already have an account? Sign in"})})]})})]})})}},6766:function(e,a,t){"use strict";t.r(a),t.d(a,{UserProvider:function(){return n}});var s=t(9268),l=t(6006);let r=(0,l.createContext)(),n=e=>{let{children:a}=e,[t,n]=(0,l.useState)(!1);return(0,s.jsx)(r.Provider,{value:{isUserLoggedIn:t,setIsUserLoggedIn:n},children:a})};a.default=r}},function(e){e.O(0,[629,786,253,769,744],function(){return e(e.s=6880)}),_N_E=e.O()}]);