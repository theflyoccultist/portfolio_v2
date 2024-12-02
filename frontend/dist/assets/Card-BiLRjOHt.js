import{r as o,u as c,j as t,c as l,b as I,d as f}from"./index-BQ_WERNx.js";const i=o.forwardRef(({className:d,bsPrefix:a,as:r="div",...e},s)=>(a=c(a,"card-body"),t.jsx(r,{ref:s,className:l(d,a),...e})));i.displayName="CardBody";const C=o.forwardRef(({className:d,bsPrefix:a,as:r="div",...e},s)=>(a=c(a,"card-footer"),t.jsx(r,{ref:s,className:l(d,a),...e})));C.displayName="CardFooter";const N=o.forwardRef(({bsPrefix:d,className:a,as:r="div",...e},s)=>{const n=c(d,"card-header"),m=o.useMemo(()=>({cardHeaderBsPrefix:n}),[n]);return t.jsx(I.Provider,{value:m,children:t.jsx(r,{ref:s,...e,className:l(a,n)})})});N.displayName="CardHeader";const u=o.forwardRef(({bsPrefix:d,className:a,variant:r,as:e="img",...s},n)=>{const m=c(d,"card-img");return t.jsx(e,{ref:n,className:l(r?`${m}-${r}`:m,a),...s})});u.displayName="CardImg";const y=o.forwardRef(({className:d,bsPrefix:a,as:r="div",...e},s)=>(a=c(a,"card-img-overlay"),t.jsx(r,{ref:s,className:l(d,a),...e})));y.displayName="CardImgOverlay";const p=o.forwardRef(({className:d,bsPrefix:a,as:r="a",...e},s)=>(a=c(a,"card-link"),t.jsx(r,{ref:s,className:l(d,a),...e})));p.displayName="CardLink";const T=f("h6"),j=o.forwardRef(({className:d,bsPrefix:a,as:r=T,...e},s)=>(a=c(a,"card-subtitle"),t.jsx(r,{ref:s,className:l(d,a),...e})));j.displayName="CardSubtitle";const v=o.forwardRef(({className:d,bsPrefix:a,as:r="p",...e},s)=>(a=c(a,"card-text"),t.jsx(r,{ref:s,className:l(d,a),...e})));v.displayName="CardText";const $=f("h5"),x=o.forwardRef(({className:d,bsPrefix:a,as:r=$,...e},s)=>(a=c(a,"card-title"),t.jsx(r,{ref:s,className:l(d,a),...e})));x.displayName="CardTitle";const R=o.forwardRef(({bsPrefix:d,className:a,bg:r,text:e,border:s,body:n=!1,children:m,as:g="div",...w},h)=>{const H=c(d,"card");return t.jsx(g,{ref:h,...w,className:l(a,H,r&&`bg-${r}`,e&&`text-${e}`,s&&`border-${s}`),children:n?t.jsx(i,{children:m}):m})});R.displayName="Card";const S=Object.assign(R,{Img:u,Title:x,Subtitle:j,Body:i,Link:p,Text:v,Header:N,Footer:C,ImgOverlay:y});export{S as C};