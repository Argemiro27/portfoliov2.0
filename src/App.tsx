import { GlobalStyle } from './styles/global';
import { ThemeProviderComponent} from './components';
import Routes from './Routes';

function App() {
  return (
      <ThemeProviderComponent>
        <GlobalStyle />
        <Routes />
      </ThemeProviderComponent>
  );
}

export default App;
