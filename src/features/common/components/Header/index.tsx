import { FCX } from 'react';
import classNames from 'classNames';
import style from './style.module.scss';
import { CustomImaga } from '@/components/ui-parts';
import { useAuthStore } from '@/stores';
import Link from 'next/link';
import Signout from './Signout';

const Header: FCX = ({ className }) => {
	const auth = useAuthStore((state) => state.auth);

	return (
		<div className={classNames(className, style.header)}>
			<div className={style.title}>Live Todo</div>
			<div className={style.profile}>
				<CustomImaga className={style.icon} src={auth?.icon_url} />
				<div className={style.name}>{auth?.name}</div>

				<div className={style.menu}>
					<ul>
						<li>
							<Link href="/board" className={style.item}>
								ボード
							</Link>
						</li>
						<li>
							<Link href="/profile" className={style.item}>
								プロフィール編集
							</Link>
						</li>
						<li>
							<Signout className={style.item} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Header;
