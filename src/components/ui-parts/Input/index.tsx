import classNames from 'classnames';
import { forwardRef } from 'react';
import style from './style.module.scss';
import { InputType } from './schema';
import { PropSchema } from 'src/schemas';

const Input = forwardRef<HTMLInputElement, PropSchema & InputType>(
	(
		{ className, type = 'text', name, defaultValue, value, placeholder, onChange, onKeyDown },
		ref
	) => {
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
					ref={ref}
				/>
			</span>
		);
	}
);

Input.displayName = 'Input';
export default Input;
