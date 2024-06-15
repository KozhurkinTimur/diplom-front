import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './router/AppRouter';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
