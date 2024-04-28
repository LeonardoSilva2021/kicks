import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { ThemeDefault } from './views/theme/theme-default';
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterMain } from './routers/router-main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider
      theme={ThemeDefault}
    >
      <BrowserRouter>
        <RouterMain />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
