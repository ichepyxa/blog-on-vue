<template>
  <header id="header">
    <h1>
      <RouterLink :to="{ name: 'home' }">Blog</RouterLink>
    </h1>
    <nav class="links">
      <ul>
        <template v-if='!user'>
          <li>
            <RouterLink :to="{ name: 'login' }">Login</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'registration' }">Registration</RouterLink>
          </li>
        </template>
        <template v-if='user'>
          <li>
            <RouterLink :to="{ name: 'create-post' }">Create post</RouterLink>
          </li>
          <li><a href="#" @click.prevent='logout()'>Logout</a></li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const user = inject('user')
    const logout = inject('logout')

    return { user, logout }
  }
}
</script>