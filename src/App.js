// import logo from './logo.svg';
import './App.css';
// import Greet from './components/greet/Greet';
import { Application } from './application/Application';
import { MuiMode } from './components/mui/MuiMode';
import Counter from './counter/Counter';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <div className="App">
     {/* <Greet name="Sanket" /> */}
     {/* <Application />
      */}

      {/* <Counter /> */}
      <AppProviders >
        <div>
          <MuiMode />
        </div>
      </AppProviders>
    </div>
  );
}

export default App;
