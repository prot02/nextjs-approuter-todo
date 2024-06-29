import classnames from "classnames";
import style from "./style.module.scss"

const Card: React.FCX = ({ children, className }) => {
	return <div className={classnames(style.card, className)}>
		{children}
	</div>;
};
export default Card;
