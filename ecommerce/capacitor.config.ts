import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.e.comm.app',
  appName: 'ecommerce',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
