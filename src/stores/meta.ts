/*
 * @Author: LJH 52238648+cqLJH@users.noreply.github.com
 * @Date: 2022-09-30 13:24:07
 * @LastEditors: LJH 52238648+cqLJH@users.noreply.github.com
 * @LastEditTime: 2022-09-30 13:29:19
 * @FilePath: \aurora-blog\src\stores\meta.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { i18n } from '@/locales/index'

export const useMetaStore = defineStore('metaStore', {
  state: () => {
    return {
      title: '旧时光°'
    }
  },
  actions: {
    setTitle(title: string): void {
      this.title = i18n.global.te(`menu.${title}`) ? i18n.global.t(`menu.${title}`) : title
    }
  }
})
