import{r as c,j as e,u as a,C as o,R as t,a as s,A as x}from"./index-DlmpsSgK.js";import{D as l}from"./Divider-DI4DGLhG.js";import{P as d}from"./prism-typescript-P1QYsgoP.js";const i=({language:r,code:n})=>(c.useEffect(()=>{d.highlightAll()},[n]),e.jsx("pre",{children:e.jsx("code",{className:`language-${r}`,children:n})})),h=()=>e.jsx(i,{language:"typescript",code:`
import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

interface EditorProps {
    value: string;
    handleChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, handleChange }) => {

    return (
        <div className="text-editor">
            <textarea
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Write your article in Markdown..."
                style={{ width: "100%", height: "300px", fontFamily: "monospace" }}
            />
            <h3>Preview:</h3>
            <MarkdownRenderer content={value} />
        </div>
    );
};

export default Editor;
	`}),j=()=>e.jsx(i,{language:"typescript",code:`
	export const createBlogPost = async (req: Request<{}, {}, BlogPostAttributes>, res: Response) => {
		try {
				const { title, thumbnail, content, author, publishedAt } = req.body;
				const blog = await BlogPost.create({ title, thumbnail, content, author, publishedAt });
				res.status(201).json(blog);
		} catch (error) {
				res.status(500).json({ message: 'Unable to create blog post' });
				console.error(error);
		}
	};
	`});function p(){const{t:r}=a("projects");return e.jsxs(o,{id:"evo11",className:"portfolioblogging-container",children:[e.jsx("div",{className:"text-center",style:{paddingBottom:"30px"},children:e.jsx("h2",{children:r("b.1")})}),e.jsxs("div",{className:"text-center",style:{paddingBottom:"30px"},children:[e.jsx("h5",{children:r("b.2")}),e.jsx("h5",{style:{fontWeight:"bold"},children:r("b.3")})]}),e.jsx("div",{className:"justify-content-center",children:e.jsx(t,{className:"text-center",children:e.jsx(s,{children:e.jsx("img",{src:"https://www.rinkakuworks.com/public/images/portfolio-blogging/blogging-platform.webp",className:"shrink",alt:"blogging platform app",loading:"lazy"})})})}),e.jsxs(t,{xs:1,md:1,lg:1,className:"align-items-center text-left",children:[e.jsx(s,{children:r("b.4")}),e.jsx(s,{}),e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.5")})})}),e.jsx(s,{children:r("b.6")}),e.jsx(s,{children:r("b.7")}),e.jsx(s,{children:r("b.8")}),e.jsx(s,{children:r("b.9")}),e.jsx(s,{children:r("b.10")}),e.jsx(s,{}),e.jsx(l,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"align-items-center text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.11")})})}),e.jsx(s,{children:r("b.12")}),e.jsx(s,{children:r("b.13")}),e.jsx(s,{children:r("b.14")}),e.jsx(s,{children:r("b.15")}),e.jsx(s,{}),e.jsx(l,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"align-items-center text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.16")})})}),e.jsx(s,{children:r("b.17")}),e.jsx(s,{children:r("b.18")}),e.jsx(s,{children:r("b.19")}),e.jsx(s,{}),e.jsx(l,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"align-items-center text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.20")})})}),e.jsx(s,{children:r("b.21")}),e.jsx(s,{className:"text-center",children:e.jsx("img",{src:"https://www.rinkakuworks.com/public/images/portfolio-blogging/diagramme-architecture.webp",alt:"diagramme d'architecture blogging platform",loading:"lazy"})}),e.jsx(s,{}),e.jsx(l,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.22")})})}),e.jsx(s,{children:e.jsxs("ul",{children:[e.jsx("li",{children:r("b.23")}),e.jsx("li",{children:r("b.24")}),e.jsx("li",{children:r("b.25")}),e.jsx("li",{children:r("b.26")})]})}),e.jsx(s,{}),e.jsx(l,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.27")})})}),e.jsx(s,{children:e.jsx("img",{src:"https://www.rinkakuworks.com/public/images/portfolio-blogging/screenshot1.webp",alt:"screencap main platform page",loading:"lazy"})}),e.jsx(s,{children:e.jsx("img",{src:"https://www.rinkakuworks.com/public/images/portfolio-blogging/screenshot2.webp",alt:"screencap post edition",loading:"lazy"})}),e.jsx(s,{}),e.jsx(l,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.28")})})}),e.jsx(s,{children:r("b.29")}),e.jsx(s,{children:e.jsx(h,{})}),e.jsx(s,{}),e.jsx(s,{children:r("b.30")}),e.jsx(s,{children:e.jsx(j,{})}),e.jsx(s,{}),e.jsx(l,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.31")})})}),e.jsx(s,{children:r("b.32")}),e.jsx(s,{children:r("b.33")}),e.jsx(s,{}),e.jsx(l,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:r("b.34")})})}),e.jsx(s,{children:r("b.35")})]}),e.jsx(t,{className:"justify-content-center mt-4",children:e.jsx(s,{md:4,className:"text-center",children:e.jsx(x,{href:"/contact",buttonText:"Contact Me"})})})]})}export{p as default};
