import { createApp } from 'vue';
import App from './App.vue';
import router from './router';




class App1Element extends HTMLElement {
    connectedCallback() {
        console.log('App1Element connectedCallback called');
        const container = this.attachShadow({ mode: 'open' });
        createApp(App).use(router).mount(container);
        console.log('Vue instance mounted inside App1Element');
    }
}

customElements.define('app1-element', App1Element);



console.log('App1 script executed and subApp1 registered on window');
