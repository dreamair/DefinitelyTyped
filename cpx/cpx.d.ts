// Type definitions for cpx
// Project: https://github.com/mysticatea/cpx
// Definitions by: 
// Definitions: https://github.com/dreamair/DefinitelyTyped

declare module "cpx" {
	export function copy(src: string, dest: string, callback?: (err: Error) => void): void;
}
