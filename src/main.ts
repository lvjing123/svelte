import './app.css'
import App from './App.svelte'
import './variable.scss'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
