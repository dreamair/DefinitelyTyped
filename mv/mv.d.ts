// Type definitions for mv
// Project: https://github.com/andrewrk/node-mv
// Definitions by: 
// Definitions: https://github.com/dreamair/DefinitelyTyped

declare module "mv" {
	function mv(src: string, dest: string, callback: (err: Error) => void): void;
	function mv(src: string, dest: string, options: { mkdirp: boolean, clobber: boolean }, callback: (err: Error) => void): void;
	
	export = mv
}
