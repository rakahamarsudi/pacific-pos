import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'pacific-pos',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
