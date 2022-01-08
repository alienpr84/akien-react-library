import useViewportResize from '../dist/hooks/useViewportResize';
import sum from '../dist/utils/sum';

function App() {
	console.log(useViewportResize());
	console.log(sum(1, 4, 5, 1));
	return <div>Hello app</div>;
}

export default App;
