import axios from 'axios'
import { app } from '@/main'

axios.defaults.baseURL = 'http://api.icqcore.com/blog/api/web/'

axios.interceptors.request.use((config: any) => {
  const token = sessionStorage.getItem('token')
  if (token != null) config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
  return config
})

axios.interceptors.response.use(
  (response) => {
    switch (response.data.code) {
      case 50000:
        app.config.globalProperties.$notify({
          title: 'Error',
          message: '系统异常,请联系管理员',
          type: 'error'
        })
        break
      case 40001:
        app.config.globalProperties.$notify({
          title: 'Error',
          message: '用户未登录',
          type: 'error'
        })
        break
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default {
  getTopAndFeaturedArticles: () => {
    return axios.get('/articles/topAndFeatured')
  },
  getArticles: (params: any) => {
    return axios.get('/articles/all', { params: params })
  },
  getArticlesByCategoryId: (params: any) => {
    return axios.get('/articles/categoryId', { params: params })
  },
  getArticeById: (articleId: any) => {
    return axios.get('/articles/' + articleId)
  },
  getAllCategories: () => {
    return axios.get('/category/all')
  },
  getAllTags: () => {
    return axios.get('/tags/all')
  },
  getTopTenTags: () => {
    return axios.get('/tags/topTen')
  },
  getArticlesByTagId: (params: any) => {
    return axios.get('/articles/tagId', { params: params })
  },
  getAllArchives: (params: any) => {
    return axios.get('/articles/archives/all', { params: params })
  },
  login: (params: any) => {
    return axios.post('/users/login', params)
  },
  saveComment: (params: any) => {
    return axios.post('/comments/save', params)
  },
  getComments: (params: any) => {
    return axios.get('/comments', { params: params })
  },
  getTopSixComments: () => {
    return axios.get('/comments/topSix')
  },
  getAbout: () => {
    return axios.get('/about')
  },
  getFriendLink: () => {
    return axios.get('/links')
  },
  submitUserInfo: (params: any) => {
    return axios.put('/users/info', params)
  },
  getUserInfoById: (id: any) => {
    return axios.get('/users/info/' + id)
  },
  updateUserSubscribe: (params: any) => {
    return axios.put('/users/subscribe', params)
  },
  sendValidationCode: (username: any) => {
    return axios.get('/users/code', {
      params: {
        username: username
      }
    })
  },
  bindingEmail: (params: any) => {
    return axios.put('/users/email', params)
  },
  register: (params: any) => {
    return axios.post('/users/register', params)
  },
  searchArticles: (params: any) => {
    return axios.get('/articles/search', {
      params: params
    })
  },
  getAlbums: () => {
    return axios.get('/photos/albums')
  },
  getPhotosBuAlbumId: (albumId: any, params: any) => {
    return axios.get('/albums/' + albumId + '/photos', {
      params: params
    })
  },
  getWebsiteConfig: () => {
    return axios.get('/config')
  },
  qqLogin: (params: any) => {
    return axios.post('/users/oauth/qq', params)
  },
  report: () => {
    axios.post('/report')
  },
  getTalks: (params: any) => {
    return axios.get('/talks', {
      params: params
    })
  },
  getTalkById: (id: any) => {
    return axios.get('/talks/' + id)
  },
  logout: () => {
    return axios.post('/users/logout')
  },
  getRepliesByCommentId: (commentId: any) => {
    return axios.get(`/comments/${commentId}/replies`)
  },
  updatePassword: (params: any) => {
    return axios.put('/users/password', params)
  },
  accessArticle: (params: any) => {
    return axios.post('/articles/access', params)
  }
}
