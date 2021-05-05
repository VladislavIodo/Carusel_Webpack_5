import "./App.css";
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {
return (
    <div className="app">
        <ImageSlider slides={SliderData} />
    </div>
);
}

export default App;