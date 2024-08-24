import { FCX } from 'react';
import style from './style.module.scss';
import { FormErrorType } from './schema';
import classNames from 'classnames';

const FormError: FCX<FormErrorType> = ({ className, text }) => {
	return <div className={classNames(style.error, className)}>{text}</div>;
};
export default FormError;
