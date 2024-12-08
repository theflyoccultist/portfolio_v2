import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-typescript";

interface CodeBlockProps {
    language: string;
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
};

export default CodeBlock;