import { SetTimeoutType } from "../types";

function debounce(fn: () => void, ms: number, ...args: []): () => void {
	let timeoutId: SetTimeoutType = null;
 	const self = typeof debounce;

	return () => {
		if(timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			timeoutId = null;
			fn.apply(self, args)
		}, ms);
		
	}
}

export default debounce;