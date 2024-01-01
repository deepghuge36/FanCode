import { createGlobalStyle } from 'styled-components';
import Home from './pages/home';

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Netflix Sans', sans-serif; 
  }


`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};

export default App;
