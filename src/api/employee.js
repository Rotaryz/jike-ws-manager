import http from '../common/js/http'
import {commonParams} from './config'

export default {
  /**
   * 获取员工列表
   * @param data
   * @returns {*}
   */
  userList (data) {
    let url = 'api/merchant/user-list'
    return http.get(url, Object.assign({}, data, commonParams))
  },
  /**
   * 获取员工列表
   * @param data
   * @returns {*}
   */
  syncUser () {
    let url = 'api/merchant/sync-user'
    return http.get(url, commonParams)
  },
  /**
   * 获取员工列表
   * @param data
   * @returns {*}
   */
  createcUser (data) {
    let url = 'api/merchant/create-user'
    return http.post(url, Object.assign({}, data, commonParams))
  },
  /**
   * 获取员工列表
   * @param data
   * @returns {*}
   */
  getUser (data) {
    let url = 'api/merchant/get-user'
    return http.get(url, Object.assign({}, data, commonParams))
  },
  /**
   * 获取员工列表
   * @param data
   * @returns {*}
   */
  updateUser (data) {
    let url = 'api/merchant/update-user'
    return http.put(url, Object.assign({}, data, commonParams))
  },
  /**
   * 删除员工
   * @param data
   * @returns {*}
   */
  deleteUser (data) {
    let url = 'api/merchant/delete-user'
    return http.delete(url, Object.assign({}, data, commonParams))
  },
  /**
   * AI雷达开关
   * @param data
   * @returns {*}
   */
  aiRadarChange (data) {
    let url = 'api/merchant/ai-radar-change'
    return http.get(url, Object.assign({}, data, commonParams))
  },
  /**
   * AI雷达开关
   * @param data
   * @returns {*}
   */
  bossRadarChange (data) {
    let url = 'api/merchant/boss-radar-change'
    return http.get(url, Object.assign({}, data, commonParams))
  }
}
