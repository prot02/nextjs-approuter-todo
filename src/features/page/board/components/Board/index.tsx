'use client';
import { FCX } from 'react';

import classNames from 'classnames';
import style from './style.module.scss';

const Board: FCX = ({ className }) => {
	return (
		<div className={classNames(className, style.board)}>
			<div className={style.title}>
				<input type="text" className={style.title_input} />
			</div>
		</div>
	);
};
export default Board;
