export interface paragraphObjectShape {
	text: string;
	points?: string[];
}

export interface testimonialShape {
	heading?: string;
	name: string;
	message: paragraphObjectShape[];
	role?: string;
}
