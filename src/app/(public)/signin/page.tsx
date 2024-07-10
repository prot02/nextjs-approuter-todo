import { Card } from 'src/components/ui-parts';
import { GoogleLoginButton } from 'src/features/page/signin';

export default function Signin() {
	return (
		<div className="w-[600px] mx-auto pt-[120px]">
			<Card>
				<div className="text-3xl text-primary font-bold text-center mb-[24px]">Live Todo</div>
				<GoogleLoginButton className="mx-auto" />
			</Card>
		</div>
	);
}
