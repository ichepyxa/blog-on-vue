<template>
  <article class="post" v-for='post in posts' v-if='isLoading'>
    <header>
      <div class="title">
        <h2>
          <RouterLink :to="{
            name: 'post', params: { id: post.id }
          }">
            {{ post.title }}</RouterLink>
        </h2>
      </div>
      <div class="meta">
        <time class="published">{{ new Date(post.date).toLocaleString(undefined, {
            dateStyle: 'long'
          })
        }}</time>
        <span class="name">{{ post.author.name }}</span>
      </div>
    </header>
    <RouterLink class="image featured" :to="{
      name: 'post', params: { id: post.id }
    }">
      <img :src="post.image_url" alt="" />
    </RouterLink>
    <p>{{ post.description }}</p>
    <footer>
      <ul class="actions">
        <li>
          <RouterLink class="button large" :to="{
            name: 'post', params: { id: post.id }
          }">
            Continue Reading
          </RouterLink>
        </li>
      </ul>
      <ul class="stats" v-if='(user.id === post.author.id)'>
        <li><a href="#" style="color: #a00">Remove</a></li>
      </ul>
    </footer>
  </article>
</template>

<script>
import { inject, onMounted, ref } from 'vue';
import { getPosts } from '@/router/requests'

export default {
  setup() {
    const user = inject('user')
    const posts = ref([])
    const isLoading = ref(false)

    onMounted(async () => {
      const { body, code } = await getPosts()
      posts.value = body.data
      isLoading.value = true
    })

    return { user, isLoading, posts }
  }
}
</script>