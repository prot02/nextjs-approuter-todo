import { FCX } from "react";
import classNames from "classNames";
import { GoogleLoginButtonType } from './schema';
import {SocialIcon} from '@/components/ui-parts'
import style from './style.module.scss'


const GoogleLoginButton: FCX<GoogleLoginButtonType> = ({className, onClick, text}) => {
  return (
  <div 
    onClick={onClick}
    className={classNames(className, style.google_login_button)}
  >
    <SocialIcon social="google" className={style.icon} />
    <div className={style.text}>{text}</div>
  </div>
)}
export default GoogleLoginButton;