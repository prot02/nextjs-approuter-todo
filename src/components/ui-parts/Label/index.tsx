import { FCX } from 'react';
import style from './style.module.scss';
import { LabelType } from './schema';
import classNames from 'classNames';

const Button: FCX<LabelType> = ({ className, text }) => {
	return <label className={classNames(style.label, className)}>{text}</label>;
};
export default Button;
