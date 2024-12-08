import CodeBlock from "../../components/PrismLoader";

export const CodeSample = () => {
	return (
	<CodeBlock language="typescript" code={`
	import ReactQuill from "react-quill";

	// Toolbar options avec un bouton personnalisé
	export const toolbarOptions = [
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image'],
		['custom-code'], // Bouton personnalisé
	];

	// Configuration des modules de Quill
	export const quillModules = (quillRef: React.RefObject<ReactQuill>) => ({
		toolbar: {
			container: toolbarOptions,
			handlers: {
				'custom-code': () => {
					const editor = quillRef.current?.getEditor();
					const range = editor?.getSelection();
					if (editor && range) {
						const selectedText = editor.getText(range.index, range.length);
						editor.insertEmbed(range.index, 'code-block', selectedText);
					}
				},
			},
		},
	});

	// Ajout d'un label au bouton personnalisé
	export const addCustomButtonLabel = () => {
		setTimeout(() => {
				document.querySelector('.ql-custom-code')?.setAttribute('innerHTML', 'code');
		}, 0);
	};
	`} />
	)
}


export const CodeSample2 = () => {
	return (
	<CodeBlock language="typescript" code={`
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
	`} />
	)
}