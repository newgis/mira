<template>
  <section class="my-dispatches">
    <div class="my-dispatches--pc">
      <v-table/>
    </div>
    <div class="my-dispatches--mobile">
      <v-mobile-dispatch/>
    </div>
  </section>
</template>

<script>
import MobileDispatch from './MobileDispatch';
import Table from '@/shared/Table';

export default {
  name: "MyDispatches",
  components: {
    "v-table": Table,
    'v-mobile-dispatch': MobileDispatch
  },
  async mounted() {
    await this.getAllDispatches()
  },
  methods: {
    async getAllDispatches() {
      try {
        await this.$axios.get('api/getData', {
          headers: {
            'Authorization': `Bearer ${this.$cookies.get('jwt')}`
          }
        })
      } catch (e) {
        try {
          this.$cookies.remove('jwt')
          const data = await this.$axios.post('api/auth/refreshTokens')
          this.$cookies.set('jwt', data.data.data.accessToken)
          await this.$axios.get('api/getData', {
            headers: {
              'Authorization': `Bearer ${this.$cookies.get('jwt')}`
            }
          })
        } catch (e) {
          await this.$router.push('/')
          this.$cookies.remove('refresh')
          this.$cookies.remove('jwt')

        }
      }
    },
  }
}
</script>

<style lang="scss">
.my-dispatches {
  &--pc {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &--mobile {
    @media (min-width: 1024px) {
      display: none;
    }
  }
}
</style>
