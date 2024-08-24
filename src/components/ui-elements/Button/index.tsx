import { FCX } from 'react';
import style from './style.module.scss';
import { ButtonType } from './schema';
import classNames from 'classnames';
import Spinner from '@/components/ui-parts/Spinner';

const Button: FCX<ButtonType> = ({
	Element = 'label',
	buttonType = 'button',
	className,
	text,
	disabled,
	prosessing,
	onClick,
}) => {
	return (
		<Element
			className={classNames(
				style.btn,
				{ [style.disabled]: disabled },
				{ [style.prosessing]: prosessing },
				className
			)}
			onClick={onClick}
			type={Element === 'button' ? buttonType : undefined}
		>
			{prosessing && <Spinner className={style.spinner} />}
			{text}
		</Element>
	);
};
export default Button;
