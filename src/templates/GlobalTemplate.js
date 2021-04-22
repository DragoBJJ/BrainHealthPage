import React from 'react';
import GlobalStyle from 'theme/GlobalTheme';
import { ThemeProvider } from 'styled-components';
import Theme from 'theme/Theme';

const GlobalTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </>
  );
};

export default GlobalTemplate;
