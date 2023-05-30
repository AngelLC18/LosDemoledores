import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
function App() {
  const iniciarSesion = () =>{
    console.log('iniciar sesion :)');
  }
  const crearCuenta = () =>{
    console.log('crear cuenta')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button 
        texto='INICIAR SESION'
        clickear={iniciarSesion}/>
        <Button
        texto='CREAR CUENTA'
        clickear={crearCuenta}
        />
      </header>
    </div>
  );
}

export default App;
