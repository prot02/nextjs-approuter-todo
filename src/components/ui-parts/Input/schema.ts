export type InputType = {
	type?: 'text' | 'email' | 'number' | 'tel' | 'password';
	name?: string;
	defaultValue?: string | number;
	value?: string | number;
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
