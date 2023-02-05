"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[90],{1090:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return V},default:function(){return Y}});var r,i,o,a,s,d,p,l,x,c,u,b,h,m,g,f=t(9434),w=t(6916),Z=function(n){return n.contacts.items},j=function(n){return n.filter},v=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},k=(0,w.P1)([Z,j],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),P=t(3634),C=t(168),z=t(6444),A=z.ZP.form(r||(r=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin-top: 50px;\n  margin: 50px auto 0;\n  max-width: 400px;\n  padding: 60px 50px;\n  background-color: #565678;\n  border-radius: 20px;\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(\n      to right bottom,\n      rgba(43, 44, 78, 0.5),\n      rgba(104, 22, 96, 0.5)\n    );\n    border-radius: 20px;\n  }\n"]))),L=z.ZP.div(i||(i=(0,C.Z)(["\n  position: relative;\n  justify-content: center;\n  text-align: center;\n"]))),_=z.ZP.label(o||(o=(0,C.Z)(["\n  display: block;\n  padding-left: 15px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n"]))),F=z.ZP.p(a||(a=(0,C.Z)(["\n  font-size: 22px;\n  margin-right: 14px;\n  font-weight: 500;\n"]))),I=z.ZP.input(s||(s=(0,C.Z)(["\n  display: block;\n  width: 100%;\n  margin: 10px 0 15px;\n  padding: 0 15px;\n  border-width: 0;\n  border-radius: 20px;\n  color: white;\n  background: rgba(255, 255, 255, 0.2);\n  line-height: 40px;\n  :focus {\n    border: none;\n    outline: 2px solid #b758b7;\n  }\n"]))),N=z.ZP.button(d||(d=(0,C.Z)(["\n  display: inline-block;\n  margin: 0 auto;\n  padding: 15px 30px;\n  border: #565678;\n  border-radius: 10px;\n  box-shadow: 0 0 40px 40px #565678 inset, 0 0 0 0 #565678;\n  font-weight: bold;\n  color: white;\n  transition: 0.15s ease-in-out;\n  text-decoration: none;\n  letter-spacing: 2px;\n  :hover {\n    color: #565678;\n    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;\n  }\n  :focus {\n    color: #565678;\n    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;\n  }\n  &.active {\n    color: #565678;\n    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;\n  }\n"]))),q=t(184),D=function(){var n=(0,f.I0)();return(0,q.jsx)(A,{onSubmit:function(e){e.preventDefault();var t=e.target,r=e.target.elements.name.value,i=e.target.elements.number.value;n((0,P.uK)({name:r,number:i})),t.reset()},children:(0,q.jsxs)(L,{children:[(0,q.jsxs)(_,{children:[(0,q.jsx)(F,{children:"Name"}),(0,q.jsx)(I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,q.jsxs)(_,{children:[(0,q.jsx)(F,{children:"Number"}),(0,q.jsx)(I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,q.jsx)(N,{type:"submit",children:"Add contact"})]})})},K=t(2791),X=z.ZP.div(p||(p=(0,C.Z)(["\n    max-width: 500px;\n    margin: 50px auto 0;\n    background-color: #565678;\n    border-radius: 20px;\n    \n"]))),B=z.ZP.ul(l||(l=(0,C.Z)(["\n  display: grid;\n  margin: 0;\n  list-style-type: none;\n  padding: 0;\n  background: linear-gradient(\n    to right bottom,\n    rgba(43, 44, 78, 0.5),\n    rgba(104, 22, 96, 0.5)\n  );\n  border-radius: 20px;\n"]))),E=z.ZP.li(x||(x=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  font-weight: 500;\n  margin: 10px 5px;\n  border: 1px solid rgb(167 163 163 / 60%);\n  border-radius: 10px;\n  padding: 7px;\n"]))),G=z.ZP.span(c||(c=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255,255,255,0.6);\n"]))),J=z.ZP.button(u||(u=(0,C.Z)(["\n   display: inline-block;\n   text-decoration: none;\n   justify-content: center;\n   align-items: center;\n   height: 27px;\n   outline: none;\n   padding: 0px 15px;\n   font-weight: bold;\n   color: white;\n   border: #565678;\n   border-radius: 10px;\n   box-shadow: 0 0 40px 40px #565678 inset, 0 0 0 0 #565678;\n   letter-spacing: 2px;\n   transition: 0.15s ease-in-out;\n   :hover {\n     color: #565678;\n     box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;\n   }\n  :focus {\n    color: #565678;\n    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;\n  }\n  &.active {\n    color: #565678;\n    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;\n  }\n"]))),M=function(){var n=(0,f.v9)(Z),e=n.isLoading,t=n.error,r=(0,f.I0)(),i=(0,f.v9)(k);return(0,K.useEffect)((function(){r((0,P.yF)())}),[r]),(0,q.jsx)(X,{children:(0,q.jsxs)(B,{children:[e&&(0,q.jsx)("p",{children:"Loading"}),t&&(0,q.jsx)("p",{children:t}),i.map((function(n){var e=n.id,t=n.name,i=n.number;return(0,q.jsxs)(E,{children:[(0,q.jsx)(G,{children:t}),(0,q.jsx)(G,{children:i}),(0,q.jsx)(J,{type:"button",onClick:function(){!function(n){r((0,P.GK)(n))}(e)},children:"Delete"})]},e)}))]})})},S=t(7959),T=z.ZP.div(b||(b=(0,C.Z)(["\n  display: block;\n  justify-content: center;\n  margin-top: 50px;\n  text-align: center;\n"]))),W=z.ZP.label(h||(h=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 15px;\n  color: #565678;\n  font-size: 24px;\n  text-transform: uppercase;\n"]))),$=z.ZP.input(m||(m=(0,C.Z)(["\n  display: block;\n  width: 50%;\n  margin: 10px 0 15px;\n  padding: 0 15px;\n  border-radius: 20px;\n  border: 3px solid #565678;\n  outline: none;\n  line-height: 40px;\n  :focus {\n    border: none;\n    outline: 3px solid #b758b7;\n  }\n"]))),H=function(){var n=(0,f.I0)(),e=(0,f.v9)(j);return(0,q.jsx)(T,{children:(0,q.jsxs)(W,{children:["Find contacts by name",(0,q.jsx)($,{type:"text",name:"filter",value:e,onChange:function(e){n((0,S.W1)(e.currentTarget.value))}})]})})},O=t(8402),Q=z.ZP.div(g||(g=(0,C.Z)(["\n  width: 80px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),R=function(){return(0,q.jsx)(Q,{children:(0,q.jsx)(O.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperClass:"progress-bar-wrapper",borderColor:"#b758b7",barColor:"#565678"})})},U=t(7398),V=function(){var n=(0,f.v9)(v),e=(0,f.v9)(y);return(0,q.jsxs)("div",{children:[(0,q.jsx)(U.x,{children:"Phonebook"}),(0,q.jsx)(D,{}),(0,q.jsx)(U.x,{children:"Contacts"}),(0,q.jsx)(H,{}),n&&!e&&(0,q.jsx)(R,{}),(0,q.jsx)(M,{})]})},Y=V},7398:function(n,e,t){t.d(e,{x:function(){return o}});var r,i=t(168),o=t(6444).ZP.h1(r||(r=(0,i.Z)(["\n  position: relative;\n  margin-top: 30px;\n  padding-bottom: 0.5rem;\n  text-align: center;\n  color: #565678;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  ::before {\n    content: '';\n    position: absolute;\n\n    @media (max-width: 480px) {\n      width: 40%;\n    };\n\n    @media only screen and (min-width: 480px) and (max-width: 768px) {\n      width: 25%;\n    };\n\n    @media only screen and (min-width: 769px) {\n      width: 30%;\n    };\n\n    bottom: 0.25rem;\n    left: 50%;\n    border-bottom: 2px solid #565678;\n    transform: translateX(-50%);\n  }\n  ::after {\n    content: '';\n    position: absolute;\n\n    @media (max-width: 480px) {\n      width: 25%;\n    };\n\n    @media only screen and (min-width: 480px) and (max-width: 768px) {\n      width: 10%;\n    };\n\n    @media (min-width: 769px) {\n      width: 15%;\n    };\n\n    bottom: 0;\n    left: 50%;\n    border-bottom: 2px solid #565678;\n    transform: translateX(-50%);\n  }\n"])))}}]);
//# sourceMappingURL=90.bc370b0b.chunk.js.map