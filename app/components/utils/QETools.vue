<script setup lang="ts">
// import { createStorage } from 'unstorage'
// import localStorageDriver from 'unstorage/drivers/localstorage'

const qeState = ref({
  enabled: true,
  debugPanelPos: 'right',
})
const showQETools = computed(() => qeState.value.enabled)
const containerClassess = computed(() => ({
  'absolute right-0 top-4 m-2 max-w-96': qeState.value.debugPanelPos === 'right',
  'sticky bottom-12 mx-2 bottom-8 max-h-20rem': qeState.value.debugPanelPos === 'bottom',
}))

// const qeState = useStorage('pibe-cms')

// console.info('::: QETools ::::')
// console.info(':::qeState', qeState)

// const storage = createStorage({
//   driver: localStorageDriver({ base: 'app:', localStorage, })
// })
// console.info(':::storage', storage)

console.info(':::qeState', qeState)
</script>

<template>
  <div
    v-if="showQETools"
    id="qeTools"
    :class="containerClassess"
    class="z-40 grid overflow-auto rounded-lg rounded-xl bg-violet-50 px-3 py-2 shadow-slate-8 ring-1 ring-violet-3 drop-shadow-xl dark:bg-black dark:shadow-gray-50 dark:ring-blue-5 dark:ring-blue-9"
  >
    here
  </div>
</template>
