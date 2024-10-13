<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const route = useRoute()
const router = useRouter()
const qeToolsToggle = Object.keys(route.query).map(x => x.toLowerCase()).includes('qetoolstoggle')
const enabled = Object.keys(route.query).map(x => x.toLowerCase()).includes('qetools') || qeToolsToggle

interface Settings {
  [key: string]: any
}
let settings: Settings = {
  enabled,
  qeToolsToggle,
  editorMode: false,
}
const qeState = useStorage('pibe-cms', settings, null, { mergeDefaults: true })
const environment = import.meta.env
const isDev = import.meta.env.DEV

const showQETools = computed(() => qeState.value.enabled)
const containerClassess = computed(() => ({
  'absolute right-0 top-16 m-2 max-w-96': qeState.value.debugPanelPos === 'right',
  'sticky bottom-12 mx-2 bottom-8 max-h-20rem': qeState.value.debugPanelPos === 'bottom',
}))

const overrideFeatureList = [
  {
    key: 'editorMode',
    label: 'Editor Mode',
    type: 'toggle',
    value: false,
  },
  {
    key: 'consoleLogs',
    label: 'Logs',
    type: 'toggle',
    value: false,
    disabled: false,
  },
  // {
  //   key: 'consoleLogsPinia',
  //   label: 'Logs Pinia',
  //   type: 'toggle',
  //   value: false,
  // },
  // {
  //   key: 'consoleLogsVerbose',
  //   label: 'Logs Verbose',
  //   type: 'toggle',
  //   value: false,
  // },
  {
    key: 'debugPanelPos',
    label: 'Debug Panel Position',
    value: 'bottom',
  },
  // {
  //   key: 'routeDebug',
  //   label: 'Route',
  //   type: 'toggle',
  //   value: false,
  // },
  // {
  //   key: 'envInfo',
  //   label: 'Environment',
  //   type: 'toggle',
  //   value: false,
  // },
  // {
  //   key: 'breakpointsDebug',
  //   label: 'Breakpoints',
  //   type: 'toggle',
  //   value: false,
  // },
]
const defaultFeatures = overrideFeatureList.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
}, settings)

if (qeState.value) {
  settings = {
    ...settings,
    ...defaultFeatures,
    ...qeState.value,
  }
}

function onDisable() {
  qeState.value.enabled = false
  if (enabled)
    router.push({ path: route.path })
}

nextTick(() => {
  qeState.value = settings
})

if (enabled) {
  nextTick(() => {
    qeState.value = settings
    qeState.value.enabled = true
  })
}
if (qeToolsToggle || isDev) {
  nextTick(() => {
    qeState.value = settings
    qeState.value.qeToolsToggle = true
  })
}
</script>

<template>
  <div
    v-if="showQETools"
    id="qeTools"
    :class="containerClassess"
    class="z-40 grid overflow-auto rounded-lg rounded-xl bg-violet-50 px-3 py-2 shadow-slate-8 ring-1 ring-violet-3 drop-shadow-xl dark:bg-black dark:shadow-gray-50 dark:ring-blue-5 dark:ring-blue-9"
  >
    <div class="flex justify-between gap-x-4 text-xs">
      <div flex items-center>
        <h2 class="mr-2 text-base text-blue-6 font-semibold">
          QE Tools ({{ environment.MODE }} env.)
        </h2>

        <button @click="qeState.qeToolsToggle = !qeState.qeToolsToggle">
          <i class="i-fluent:add-square-multiple-16-regular mr-1 text-lg" />
        </button>

        <!-- <QEToolsToggle /> -->
      </div>

      <div flex items-baseline gap-x-2>
        <button
          :class="{ 'order-last': qeState.debugPanelPos === 'bottom' }"
          @click="qeState.debugPanelPos = 'right'"
        >
          <UIcon name="fluent:panel-right-20-filled" class="w-5 h-5 fill-violet-5" />

          <!-- <i
            class="i-fluent:dock-panel-right-16-regular text-lg"
            :class="[qeState.debugPanelPos === 'right' ? 'text-blue-5 hover:text-blue-6' : 'text-gray-500 hover:text-gray-600']"
          /> -->
        </button>
        <button :class="{ 'order-last': qeState.debugPanelPos === 'right' }" @click="qeState.debugPanelPos = 'bottom'">
          <UIcon name="fluent:panel-bottom-20-filled" class="w-5 h-5 text-violet-5 hover:text-violet-7" />

          <!-- <i
            class="i-fluent:dock-panel-bottom-20-regular text-lg"
            :class="[qeState.debugPanelPos === 'bottom' ? 'text-blue-5 hover:text-blue-6' : 'text-gray-500 hover:text-gray-600 ']"
          /> -->
        </button>
        <button
          class="order-first mb-3 ml-2"
          data-testid="dialog-close"
          @click="onDisable"
        >
          <UIcon name="i-fluent:subtract-circle-12-regular" class="w-5 h-5 text-violet-5" />
        </button>
      </div>
    </div>
    <div>
      <div class="flex flex-wrap items-baseline justify-start gap-x-4 text-xs text-gray-500">
        <template
          v-for="(feat, idx) in overrideFeatureList.filter(x => x.type === 'toggle' && !x.disabled)"
          :key="idx"
        >
          <UFormGroup :label="feat.label" class="flex gap-x-1 items-center flex-row-reverse">
            <UToggle
              v-model="qeState[feat.key]"
            />
          </UFormGroup>
        </template>

        <!-- <bricks-switch
          v-for="(feat, idx) in overrideFeatureList.filter(x => x.type === 'toggle' && !x.disabled)"
          :key="idx"
          :checked="qeState[feat.key]"
          size="small"
          @bricks-switch-change="qeState[feat.key] = $event.target.checked"
        >
          {{ feat.label }}
        </bricks-switch> -->
      </div>
    </div>
  </div>
</template>
