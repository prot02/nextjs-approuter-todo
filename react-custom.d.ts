declare namespace React {
	type FCX<P = {}> = FC<{ children?: ReactNode; className?: string } & P>;
}
