<template>
  <div id="wrapper" v-if='isLoaded'>
    <Navbar />
    <div id="main">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { onMounted, provide, readonly, ref } from 'vue';
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { getUserProfile, removeAuthToken, setAuthToken } from './helpers/functions'
import router from './router';
import { userLogout } from './router/requests'

export default {
  components: { Navbar },
  setup() {
    const user = ref(null)
    const isLoaded = ref(false)

    const login = async token => {
      setAuthToken(token)
      await updateUser()
    }

    const updateUser = async () => {
      user.value = await getUserProfile()
    }

    const logout = async () => {
      await userLogout()
      user.value = null
      removeAuthToken()
      return router.push({ name: 'home' })
    }

    onMounted(async () => {
      await updateUser()
      isLoaded.value = true
    })

    provide('login', login)
    provide('logout', logout)
    provide('updateUser', updateUser)
    provide('user', readonly(user))

    return { isLoaded }
  }
}
</script>