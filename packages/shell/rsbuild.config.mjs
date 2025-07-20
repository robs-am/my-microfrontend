import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000, // O Shell rodará na porta 3000
  },
  moduleFederation: {
    name: 'shell',
    // Define quais MFEs este Shell pode carregar
    remotes: {
      mfe_frete: 'mfe_frete@http://localhost:3001/remoteEntry.js',
    },
    // Define as dependências que serão compartilhadas
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
    },
  },
});
