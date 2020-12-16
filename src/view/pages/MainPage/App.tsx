import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { useSelector } from 'react-redux';
import AppRouter from '../../router/AppRouter';
import GlobalStyles from '../../../style/globalStyle';
import { darkTheme, lightTheme } from '../../../style/styleThemeVariables';

import { useDarkMode } from '../../../store/settings/settingsSelectors';

function App() {
  const darkMode = useSelector(useDarkMode);
  return (
    <ThemeProvider theme={() => (darkMode ? darkTheme : lightTheme)}>
      <GlobalStyles />
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        limit={6}
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
