<!--
 * @Author: LJH 52238648+cqLJH@users.noreply.github.com
 * @Date: 2022-09-30 13:38:21
 * @LastEditors: LJH 52238648+cqLJH@users.noreply.github.com
 * @LastEditTime: 2022-11-04 14:27:51
 * @FilePath: \BlogWeb\src\components\Sidebar\src\TagBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="sidebar-box">
    <SubTitle :title="'titles.tag_list'" icon="tag" />
    <TagList>
      <template v-if="tags != '' && tags.length > 0">
        <TagItem v-for="tag in tags" :key="tag.id" :id="tag.id" :name="tag.tagName" :count="tag.articleCount" size="xs" />
        <div class="flex flex-row items-center mb-2 mr-2 transition-all cursor-pointer hover:opacity-50">
          <span class="px-3 py-1 text-sm text-center rounded-md">
            <b class="border-b-2 border-ob hover:text-ob">
              <router-link to="/tags"> {{ t('settings.more-tags') }} ... </router-link>
            </b>
          </span>
        </div>
      </template>
    </TagList>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRef } from 'vue'
import { SubTitle } from '@/components/Title'
import { useTagStore } from '@/stores/tag'
import { TagList, TagItem } from '@/components/Tag'
import { useI18n } from 'vue-i18n'
import api from '@/api/api'

export default defineComponent({
  name: 'ObTag',
  components: { SubTitle, TagList, TagItem },
  setup() {
    const tagStore = useTagStore()
    const { t } = useI18n()
    onMounted(() => {
      fetchTopTenTags()
    })
    const fetchTopTenTags = () => {
      api.getTopTenTags().then(({ data }) => {
        tagStore.homeTags = data
      })
    }
    return {
      tags: toRef(tagStore.$state, 'homeTags'),
      t
    }
  }
})
</script>

<style lang="scss">
.sidebar-box li.ob-skeleton {
  @apply mr-2 mb-2;
}
</style>
