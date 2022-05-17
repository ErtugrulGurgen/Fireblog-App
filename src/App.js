import './App.css';
import AppRouter from './appRouter/AppRouter';
import AuthContextProvider from './contexts/AuthContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <AppRouter/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
