<script setup lang="ts">
const { qeState } = useQePanel()
</script>

<template>
  <button @click="qeState.enabled = !qeState.enabled">
    <i class="i-fluent:settings-20-regular w-5 h-5" style="color: darkviolet;" />
  </button>
</template>
