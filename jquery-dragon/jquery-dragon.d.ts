/// <reference path="../jquery/jquery.d.ts" />

interface DragonOptions {
	noCursor?: boolean
	axis?: string
	within?: JQuery
	handle?: JQuery | string
	dragStart?: (evn?: JQueryEventObject) => void
	drag?: (evn?: JQueryEventObject) => void
	dragEnd?: (evn?: JQueryEventObject) => void
}

interface JQuery {
	dragon(options?: DragonOptions): JQuery
}
