import{r as c,H as u,J as g,a as p,Q as o,j as e,b as r,R as l,c as i,L as b,O as f,C as d,F as t,B as y,I as N}from"./index.0caedde8.js";import{a as x}from"./ben-white-83tkHLPgg2Q-unsplash.9d7fce87.js";import{u as v,c as w,a as F}from"./index.esm.9ad0c25f.js";const j=c.exports.memo(()=>{u(g);const s=v({initialValues:{email:""},validationSchema:w({email:F().trim().required("O email \xE9 obrigat\xF3rio")}),onSubmit:async h=>{var n,m;try{const a=await(await p.post("/auth/forgot_password",h)).data;a&&(s.resetForm(),o.success(a==null?void 0:a.message))}catch(a){o((m=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:m.message)}}});return e(c.exports.Fragment,{children:e("section",{className:"login-content",children:r(l,{className:"m-0 align-items-center bg-white vh-100",children:[r(i,{md:"12",lg:"6",className:"align-self-center",children:[e(b,{to:"/",className:"navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary",children:e("div",{className:"logo-normal",children:e("img",{style:{width:"50%"},src:f})})}),e(l,{className:"justify-content-center pt-5",children:e(i,{lg:"8",children:e(d,{className:"d-flex justify-content-center mb-0",children:r(d.Body,{children:[e("h2",{className:"mb-2",children:"Recuperar senha"}),e("p",{children:"Digite seu endere\xE7o de e-mail e enviaremos um e-mail com instru\xE7\xF5es para redefinir sua senha."}),r("form",{onSubmit:s.handleSubmit,children:[e(l,{children:e(i,{lg:"12",children:r(t.Group,{className:"floating-label form-group",children:[e(t.Label,{htmlFor:"email",className:"",children:"Email"}),e(t.Control,{type:"email",className:"",id:"email",value:s.values.email,onChange:s.handleChange,"aria-describedby":"email",placeholder:" "}),s.touched.email&&s.errors.email?e("span",{className:"text-danger",children:s.errors.email}):null]})})}),e(y,{type:"submit",variant:"btn btn-primary",children:"Resetar"})]})]})})})})]}),e(i,{md:"6",className:"d-md-block d-none bg-primary p-0 mt-n1  overflow-hidden",style:{height:"100vh"},children:e(N,{src:x,className:"Image-fluid gradient-main",alt:"images"})})]})})})});j.displayName="Recoverpw";export{j as default};