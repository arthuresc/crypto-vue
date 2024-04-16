import { createApp } from 'vue'
import './styles/app.scss'
import App from './App.vue'
import Card from './components/Card.vue'
import Title from './components/Title.vue'
import { Money3Component } from 'v-money3'
import { format, unformat } from 'v-money3';

const app = createApp(App);

app.component('Card', Card);
app.component('Title', Title);
app.component('v-money', Money3Component);

app.config.globalProperties.$filters = {
  currency(value) {
    return format(value, {
      debug: false,
      masked: false,
      prefix: 'US$',
      suffix: '',
      thousands: ',',
      decimal: '.',
      precision: 2,
      disableNegative: false,
      disabled: false,
      min: null,
      max: null,
      allowBlank: false,
      minimumNumberOfCharacters: 0,
      modelModifiers: {
          number: false,
      },
      shouldRound: true,
      focusOnRight: false,
    })
  }
}

app.mount('#app')
