import './App.css';
import HomePage from './pages/Home';
import SiteHeaderComponent from './components/site-header/SiteHeaderComponent';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <>
      <AppProvider>
        <SiteHeaderComponent />
        <HomePage />
      </AppProvider>
    </>
  );
}

export default App;
