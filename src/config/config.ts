/*
 * @Author: LJH 52238648+cqLJH@users.noreply.github.com
 * @Date: 2022-09-30 13:24:07
 * @LastEditors: LJH 52238648+cqLJH@users.noreply.github.com
 * @LastEditTime: 2022-09-30 13:33:59
 * @FilePath: \aurora-blog\src\config\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  captcha: {
    TENCENT_CAPTCHA: ''
  },
  qqLogin: {
    QQ_APP_ID: '',
    QQ_REDIRECT_URI: ''
  },
  routes: [
    {
      name: 'Home',
      path: '/',
      i18n: {
        cn: '首页',
        en: 'Home'
      },
      children: []
    },
    {
      name: 'Talks',
      path: '/talks',
      i18n: {
        cn: '说说',
        en: 'talks'
      },
      children: []
    },
    {
      name: 'Archives',
      path: '/archives',
      i18n: {
        cn: '归档',
        en: 'Archives'
      },
      children: []
    },
    {
      name: 'About',
      path: '/about',
      i18n: {
        cn: '关于',
        en: 'About'
      },
      children: []
    },
    {
      name: 'Tags',
      path: '/tags',
      i18n: {
        cn: '标签',
        en: 'Tags'
      },
      children: []
    },
    {
      name: 'Message',
      path: '/message',
      i18n: {
        cn: '留言',
        en: 'Message'
      },
      children: []
    },
    {
      name: 'Friends',
      path: '/friends',
      i18n: {
        cn: '友链',
        en: 'Friends'
      },
      children: []
    }
  ]
}
