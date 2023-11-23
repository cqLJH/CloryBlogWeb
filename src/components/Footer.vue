<!--
 * @Author: LJH 52238648+cqLJH@users.noreply.github.com
 * @Date: 2022-09-30 13:38:20
 * @LastEditors: LJH 52238648+cqLJH@users.noreply.github.com
 * @LastEditTime: 2022-11-04 16:08:21
 * @FilePath: \BlogWeb\src\components\Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="footer" class="relative w-full pt-1" :style="gradientBackground">
    <span class="flex justify-center bg-ob-deep-900">
      <div
        class="grid items-center justify-center w-full grid-rows-1 gap-8 px-6 py-6 mx-auto text-sm rounded-lg bg-ob-deep-900 max-w-10/12 lg:max-w-screen-2xl text-ob-normal lg:grid-rows-none lg:grid-cols-4 h-36">
        <div
          class="flex flex-col row-span-1 gap-6 mx-auto text-center lg:flex-row lg:gap-12 lg:col-span-5 lg:text-left">
          <ul class="flex flex-col gap-1.5 mx-auto">
            <li>
              Copyright © 2022 - {{ currentYear }}
              <b class="font-extrabold">{{ websiteConfig.author }}</b>
            </li>
            <li v-if="websiteConfig.beianNumber != ''" class="flex flex-row gap-3 mx-auto">
              <a href="https://beian.miit.gov.cn/" target="_blank">
                <b class="font-extrabold border-b-2 border-ob hover:text-ob"> {{ websiteConfig.beianNumber }} </b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Footer',
  setup() {
    const appStore = useAppStore()
    const { t } = useI18n()
    return {
      avatarClass: computed(() => {
        return {
          'footer-avatar': true,
          [appStore.themeConfig.profile_shape]: true
        }
      }),
      gradientText: computed(() => appStore.themeConfig.background_gradient_style),
      gradientBackground: computed(() => {
        return { background: appStore.themeConfig.header_gradient_css }
      }),
      currentYear: computed(() => new Date().getUTCFullYear()),
      websiteConfig: computed(() => appStore.websiteConfig),
      t
    }
  }
})
</script>
