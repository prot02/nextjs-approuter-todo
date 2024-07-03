import { FCX } from "react";
import Image from 'next/image'
import style from './style.module.scss'
import {CustomImageType} from './schema'
import classNames from "classNames";

const CustomImage: FCX<CustomImageType> = ({src, alt, className}) => {
  return (
    <Image src={src} fill alt={alt ?? ''} className={classNames(style.custom_image,className)} />
  )
}
export default CustomImage;