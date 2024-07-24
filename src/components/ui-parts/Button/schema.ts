export type ButtonType = {
	Element?: 'label' | 'button';
	buttonType?: 'button' | 'submit';
	text?: string;
	onClick?: () => void;
};
