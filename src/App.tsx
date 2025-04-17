import theme from './theme/theme';
import './App.css'
import { ThemeProvider } from '@emotion/react'
import StationSelector from './components/StationSelector';

function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
          <StationSelector></StationSelector>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
