import axios from 'axios'
import "@/content/index.css"
import "@/utils/request.js"
import "@/utils/auth.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

async function getChannels() {
  const chs = await axios({
    url: '/v1_0/channels',
    method: 'get'
  })
  document.querySelector('.form-select').innerHTML = `<option value="" selected>请选择文章频道</option>` + chs.data.channels.map(
    item => {
      return `<option value="${item.id}">${item.name}</option>`
    }
  ).join('')
}
getChannels()
/**
 * 目标1：获取文章列表并展示
 *  1.1 准备查询参数对象
 *  1.2 获取文章列表数据
 *  1.3 展示到指定的标签结构中
 */
const queryObj = {
  status: '',
  channel_id: '',
  page: '1',
  per_page: '10'
}
let totalCount = 0
async function renderList() {
  const result = await axios({
    url: '/v1_0/mp/articles',
    method: 'get',
    params: queryObj
  })
  totalCount = result.data.total_count
  document.querySelector('.total-count').innerHTML = `共${totalCount}条`
  document.querySelector('.art-list').innerHTML = result.data.results.map(item => {
    return `
              <tr>
                <td>
                  <img
                    src=${item.cover.images[0]}
                    alt="">
                </td>
                <td>${item.title}</td>
                <td>
                  ${item.status === 2 ? `<span class="badge text-bg-success">审核通过</span>` : `<span class="badge text-bg-primary">待审核</span>`}
                </td>
                <td>
                  <span>${item.pubdate}</span>
                </td>
                <td>
                  <span>${item.read_count}</span>
                </td>
                <td>
                  <span>${item.comment_count}</span>
                </td>
                <td>
                  <span>${item.like_count}</span>
                </td>
                <td data-id="${item.id}">
                  <i class="bi bi-pencil-square edit"></i>
                  <i class="bi bi-trash3 del"></i>
                </td>
              </tr>
    `
  }).join('')
}
renderList()

/**
 * 目标2：筛选文章列表
 *  2.1 设置频道列表数据
 *  2.2 监听筛选条件改变，保存查询信息到查询参数对象
 *  2.3 点击筛选时，传递查询参数对象到服务器
 *  2.4 获取匹配数据，覆盖到页面展示
 */
document.querySelectorAll('.form-check-input').forEach(i => {
  i.addEventListener('change', function (e) {
    queryObj.status = e.target.value
  })
})
document.querySelector('.form-select').addEventListener('change', function (e) {
  queryObj.channel_id = e.target.value
})
document.querySelector('.sel-btn').addEventListener('click', function () {
  renderList()
})

/**
 * 目标3：分页功能
 *  3.1 保存并设置文章总条数
 *  3.2 点击下一页，做临界值判断，并切换页码参数并请求最新数据
 *  3.3 点击上一页，做临界值判断，并切换页码参数并请求最新数据
 */
document.querySelector('.next').addEventListener('click', function () {
  if (queryObj.page < Math.ceil(totalCount / queryObj.per_page)) {
    queryObj.page++
    document.querySelectorAll('.page-item')[1].innerHTML = `第${queryObj.page}页`
    renderList()
  }
})
document.querySelector('.last').addEventListener('click', function () {
  if (queryObj.page > 1) {
    queryObj.page--
    document.querySelectorAll('.page-item')[1].innerHTML = `第${queryObj.page}页`
    renderList()
  }
})

/**
 * 目标4：删除功能
 *  4.1 关联文章 id 到删除图标
 *  4.2 点击删除时，获取文章 id
 *  4.3 调用删除接口，传递文章 id 到服务器
 *  4.4 重新获取文章列表，并覆盖展示
 *  4.5 删除最后一页的最后一条，需要自动向前翻页
 */
document.querySelector('.art-list').addEventListener('click', async function (e) {
  if (e.target.classList.contains('del')) {
    const result = await axios({
      url: `/v1_0/mp/articles/${e.target.parentNode.dataset.id}`,
      method: 'delete'
    })
    if (result.message === 'OK') {
      if (document.querySelectorAll('.art-list tr').length === 1 && queryObj.page !== 1) {
        queryObj.page--
        document.querySelectorAll('.page-item')[1].innerHTML = `第${queryObj.page}页`
      }

      renderList()
    }
  }
})

// 点击编辑时，获取文章 id，跳转到发布文章页面传递文章 id 过去
document.querySelector('.art-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('edit')) {
    location.href = `../publish/index.html?id=${e.target.parentNode.dataset.id}`
  }
})

document.querySelector('.quit').addEventListener('click', function () {
  localStorage.clear()
  location.href = '../login/index.html'
})


