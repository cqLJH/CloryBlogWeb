<template>
  <div class="relative w-full mb-8 shadow-xl h-98 rounded-2xl" :style="gradientBackground">
    <div
      class="absolute flex items-center justify-center px-6 pt-4 duration-300 shadow-lg ob-gradient-cut-plate bg-ob-deep-900 rounded-xl opacity-90 hover:shadow-2xl"
      data-dia="author">
      <div class="absolute flex flex-col items-center justify-center w-full profile">
        <div class="flex flex-col items-center justify-center">
          <img v-if="websiteConfig.authorAvatar" :class="avatarClass" :src="websiteConfig.authorAvatar" />
          <img v-else :class="avatarClass" :src="default" />
          <h2 class="pt-4 text-4xl font-semibold text-center text-ob-bright">
            <template v-if="websiteConfig.author">
              {{ websiteConfig.author }}
            </template>
            <ob-skeleton v-else height="2.25rem" width="7rem" />
          </h2>
          <span class="h-1 mt-2 rounded-full w-14" :style="gradientBackground" />
          <p
            v-if="websiteConfig.authorIntro"
            class="w-full px-10 pt-6 text-center text-s"
            v-html="websiteConfig.authorIntro" />
          <p v-else class="flex flex-col w-full gap-2 px-10 pt-6 text-sm text-center">
            <ob-skeleton :count="2" height="20px" width="10rem" />
          </p>
        </div>
        <div class="flex flex-col items-end justify-end flex-1 w-full h-full">
          <Social />
          <ul class="grid w-full grid-cols-4 px-2 pt-4 text-lg">
            <li class="col-span-1 text-center">
              <span class="text-ob-bright">
                {{ articleCount }}
              </span>
              <p class="text-base">{{ t('settings.articles') }}</p>
            </li>
            <li class="col-span-1 text-center">
              <span class="text-ob-bright">{{ talkCount }}</span>
              <p class="text-base">{{ t('settings.talks') }}</p>
            </li>
            <li class="col-span-1 text-center">
              <span class="text-ob-bright">{{ categoryCount }}</span>
              <p class="text-base">{{ t('settings.categories') }}</p>
            </li>
            <li class="col-span-1 text-center">
              <span class="text-ob-bright">{{ tagCount }}</span>
              <p class="text-base">{{ t('settings.tags') }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app'
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import Social from '@/components/Social.vue'

export default defineComponent({
  name: 'Profile',
  components: { Social },
  setup() {
    const appStore = useAppStore()
    const { t } = useI18n()
    return {
      default: 'https://portrait.gitee.com/uploads/avatars/user/764/2292225_ljh1997_1578971144.png',
      avatarClass: computed(() => {
        return {
          'ob-avatar': true,
          [appStore.themeConfig.profile_shape]: true
        }
      }),
      themeConfig: computed(() => appStore.themeConfig),
      gradientBackground: computed(() => {
        return { background: appStore.themeConfig.header_gradient_css }
      }),
      websiteConfig: computed(() => {
        return appStore.websiteConfig
      }),
      articleCount: computed(() => appStore.articleCount),
      talkCount: computed(() => appStore.talkCount),
      categoryCount: computed(() => appStore.categoryCount),
      tagCount: computed(() => appStore.tagCount),
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.profile {
  top: -7%;
  height: 100%;
  max-height: 100%;
}
</style>
