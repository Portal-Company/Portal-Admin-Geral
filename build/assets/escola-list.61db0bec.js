import{u as f,j as e,f as v,b as c,I as y,B as x,r as p,R as g,c as C,C as b}from"./index.0caedde8.js";import{I as k}from"./index.6534bf9a.js";import{M as o}from"./Modal.7f1a1444.js";import"./index.esm.9ad0c25f.js";import{T as w}from"./Table.66882177.js";const E=({item:l,show:m,handleClose:N,setIsModal:i})=>{var h,a,t,d,n,r;const{data:s}=f(`/file/${l==null?void 0:l.logo}`);console.log(l);function u(){i(!1)}return e(v,{children:c(o,{onHide:u,show:m,backdrop:"static",keyboard:!1,size:"lg",children:[e(o.Header,{closeButton:!0,children:e(o.Title,{children:"Dados da Escola"})}),e(o.Body,{children:c("div",{style:{display:"flex",gap:"0.5rem",flexDirection:"column"},children:[e("div",{children:e(y,{style:{cursor:"pointer"},src:s==null?void 0:s.link,loading:"lazy",alt:"perfil",width:100,onClick:()=>window.location.href=s==null?void 0:s.link})}),c("div",{style:{display:"flex",gap:"0.5rem"},children:[e("div",{className:"",children:e("p",{className:"mb-0",children:"Nome:"})}),e("div",{className:"col-sm-9",children:e("p",{className:"text-muted mb-0",children:l==null?void 0:l.nome})})]}),c("div",{style:{display:"flex",gap:"0.5rem"},children:[e("div",{className:"",children:e("p",{className:"mb-0",children:"Email:"})}),e("div",{className:"col-sm-9",children:e("p",{className:"text-muted mb-0",children:(h=l==null?void 0:l.Contato)==null?void 0:h.email})})]}),c("div",{style:{display:"flex",gap:"0.5rem"},children:[e("div",{className:"",children:e("p",{className:"mb-0",children:"Provincia:"})}),e("div",{className:"col-sm-9",children:e("p",{className:"text-muted mb-0",children:(t=(a=l==null?void 0:l.Localizacao)==null?void 0:a.Provincia)==null?void 0:t.nome})})]}),c("div",{style:{display:"flex",gap:"0.5rem"},children:[e("div",{className:"",children:e("p",{className:"mb-0",children:"Contacto:"})}),e("div",{className:"col-sm-9",children:e("p",{className:"text-muted mb-0",children:(d=l==null?void 0:l.Contato)==null?void 0:d.numeroTelefone})})]}),c("div",{style:{display:"flex",gap:"0.5rem"},children:[e("div",{className:"",children:e("p",{className:"mb-0",children:"Endere\xE7o:"})}),e("div",{className:"col-sm-9",children:e("p",{className:"text-muted mb-0",children:(n=l==null?void 0:l.Localizacao)==null?void 0:n.endereco1})})]}),c("div",{style:{display:"flex",gap:"0.5rem"},children:[e("p",{className:"mb-0",children:"Categoria: "}),c("p",{className:"text-muted mb-0",children:[" ",(r=l==null?void 0:l.Categoria)==null?void 0:r.nome]})]}),e("div",{className:""})]})}),e(o.Footer,{children:e(x,{variant:"secondary",onClick:N,children:"Close"})})]})})},I=p.exports.memo(()=>{const{data:l}=f("/school/list"),[m,N]=p.exports.useState({}),[i,s]=p.exports.useState(!1);console.log(l);function u(a){s(!0),N(a)}function h(){s(!1)}return c(p.exports.Fragment,{children:[i&&e(E,{item:m,show:i,handleClose:h,setIsModal:s}),e(g,{children:e(C,{lg:"12",children:e(b,{children:e(b.Body,{children:e("div",{className:"custom-table-effect table-responsive border rounded mt-3",children:c(w,{className:"mb-0",id:"datatable","data-toggle":"data-table",children:[e("thead",{children:c("tr",{className:"bg-white",children:[e("th",{scope:"col",children:"Nome"}),e("th",{scope:"col",children:"Contacto"}),e("th",{scope:"col",children:"Email"}),e("th",{scope:"col",children:"NIF"}),e("th",{scope:"col",children:"Ac\xE7\xE3o"})]})}),e("tbody",{children:l==null?void 0:l.map((a,t)=>{var d,n,r;return c("tr",{children:[e("td",{children:c("div",{className:"d-flex align-items-center",children:[e(k,{item:a}),c("div",{className:"media-support-info",children:[e("h6",{className:"mb-0",children:a==null?void 0:a.nome}),e("p",{className:"mb-0",children:(d=a==null?void 0:a.Categoria)==null?void 0:d.nome})]})]})}),e("td",{className:"text-dark",children:(n=a==null?void 0:a.Contato)==null?void 0:n.numeroTelefone}),e("td",{className:"text-dark",children:(r=a==null?void 0:a.Contato)==null?void 0:r.email}),e("td",{className:"text-dark",children:a==null?void 0:a.nif}),e("td",{children:e("div",{className:"d-flex justify-content-evenly",children:e(x,{className:"btn btn-primary ",to:"#",role:"button",onClick:()=>u(a),children:"Ver mais"})})})]},t)})})]})})})})})})]})});I.displayName="Borderedtable";export{I as default};