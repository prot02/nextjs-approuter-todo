export type InputType = {
	type?: 'text' | 'email' | 'number' | 'tel' | 'password';
	name?: string;
	value?: string | number;
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};