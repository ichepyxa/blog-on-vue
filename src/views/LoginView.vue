<template>
  <article class="post">
    <h1>Login</h1>
    <form action="#" @submit.prevent='submitForm()'>
      <BaseInput id="form-email" label='Your email' type="text" placeholder="Your email" v-model='form.email'
        :error='errors.email' />
      <BaseInput id="form-password" label='Your password' type="password" placeholder="Your password"
        v-model='form.password' :error='errors.password' />
      <input type="submit" value="Login">
    </form>
  </article>
</template>

<script>
import { inject, ref } from 'vue';
import router from '../router';
import BaseInput from '../components/Form/BaseInput.vue';
import { sendLogin } from '../router/requests';

export default {
  components: { BaseInput },
  setup() {
    const form = ref({})
    const errors = ref({})
    const login = inject('login')

    const submitForm = async () => {
      errors.value = {}

      const { body, code } = await sendLogin(form.value)
      if (code === 200) {
        await login(body.token)
        return router.push({ name: 'home' })
      }

      errors.value = body.errors
    };

    return { form, submitForm, errors };
  },
}
</script>