import{r as l,i as Le,l as O,k as he,j as e,V as Oe,s as Ae,av as De,aw as Me,q as oe,ax as je,ay as Be,b as r,az as de,f as Pe,au as ue,aA as We,aB as Fe,R as Xe,c as H,d as c}from"./index.0caedde8.js";function _e(o,f){var g=l.exports.useRef(!0);l.exports.useEffect(function(){if(g.current){g.current=!1;return}return o()},f)}const Ke=Le("carousel-caption"),me=l.exports.forwardRef(({as:o="div",bsPrefix:f,className:g,...A},x)=>{const D=O(g,he(f,"carousel-item"));return e(o,{ref:x,...A,className:D})});me.displayName="CarouselItem";const Ue=me,Ve=40,qe={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:e("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:e("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function ze(o){if(!o||!o.style||!o.parentNode||!o.parentNode.style)return!1;const f=getComputedStyle(o);return f.display!=="none"&&f.visibility!=="hidden"&&getComputedStyle(o.parentNode).display!=="none"}const q=l.exports.forwardRef((o,f)=>{const{as:g="div",bsPrefix:A,slide:x,fade:D,controls:fe,indicators:M,indicatorLabels:j,activeIndex:p,onSelect:v,onSlide:k,onSlid:S,interval:E,keyboard:z,onKeyDown:B,pause:I,onMouseOver:P,onMouseOut:W,wrap:R,touch:G,onTouchStart:F,onTouchMove:X,onTouchEnd:_,prevIcon:pe,prevLabel:J,nextIcon:ve,nextLabel:Q,variant:Y,className:xe,children:K,...be}=Oe(o,{activeIndex:"onSelect"}),h=he(A,"carousel"),w=Ae(),C=l.exports.useRef(null),[Z,ee]=l.exports.useState("next"),[Ne,$]=l.exports.useState(!1),[y,te]=l.exports.useState(!1),[a,ge]=l.exports.useState(p||0);l.exports.useEffect(()=>{!y&&p!==a&&(C.current?ee(C.current):ee((p||0)>a?"next":"prev"),x&&te(!0),ge(p||0))},[p,y,a,x]),l.exports.useEffect(()=>{C.current&&(C.current=null)});let b=0,re;De(K,(t,n)=>{++b,n===p&&(re=t.props.interval)});const le=Me(re),d=l.exports.useCallback(t=>{if(y)return;let n=a-1;if(n<0){if(!R)return;n=b-1}C.current="prev",v==null||v(n,t)},[y,a,v,R,b]),u=oe(t=>{if(y)return;let n=a+1;if(n>=b){if(!R)return;n=0}C.current="next",v==null||v(n,t)}),U=l.exports.useRef();l.exports.useImperativeHandle(f,()=>({element:U.current,prev:d,next:u}));const ne=oe(()=>{!document.hidden&&ze(U.current)&&(w?d():u())}),N=Z==="next"?"start":"end";_e(()=>{x||(k==null||k(a,N),S==null||S(a,N))},[a]);const Ie=`${h}-item-${Z}`,we=`${h}-item-${N}`,Ce=l.exports.useCallback(t=>{je(t),k==null||k(a,N)},[k,a,N]),ye=l.exports.useCallback(()=>{te(!1),S==null||S(a,N)},[S,a,N]),ke=l.exports.useCallback(t=>{if(z&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":t.preventDefault(),w?u(t):d(t);return;case"ArrowRight":t.preventDefault(),w?d(t):u(t);return}B==null||B(t)},[z,B,d,u,w]),Se=l.exports.useCallback(t=>{I==="hover"&&$(!0),P==null||P(t)},[I,P]),Ee=l.exports.useCallback(t=>{$(!1),W==null||W(t)},[W]),se=l.exports.useRef(0),L=l.exports.useRef(0),ae=Be(),Re=l.exports.useCallback(t=>{se.current=t.touches[0].clientX,L.current=0,I==="hover"&&$(!0),F==null||F(t)},[I,F]),Te=l.exports.useCallback(t=>{t.touches&&t.touches.length>1?L.current=0:L.current=t.touches[0].clientX-se.current,X==null||X(t)},[X]),He=l.exports.useCallback(t=>{if(G){const n=L.current;Math.abs(n)>Ve&&(n>0?d(t):u(t))}I==="hover"&&ae.set(()=>{$(!1)},E||void 0),_==null||_(t)},[G,I,d,u,ae,E,_]),ce=E!=null&&!Ne&&!y,V=l.exports.useRef();l.exports.useEffect(()=>{var t,n;if(!ce)return;const m=w?d:u;return V.current=window.setInterval(document.visibilityState?ne:m,(t=(n=le.current)!=null?n:E)!=null?t:void 0),()=>{V.current!==null&&clearInterval(V.current)}},[ce,d,u,le,E,ne,w]);const ie=l.exports.useMemo(()=>M&&Array.from({length:b},(t,n)=>m=>{v==null||v(n,m)}),[M,b,v]);return r(g,{ref:U,...be,onKeyDown:ke,onMouseOver:Se,onMouseOut:Ee,onTouchStart:Re,onTouchMove:Te,onTouchEnd:He,className:O(xe,h,x&&"slide",D&&`${h}-fade`,Y&&`${h}-${Y}`),children:[M&&e("div",{className:`${h}-indicators`,children:de(K,(t,n)=>e("button",{type:"button","data-bs-target":"","aria-label":j!=null&&j.length?j[n]:`Slide ${n+1}`,className:n===a?"active":void 0,onClick:ie?ie[n]:void 0,"aria-current":n===a},n))}),e("div",{className:`${h}-inner`,children:de(K,(t,n)=>{const m=n===a;return x?e(We,{in:m,onEnter:m?Ce:void 0,onEntered:m?ye:void 0,addEndListener:Fe,children:(T,$e)=>l.exports.cloneElement(t,{...$e,className:O(t.props.className,m&&T!=="entered"&&Ie,(T==="entered"||T==="exiting")&&"active",(T==="entering"||T==="exiting")&&we)})}):l.exports.cloneElement(t,{className:O(t.props.className,m&&"active")})})}),fe&&r(Pe,{children:[(R||p!==0)&&r(ue,{className:`${h}-control-prev`,onClick:d,children:[pe,J&&e("span",{className:"visually-hidden",children:J})]}),(R||p!==b-1)&&r(ue,{className:`${h}-control-next`,onClick:u,children:[ve,Q&&e("span",{className:"visually-hidden",children:Q})]})]})]})});q.displayName="Carousel";q.defaultProps=qe;const s=Object.assign(q,{Caption:Ke,Item:Ue}),i="/assets/03-page.22d8687a.jpg",Ge=()=>e(l.exports.Fragment,{children:r(Xe,{children:[e(H,{sm:"12",lg:"6",children:r(c,{children:[e(c.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e(c.Title,{as:"h4",children:"Slides only"})})}),r(c.Body,{children:[r("p",{children:["Here\u2019s a carousel with slides only. Note the presence of the"," ",e("code",{children:".d-block"})," and ",e("code",{children:".img-fluid"})," on carousel images to prevent browser default image alignment."]}),r(s,{id:"carouselExampleSlidesOnly",indicators:!1,nextIcon:"",prevIcon:"","data-ride":"carousel",children:[e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})}),e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})}),e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})})]})]})]})}),e(H,{sm:"12",lg:"6",children:r(c,{children:[e(c.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Slides With Controls"})})}),r(c.Body,{children:[r("p",{children:["Here\u2019s a carousel with slides only. Note the presence of the"," ",e("code",{children:".d-block"})," and ",e("code",{children:".img-fluid"})," on carousel images to prevent browser default image alignment."]}),r(s,{id:"carouselExampleControls",indicators:!1,nextIcon:"",prevIcon:"","data-ride":"carousel",children:[e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})}),e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})}),e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})})]})]})]})}),e(H,{sm:"12",lg:"6",children:r(c,{children:[e(c.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Slides With Indicators"})})}),r(c.Body,{children:[r("p",{children:["Here\u2019s a carousel with slides only. Note the presence of the"," ",e("code",{children:".d-block"})," and ",e("code",{children:".img-fluid"})," on carousel images to prevent browser default image alignment."]}),r(s,{id:"carouselExampleSlidesOnly",indicators:!0,nextIcon:"",prevIcon:"","data-ride":"carousel",children:[e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})}),e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})}),e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})})]})]})]})}),e(H,{sm:"12",lg:"6",children:r(c,{children:[e(c.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Slides With Captions"})})}),e(c.Body,{children:r("div",{className:"bd-example",children:[r("p",{children:["Here\u2019s a carousel with slides only. Note the presence of the"," ",e("code",{children:".d-block"})," and ",e("code",{children:".img-fluid"})," on carousel images to prevent browser default image alignment."]}),r(s,{id:"carouselExampleSlidesOnly",indicators:!0,nextIcon:"",prevIcon:"","data-ride":"carousel",children:[r(s.Item,{children:[e("img",{src:i,className:"d-block w-100",alt:"#"}),r(s.Caption,{children:[e("h5",{children:"First slide label"}),e("p",{children:"Some representative placeholder content for the first slide."})]})]}),r(s.Item,{children:[e("img",{src:i,className:"d-block w-100",alt:"#"}),r(s.Caption,{children:[e("h5",{children:"Second slide label"}),e("p",{children:"Some representative placeholder content for the Second slide."})]})]}),r(s.Item,{children:[e("img",{src:i,className:"d-block w-100",alt:"#"}),r(s.Caption,{children:[e("h5",{children:"Third slide label"}),e("p",{children:"Some representative placeholder content for the Third slide."})]})]})]})]})})]})}),e(H,{sm:"12",lg:"6",children:r(c,{children:[e(c.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Slides With Crossfade"})})}),r(c.Body,{children:[r("p",{children:["Here\u2019s a carousel with slides only. Note the presence of the"," ",e("code",{children:".d-block"})," and ",e("code",{children:".img-fluid"})," on carousel images to prevent browser default image alignment."]}),r(s,{fade:!0,id:"carouselExampleFade",indicators:!1,nextIcon:"",prevIcon:"","data-ride":"carousel",children:[e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})}),e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})}),e(s.Item,{children:e("img",{src:i,className:"d-block w-100",alt:"#"})})]})]})]})})]})});Ge.displayName="Carousels";export{Ge as default};