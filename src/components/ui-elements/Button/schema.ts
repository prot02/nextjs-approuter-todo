export type ButtonType = {
	Element?: 'label' | 'button';
	buttonType?: 'button' | 'submit';
	text?: string;
	disabled?: boolean;
	prosessing?: boolean;
	onClick?: () => void;
};
