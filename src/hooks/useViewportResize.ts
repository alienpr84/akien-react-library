import { useState, useEffect } from "react";
import debounce from "src/utils/debounce";
import viewportDimensions from 'src/utils/viewport-dimensions';

function useViewportResize() {
	const [dimensions, setDimensions] = useState(viewportDimensions());

	useEffect(() => {
		const handleDebounceResize = debounce(function handleResize() {
			setDimensions(viewportDimensions());
		}, 300);

		window.addEventListener('resize', handleDebounceResize);

		return () => {
			removeEventListener('resize', handleDebounceResize);
		}
	}, [dimensions]);

	return dimensions;
}

export default useViewportResize;