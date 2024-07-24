import { FCX } from 'react';
import style from './style.module.scss';
import { ButtonType } from './schema';
import classNames from 'classNames';

const Button: FCX<ButtonType> = ({
	Element = 'label',
	buttonType = 'button',
	className,
	text,
	onClick,
}) => {
	return (
		<Element
			className={classNames(style.btn, className)}
			onClick={onClick}
			type={Element === 'button' ? buttonType : undefined}
		>
			{text}
		</Element>
	);
};
export default Button;
