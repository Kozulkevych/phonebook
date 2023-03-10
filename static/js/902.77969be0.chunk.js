"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[902],{902:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var a,i,r,s,o,d,p,l,x,c,m=t(9439),u=t(9434),h=t(2791),g=t(7689),f=t(168),w=t(6444),b=w.ZP.main(a||(a=(0,f.Z)(["\n  padding: 0 16px 32px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (min-width: 320px) {\n    padding: 0 16px 32px 16px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 0 42px 64px 42px;\n  }\n"]))),Z=w.ZP.h2(i||(i=(0,f.Z)(["\n  align-self: center;\n  text-transform: uppercase;\n\n  @media screen and (min-width: 1280px) {\n    margin-right: 45%;\n  }\n"]))),j=w.ZP.div(r||(r=(0,f.Z)(["\n  margin-bottom: 16px;\n  width: 100%;\n  align-self: flex-start;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 36px;\n  }\n"]))),y=w.ZP.form(s||(s=(0,f.Z)(["\n  width: 75%;\n  padding: 18px 16px;\n  border-radius: 32px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    padding: 28px 36px;\n  }\n"]))),k=w.ZP.div(o||(o=(0,f.Z)(["\n  margin-top: 20px;\n  margin-bottom: 24px;\n  gap: 8px;\n  align-self: flex-end;\n  flex-direction: column;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]))),v=w.ZP.p(d||(d=(0,f.Z)(["\n  display: none;\n\n  @media screen and (min-width: 1280px) {\n    z-index: 1000;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(100%, 75%);\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px 15px;\n    min-width: 110px;\n    width: fit-content;\n    min-height: 44px;\n    text-align: center;\n    font-size: 14px;\n    line-height: 1.33;\n    color: black;\n    border: 1px solid yellow;\n    border-radius: 10px;\n    box-shadow: 0 0 10em 1em rgba(255, 139, 72, 0.6);\n  }\n"]))),z=w.ZP.div(p||(p=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 24px;\n  }\n"]))),P=w.ZP.div(l||(l=(0,f.Z)(["\n  position: relative;\n\n  &:hover > p,\n  &:focus > p {\n    opacity: 1;\n  }\n"]))),_=w.ZP.input(x||(x=(0,f.Z)(["\n  padding: 6px;\n  font-size: 14px;\n  border: none;\n  border-bottom: 1px solid black;\n  color: black;\n  background-color: transparent;\n\n  &:hover {\n    border-bottom: 1px solid yellow;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-left: 20px;\n    padding: 6px 12px;\n  }\n"]))),C=w.ZP.label(c||(c=(0,f.Z)(["\n  text-transform: uppercase;\n  font-size: 16px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    font-weight: bold;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n  }\n"]))),A=t(5262),E=t(3337),L=t(5047),S=t(3329),q=function(){var n=(0,g.s0)(),e=(0,u.I0)(),t=(0,h.useState)(""),a=(0,m.Z)(t,2),i=a[0],r=a[1],s=(0,h.useState)(""),o=(0,m.Z)(s,2),d=o[0],p=o[1],l=(0,h.useState)(""),x=(0,m.Z)(l,2),c=x[0],f=x[1],w=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"email":p(n.target.value);break;case"password":f(n.target.value);break;default:return}},q=function(){r(""),p(""),f("")};return(0,S.jsxs)(b,{children:[(0,S.jsxs)(j,{children:[(0,S.jsx)(E.u,{onClick:function(){return n(-1)},text:"Go back",status:"goBack"}),(0,S.jsx)(Z,{children:"Let's register"})]}),(0,S.jsxs)(y,{onSubmit:function(n){n.preventDefault(),e((0,L.a$)({name:i,email:d,password:c})),q()},children:[(0,S.jsxs)(k,{children:[(0,S.jsx)(_,{type:"text",id:"auth-name",name:"name",value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,placeholder:"Enter your name",onChange:w}),(0,S.jsx)(C,{htmlFor:"auth-name",children:"Name"}),(0,S.jsx)(_,{type:"email",id:"auth-email",name:"email",value:d,required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",placeholder:"Enter your email",onChange:w}),(0,S.jsx)(C,{htmlFor:"auth-email",children:"Email"}),(0,S.jsx)(_,{type:"password",id:"auth-password",name:"password",value:c,required:!0,minLength:"6",placeholder:"Enter your password",onChange:w}),(0,S.jsx)(C,{htmlFor:"auth-password",children:"Password"})]}),(0,S.jsxs)(z,{children:[(0,S.jsxs)(P,{children:[(0,S.jsx)(E.u,{type:"submit",status:"register",text:"Create account"}),(0,S.jsx)(v,{children:"Newcomer? Create an account!"})]}),(0,S.jsxs)(P,{children:[(0,S.jsx)(A.O,{text:"Log in",status:"login",to:"/login"}),(0,S.jsx)(v,{children:"Already registered? Log in!"})]})]})]})]})}}}]);
//# sourceMappingURL=902.77969be0.chunk.js.map