import classNames from 'classnames';
import { FCX } from 'react';
import style from './style.module.scss';
import { InputType } from './schema';

const Input: FCX<InputType> = ({
	className,
	type = 'text',
	name,
	defaultValue,
	value,
	placeholder,
	onChange,
	onKeyDown,
}) => {
	return (
		<span className={classNames(style.input_wrap, className)}>
			<input
				type={type}
				name={name}
				defaultValue={defaultValue}
				value={value}
				placeholder={placeholder}
				className={classNames(style.input)}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
		</span>
	);
};
export default Input;
