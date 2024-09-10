import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: 'index.html',
    title: 'Calcula tu promedio',
    meta: [
      {
        name: 'description',
        content:
          'En esta web app vas a poder calcular tus promedios a base de porcentajes',
      },
    ],
    appIcon: {
      icons: [{ src: './public/logoHead.png', size: 192 }],
    },
  },
});
