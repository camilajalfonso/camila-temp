<script setup lang="ts">
const { qeState } = useQePanel()
console.info(':::qeState', qeState)
</script>

<template>
  <button @click="qeState.enabled = !qeState.enabled">
    <i class="i-fluent:window-settings-20-regular text-lg text-blue-5 hover:text-blue-6" />
  </button>
</template>
