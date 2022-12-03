<template>
  <label :for="id">{{ label }}</label>
  <input :id="id" :type='type' :placeholder="placeholder" :value='modelValue' @input="inputModelValue($emit, $event)">
  <span v-if='error' style='color: #D53129'>{{ error[0] }}</span><br>
</template>

<script>
import { ref } from 'vue';

export default {
  props: [
    'id',
    'label',
    'placeholder',
    'error',
    'modelValue',
    'type'
  ],
  setup(props) {
    const inputModelValue = (emit, event) => {
      return emit('update:modelValue', event.target.value)
    }

    return { inputModelValue }
  }
}
</script>