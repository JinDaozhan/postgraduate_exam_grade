<script setup lang="ts">
import {ref} from 'vue';

const noticeVisible = ref(true);
let pressTimer: any = null;

const handlePressStart = () => {
  pressTimer = setTimeout(() => {
    noticeVisible.value = false;
  }, 1000);
};

const handlePressEnd = () => {
  clearTimeout(pressTimer);
};

</script>

<template>
  <div
      v-if="noticeVisible"
      class="yzwb-notice-bar"
      style="word-break: break-all;"
      @mousedown="handlePressStart"
      @mouseup="handlePressEnd"
      @touchstart="handlePressStart"
      @touchend="handlePressEnd"
  >
    招生单位说明：<span
      contenteditable="true">请考生及时关注我校研究生院官方网站发布的相关信息。</span>
  </div>
</template>


<style scoped>

</style>
