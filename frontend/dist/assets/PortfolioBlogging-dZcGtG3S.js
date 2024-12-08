import{r as o,j as e,C as a,R as t,a as s,A as c}from"./index-BzEthcLC.js";import{D as r}from"./Divider-DVC13A06.js";import{P as d}from"./prism-typescript-B-jSLhrX.js";const i=({language:l,code:n})=>(o.useEffect(()=>{d.highlightAll()},[n]),e.jsx("pre",{children:e.jsx("code",{className:`language-${l}`,children:n})})),u=()=>e.jsx(i,{language:"typescript",code:`
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
	`}),x=()=>e.jsx(i,{language:"typescript",code:`
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
	`});function g(){return e.jsxs(a,{id:"evo11",className:"portfolioblogging-container",children:[e.jsx("div",{className:"text-center",style:{paddingBottom:"30px"},children:e.jsx("h2",{children:"Plateforme de Blogging"})}),e.jsxs("div",{className:"text-center",style:{paddingBottom:"30px"},children:[e.jsx("h5",{children:"Application web Full stack"}),e.jsx("h5",{style:{fontWeight:"bold"},children:"Projet autonome"})]}),e.jsx("div",{className:"justify-content-center",children:e.jsx(t,{className:"text-center",children:e.jsx(s,{children:e.jsx("img",{src:"https://www.rinkakuworks.com/public/images/portfolio-blogging/blogging-platform.webp",className:"shrink",alt:"blogging platform app",loading:"lazy"})})})}),e.jsxs(t,{xs:1,md:1,lg:1,className:"align-items-center text-left",children:[e.jsx(s,{children:"Cette plateforme de blogging a été conçue pour documenter mon parcours en codage, partager mes apprentissages et mes réussites, et enrichir mon expérience en développement web et en déploiement."}),e.jsx(s,{}),e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Fonctionnalités"})})}),e.jsxs(s,{children:[e.jsx("strong",{children:"Authentification utilisateur: "}),"La plateforme permet de créer un compte utilisateur et de se connecter de manière sécurisée grâce à un système de rafraîchissement des tokens."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Gestion des posts (CRUD): "}),"Les utilisateurs peuvent créer un nouvel article, le visualiser sur leur portfolio, l’éditer ultérieurement ou le supprimer. Toutes les modifications sont visibles instantanément."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Éditeur de texte personnalisé (React Quill): "}),"Pour la création et l’édition des articles, j’ai utilisé React Quill, que j’ai personnalisé en ajoutant des fonctionnalités spécifiques, comme l’intégration de blocs de code."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Responsive design: "}),"La plateforme s’adapte automatiquement pour offrir une expérience optimale, que ce soit sur mobile ou sur ordinateur."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Déploiement robuste: "}),"J’ai utilisé une configuration .htaccess personnalisée pour le déploiement sur un serveur Apache, garantissant un routage fluide et des mises à jour simples."]}),e.jsx(s,{}),e.jsx(r,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"align-items-center text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Fonctionnalités Prévues"})})}),e.jsxs(s,{children:[e.jsx("strong",{children:"Tags et catégories: "}),"Pour organiser les articles et permettre aux visiteurs de filtrer les contenus selon leurs intérêts."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Affichage public/privé: "}),"Une fonctionnalité pour sauvegarder un brouillon et le publier ultérieurement."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Analytics: "}),"Suivre le nombre de visiteurs par article ou catégorie, et analyser les performances globales du blog."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Commentaires: "}),"Offrir aux visiteurs la possibilité de laisser des retours ou d’interagir avec l’auteur."]}),e.jsx(s,{}),e.jsx(r,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"align-items-center text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Défis rencontrés"})})}),e.jsxs(s,{children:[e.jsx("strong",{children:"Configuration du fichier .htaccess: "}),"Le routage du serveur a été particulièrement complexe. Par exemple, j’ai rencontré des écrans blancs bien que les fichiers JavaScript et HTML aient été correctement trouvés. J’ai également dû résoudre des problèmes de types MIME et configurer correctement les adresses des requêtes backend. Pour en savoir plus, vous pouvez consulter cet article détaillé."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Politiques CORS: "}),"J’ai implémenté une politique CORS stricte dans le backend pour sécuriser les appels API depuis le frontend. J’ai également configuré des exceptions pour autoriser les requêtes GET depuis mon portfolio."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Personnalisation de React Quill: "}),"J’ai adapté l’éditeur pour ajouter des fonctionnalités, comme l’intégration de blocs de code, afin de répondre à mes besoins spécifiques."]}),e.jsx(s,{}),e.jsx(r,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"align-items-center text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Diagramme d'Architecture"})})}),e.jsx(s,{children:"Un diagramme illustrant la relation entre les différentes composants de la plateforme."}),e.jsx(s,{className:"text-center",children:e.jsx("img",{src:"https://www.rinkakuworks.com/public/images/portfolio-blogging/diagramme-architecture.webp",alt:"diagramme d'architecture blogging platform",loading:"lazy"})}),e.jsx(s,{}),e.jsx(r,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Processus de déploiement"})})}),e.jsx(s,{children:e.jsxs("ul",{children:[e.jsx("li",{children:"Création d’un projet frontend avec React, TypeScript et Vite."}),e.jsx("li",{children:"Mise en place d’une API backend avec Node.js et Express.js."}),e.jsx("li",{children:"Configuration d’un fichier .htaccess pour gérer le routage et les proxys."}),e.jsx("li",{children:"Tests approfondis sur le serveur Apache (connexion, création d’articles, déconnexion, etc.)."})]})}),e.jsx(s,{}),e.jsx(r,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Captures d'écran"})})}),e.jsx(s,{children:e.jsx("img",{src:"https://www.rinkakuworks.com/public/images/portfolio-blogging/screenshot1.webp",alt:"screencap main platform page",loading:"lazy"})}),e.jsx(s,{children:e.jsx("img",{src:"https://www.rinkakuworks.com/public/images/portfolio-blogging/screenshot2.webp",alt:"screencap post edition",loading:"lazy"})}),e.jsx(s,{}),e.jsx(r,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Exemples de Code"})})}),e.jsx(s,{children:"Customisation de l’éditeur de texte"}),e.jsx(s,{children:e.jsx(u,{})}),e.jsx(s,{}),e.jsx(s,{children:"Contrôleur backend pour la création d'un nouvel article"}),e.jsx(s,{children:e.jsx(x,{})}),e.jsx(s,{}),e.jsx(r,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Leçons apprises"})})}),e.jsx(s,{children:"Ce projet m’a permis de comprendre les subtilités du déploiement d’une application full-stack dans un environnement professionnel. Il m’a également appris à résoudre des problèmes complexes liés au déploiement et à la configuration des serveurs."}),e.jsx(s,{children:"Commencer par déployer une version rudimentaire a été une approche stratégique, car cela m’a permis d’identifier les dysfonctionnements de manière ciblée tout en montrant une version fonctionnelle de l’application. Utiliser GitHub pour gérer les sauvegardes s’est avéré précieux lorsque j’ai dû restaurer des fichiers après des erreurs."}),e.jsx(s,{}),e.jsx(r,{}),e.jsx(s,{})]}),e.jsxs(t,{xs:1,md:1,lg:1,className:"text-left",children:[e.jsx(s,{children:e.jsx("h5",{children:e.jsx("strong",{children:"Conclusion"})})}),e.jsx(s,{children:"Au fur et à mesure que mes compétences en développement se perfectionnent, cette plateforme continuera d’évoluer. Elle répondra à mes besoins croissants et représentera une vitrine de mes compétences techniques. J’ai confiance en ce projet, car il n’est pas seulement un exercice de codage, mais une application que j’utilise activement pour documenter mon parcours et enrichir mon portfolio."})]}),e.jsx(t,{className:"justify-content-center mt-4",children:e.jsx(s,{md:4,className:"text-center",children:e.jsx(c,{href:"/contact",buttonText:"Contact Me"})})})]})}export{g as default};
