import { ConfigProvider } from 'antd';
import React from 'react';
import Page from './components/Page';

const App: React.FC = () => (
  <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6B47ED',
        },
        components: {
          Radio: {
            colorPrimaryBg: '#6B47ED',
          },
          Switch: {
            handleShadow: '0 2px 2px 0 rgba(0, 35, 11, 0.1)',
            handleSize: 13,
            trackPadding: 4.5,
          }
        },
      }}
    >
    <Page />
  </ConfigProvider>
);

export default App;