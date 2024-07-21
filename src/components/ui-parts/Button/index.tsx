import { FCX } from 'react';
import style from './style.module.scss';
import { ButtonType } from './schema';
import classNames from 'classNames';

const Button: FCX<ButtonType> = ({ className, text, onClick }) => {
	return (
		<div className={classNames(style.btn, className)} onClick={onClick}>
			{text}
		</div>
	);
};
export default Button;
