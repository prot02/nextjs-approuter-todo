import { Spinner } from 'src/components/ui-parts';

export default function Loading() {
	return (
		<div className="h-screen flex items-center justify-center">
			<Spinner className="w-[48px]" />
		</div>
	);
}
