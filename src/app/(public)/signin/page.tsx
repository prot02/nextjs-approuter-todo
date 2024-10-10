import { Card } from 'src/components/ui-parts';
import { GoogleLoginButton } from 'src/features/page/signin';

export default function Signin() {
	return (
		<div className="w-[480px] mx-auto pt-[120px]">
			<Card>
				<div className="text-4xl text-primary font-bold text-center mb-[48px]">
					Nextjs Approuter Todo
				</div>
				<GoogleLoginButton className="mx-auto" />
			</Card>
		</div>
	);
}
