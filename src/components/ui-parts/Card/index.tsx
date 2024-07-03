import classNames from "classNames";
import style from "./style.module.scss"

const Card: React.FCX = ({ children, className }) => {
	return <div className={classNames(style.card, className)}>
		{children}
	</div>;
};
export default Card;
