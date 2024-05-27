import { createApp } from 'vue';
import App from './App.vue';
import router from './router';




class App2Element extends HTMLElement {
    connectedCallback() {
        console.log('App2Element connectedCallback called');
        const container = this.attachShadow({ mode: 'open' });
        createApp(App).use(router).mount(container);
        console.log('Vue instance mounted inside App1Element');
    }
}

customElements.define('app2-element', App2Element);



console.log('App2 script executed and subApp2 registered on window');
