import Header from './components/header/Header.jsx';
import Routes from './routes/Routes.jsx';
import Router from './routes/Router';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
};

export default App;
