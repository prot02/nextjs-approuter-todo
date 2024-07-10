import { FCX } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { SpinnerType } from './schema';
import classNames from 'classNames';

const Spinner: FCX<SpinnerType> = ({ size = 's', className }) => {
	return (
		<div
			className={classNames(
				style.spinner,
				{
					[style[`size_${size}`]]: size,
				},
				className
			)}
		>
			<Image className={style.image} src="/images/spinner.svg" fill alt="" />
		</div>
	);
};
export default Spinner;
