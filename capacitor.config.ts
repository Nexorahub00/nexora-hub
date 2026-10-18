import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.nexorahub.app',
  appName: 'NEXORA APP',
  webDir: 'public',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false
  }
};

export default config;
