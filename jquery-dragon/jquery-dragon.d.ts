/// <reference path="../jquery/jquery.d.ts" />

interface DragonOptions {
	noCursor?: boolean
	axis?: string
	within?: JQuery
	handle?: JQuery | string
}

interface JQuery {
	dragon(options?: DragonOptions): JQuery
}
