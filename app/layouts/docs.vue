<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation')

const { qeState } = useQePanel()
</script>

<template>
  <UContainer class="bdb">
    <UPage>
      <template v-if="qeState.editorMode" #left>
        <UAside>
          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
