<template>
  <article class="post" v-if='isLoading'>
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
        <time class="published" datetime="2015-11-01">{{ new Date(post.date).toLocaleString(undefined, {
            dateStyle: 'long'
          })
        }}</time>
        <span class="name">{{ post?.author?.name || '' }}</span>
      </div>
    </header>
    <span class="image featured"><img :src="post.image_url" alt="" />
    </span>
    <p>{{ post.description }}</p>
    <p>{{ post.content }}</p>
  </article>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPost } from '../router/requests'

export default {
  setup() {
    const route = useRoute()
    const postId = route.params.id
    const post = ref({})
    const isLoading = ref(false)

    onMounted(async () => {
      const { body, code } = await getPost(postId)
      post.value = body.data
      isLoading.value = true
    })

    return { isLoading, post }
  }
}
</script>