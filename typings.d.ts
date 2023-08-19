type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};
interface Title {
	_type: "string";
	current: string;
}
interface Image {
	_type: "image";
	asset: Reference;
}

interface Reference {
	_ref: string;
	_type: "reference";
}

interface Span {
	_key: string;
	_type: "span";
	marks: string[];
	text: string;
}

interface Block {
	_key: string;
	_type: "block";
	children: Span[];
	markDefs: any[];
	style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Slug {
	_type: "slug";
	current: string;
}

interface Author extends Base {
	bio: Block[];
	image: Image;
	name: string;
	slug: Slug;
}

interface Comment {
    approved: boolean;
    comment: string;
    email: string;
    name: string;
    post: {
        _ref: string;
        _type: string;
    };
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends Base {
	author: Author;
	body: Block[];
	categories: Category[];
	mainImage: Image;
	slug: Slug;
	title: string;
	description: string;
	comments: Comment[];
}