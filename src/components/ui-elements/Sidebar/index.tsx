import { FCX } from "react";
import { useAuth } from "@/hooks";
import classNames from "classNames";
import style from './style.module.scss'


const Sidebar: FCX = ({className}) => {
  const { signout } = useAuth();
  return (
  <div 
    className={classNames(className, style.sidebar)}
  >
    <div className={style.title}>Live Todo</div>
    <div className={style.top}>

    </div>
    <div className={style.bottom}>
      <div onClick={signout}>ログアウト</div>
    </div>
    
  </div>
)}
export default Sidebar;