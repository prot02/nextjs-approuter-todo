import { FCX } from 'react';
import style from './style.module.scss';
import { FormLabelType } from './schema';
import classNames from 'classnames';

const FormLabel: FCX<FormLabelType> = ({ className, text }) => {
	return <label className={classNames(style.label, className)}>{text}</label>;
};
export default FormLabel;
