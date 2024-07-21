import { FCX } from 'react';
import { Input } from '@/components/ui-parts';
import { formAction } from './lib/actions';

const ProfileEdit: FCX = ({ className }) => {
	// zustandで表示状態のステートを持つ。

	return (
		<div className={className}>
			<form action={formAction}>
				<Input name="test" />
				<button type="submit">submit</button>
			</form>
		</div>
	);
};
export default ProfileEdit;
