import { FCX } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { CustomImageType } from './schema';
import classNames from 'classnames';

const CustomImage: FCX<CustomImageType> = ({ src, alt, className }) => {
	return (
		<div className={classNames(style.custom_image, className)}>
			<Image src={src} fill alt={alt ?? ''} className={style.image} />
		</div>
	);
};
export default CustomImage;
