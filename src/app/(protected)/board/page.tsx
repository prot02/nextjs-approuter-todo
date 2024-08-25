import { Suspense } from 'react';
import { Spinner } from 'src/components/ui-parts';
import { BoardList } from 'src/features/page/board';

export default function Bord() {
	return (
		<div>
			<Suspense
				fallback={
					<div className="flex justify-center">
						<Spinner className="w-[24px]" />
					</div>
				}
			>
				{<BoardList />}
			</Suspense>
		</div>
	);
}
