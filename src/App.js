import MyForm from './myForm';
import './app.css';

function App() {
    return (
        <div className= "center">
            <header className="App-header">
                <h3>New Product</h3>
            </header>
            <div>
                <MyForm/>
            </div>
        </div>
    );
  }
  
  export default App;