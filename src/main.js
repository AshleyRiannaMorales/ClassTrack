import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import router from './router';


import PrimeVue from "primevue/config";
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button';
import Message from 'primevue/message';
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Password from 'primevue/password';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Menu from 'primevue/menu';





import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';


import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';

createApp(App)
    .use(router)
    .use(ConfirmationService)
    .use(ToastService)
    .use(PrimeVue, { ripple: true })
    .component("ConfirmDialog",ConfirmDialog)
    .component("Toast",Toast)
    .component("InputText", InputText)
    .component("DataTable",DataTable)
    .component("Column",Column)
    .component("Button",Button)
    .component("Card",Card)
    .component("Divider",Divider)
    .component("Message",Message)
    .component("Password",Password)
    .component("Dialog",Dialog)
    .component("Dropdown",Dropdown)
    .component("Calendar",Calendar)
    .component("Tag",Tag)
    .component("Textarea",Textarea)
    .component("IconField",IconField)
    .component("InputIcon",InputIcon)
    .component("Menu",Menu)
    .mount('#app')


