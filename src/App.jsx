import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home.jsx';

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
