import { useStorage } from '@vueuse/core'

export function useQePanel() {
  const settings = {
    consoleLogs: false,
    consoleLogsPinia: false,
    consoleLogsVerbose: false,
    enabled: false,
    qeToolsToggle: false,
  }
  const qeState = useStorage('pibe-cms', settings, localStorage, { mergeDefaults: true })

  return {
    qeState,
  }
}
