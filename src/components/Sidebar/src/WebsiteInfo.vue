<!--
 * @Author: LJH 52238648+cqLJH@users.noreply.github.com
 * @Date: 2022-09-30 13:38:21
 * @LastEditors: LJH 52238648+cqLJH@users.noreply.github.com
 * @LastEditTime: 2022-11-04 16:32:59
 * @FilePath: \BlogWeb\src\components\Sidebar\src\WebsiteInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="sidebar-box">
    <SubTitle :title="'titles.website_info'" icon="website-info" />
    <ul class="mx-auto">
      <li class="pb-3">
        <span class="text-sm font-semibold">{{ t('settings.running-time') }}:</span>
        <span class="float-right text-sm font-semibold text-right" v-if="websiteCreateTime != ''">
          {{ websiteCreateTime }}
        </span>
        <ob-skeleton v-else class="float-right" tag="span" width="136px" height="16px" />
      </li>
      <li class="pb-2">
        <span class="text-sm font-semibold">{{ t('settings.view-count') }}:</span>
        <span class="float-right text-sm font-semibold text-right" v-if="viewCount">{{ viewCount }}</span>
        <ob-skeleton v-else class="float-right" tag="span" width="60px" height="16px" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { SubTitle } from '@/components/Title'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'WebsiteInfo',
  components: { SubTitle },
  setup() {
    const { t } = useI18n()
    const appStore = useAppStore()
    const websiteCreateTime = ref('')
    const viewCount = ref(0)
    let timer: any
    onMounted(() => {
      runTime()
      timer = setInterval(runTime, 1000)
    })
    onUnmounted(() => {
      clearInterval(timer)
    })
    const runTime = () => {
      if (!appStore.websiteConfig.websiteCreateTime) {
        return
      }
      let timeold = new Date().getTime() - new Date(appStore.websiteConfig.websiteCreateTime).getTime()
      let msPerDay = 24 * 60 * 60 * 1000
      let daysold = Math.floor(timeold / msPerDay)
      let str = ''
      let day = new Date()
      str += daysold + '天'
      str += day.getHours() + '时'
      str += day.getMinutes() + '分'
      str += day.getSeconds() + '秒'
      websiteCreateTime.value = str
      viewCount.value = appStore.viewCount
      console.log(appStore.viewCount)
    }
    return {
      websiteCreateTime,
      viewCount,
      t
    }
  }
})
</script>
