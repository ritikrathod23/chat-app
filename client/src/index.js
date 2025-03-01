import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './page/Login';
import Home from './page/Home';
import {ConversationProvider} from './contexAPI/useCovesation'
import { SocketProvider } from './contexAPI/useSocket';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './page/Signup';
import Layout from './page/Layout';
import { ToggleProvider } from './contexAPI/useToggle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: 'home',
    element: <Layout />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SocketProvider>
  <ToggleProvider>
    <ConversationProvider>
      <RouterProvider router={router}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RouterProvider>
    </ConversationProvider>
    </ToggleProvider>
  </SocketProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
