import ViewportDimensionsType from "../types/ViewportDimensions.type";

function viewportDimensions(): ViewportDimensionsType {
	let height = 0;
	let width = 0;

	if(window || document) {
		height = window.innerHeight || document.body.clientHeight;
		width = window.innerWidth || document.body.clientWidth;
	}

	return {
		height,
		width,
	}
}

export default viewportDimensions;
