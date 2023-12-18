
import './App.css';
import Button from './ButtonComponent';
import ImgClass from './ImgComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Button 1" />
        <ImgClass Img="https://www.fotografiamoderna.it/wp-content/uploads/2019/05/differenze-tra-jpeg-o-jpg-min.jpg" margin="20px 0 0 0" />
        <ImgClass Img="https://www.fotografiamoderna.it/wp-content/uploads/2019/05/cosa-significa-jpg.jpg" margin="0 0 20px 0" />
        <Button label="Button 2" />
      </header>
    </div>
  );
}

export default App;
