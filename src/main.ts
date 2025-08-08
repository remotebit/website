import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import router from './router';
import ToastService from 'primevue/toastservice';
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';
import { definePreset } from '@primeuix/themes';

const app = createApp(App)

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50:  '#F7F9FA',   // White Smoke (background chiaro)
            100: '#F7F9FA',   // White Smoke
            200: '#4DC0E8',   // Sky Blue (accenti chiari)
            300: '#3DDC97',   // Mint Green (CTA secondarie)
            400: '#4DC0E8',   // Sky Blue (accenti)
            500: '#0B1B2B',   // Navy Blue (colore principale)
            600: '#2F2F2F',   // Charcoal Gray (testo, footer)
            700: '#2F2F2F',   // Charcoal Gray
            800: '#0B1B2B',   // Navy Blue (header)
            900: '#0B1B2B',   // Navy Blue
            950: '#0B1B2B'    // Navy Blue
        },
        accent: {
            500: '#4DC0E8',   // Sky Blue (accenti/pulsanti/link attivi)
        },
        success: {
            500: '#3DDC97',   // Mint Green (CTA secondarie)
        },
        surface: {
            50:  '#F7F9FA',   // White Smoke (background chiaro)
            100: '#FFFFFF',   // Bianco puro per superfici
        },
        text: {
            900: '#2F2F2F',   // Charcoal Gray (testo principale)
            700: '#0B1B2B',   // Navy Blue (testo alternativo)
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: 'light',
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            },

        }
    }
});
app.use(router);
app.use(ToastService);
app.use(DialogService);
app.use(ConfirmationService);

app.mount('#app');
