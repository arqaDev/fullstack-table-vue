import { createApp } from 'vue'
import App from './App.vue'
import CustomButton from '@/components/UI/CustomButton'
import CustomInput from '@/components/UI/CustomInput'
import VFocus from './directives/VFocus'

const app = createApp(App)

app.directive('focus', VFocus)

app.component('custom-button', CustomButton)
app.component('custom-input', CustomInput)

app.mount('#app')
