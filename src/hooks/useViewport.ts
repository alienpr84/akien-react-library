import { useState, useEffect } from 'react';
import windowDimensions from 'src/utils/viewport-dimensions';

type ViewportType = {
	height: number;
	width: number;
};

function useViewport(): ViewportType {
	const [dimensions, setDimensions] = useState(windowDimensions());

	useEffect(() => {
		setDimensions(windowDimensions());
	}, [dimensions]);

	return dimensions;
}

export default useViewport;
