import HMR from  '@sveltech/routify/hmr'
import App from './App.svelte';
import './scss/app.scss';
import './scss/styleguide.scss';
const app = HMR(App, { target: document.body }, 'routify-app')

export default app;
