<template>
  <div>
    <v-header
      :links="[
        { title:'Калькулятор', to:'#calculator' },
        { title:'О доставке', to:'#delivery' },
        { title:'Преимущества', to:'#advantages' },
        { title:'Отзывы', to:'#reviews' },
        { title:'FAQ', to:'#faq' },
        { title:'Контакты', to:'#contacts' },
       ]"
    />
    <v-main @clicked="pushToCalc"/>
    <v-calculator id="calculator"/>
    <v-about-delivery id="delivery" />
    <v-advantages id="advantages" />
    <v-about-company id="company" />
    <v-reviews id="reviews" />
    <v-faq id="faq" />
    <v-contacts id="contacts" />
    <v-footer />
  </div>
</template>

<script>
import Header from '@/sections/Header';
import MainBlock from '@/sections/Main/';
import Advantages from '@/sections/Advantages';
import AboutDelivery from '@/sections/About/Delivery.vue';
import AboutCompany from '@/sections/About/Company.vue';
import Contacts from '@/sections/Contacts';
import Reviews from '@/sections/Reviews';
import FAQ from '@/sections/FAQ';
import Calculator from '@/sections/Calculator';
import Footer from '@/sections/Footer';

export default {
    name: "IndexPage",
    components: {
      "v-header": Header,
      "v-main": MainBlock,
      "v-about-delivery": AboutDelivery,
      "v-about-company": AboutCompany,
      'v-advantages': Advantages,
      'v-contacts': Contacts,
      'v-reviews': Reviews,
      'v-faq': FAQ,
      'v-calculator': Calculator,
      'v-footer': Footer
    },
  methods: {
      pushToCalc(){
        this.$router.push('#calculator')
      },

  }
}
</script>
