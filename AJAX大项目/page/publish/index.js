/**
 * 目标1：设置频道下拉菜单
 *  1.1 获取频道列表数据
 *  1.2 展示到下拉菜单中
 */
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
 * 目标2：文章封面设置
 *  2.1 准备标签结构和样式
 *  2.2 选择文件并保存在 FormData
 *  2.3 单独上传图片并得到图片 URL 网址
 *  2.4 回显并切换 img 标签展示（隐藏 + 号上传标签）
 */

document.querySelector(".img-file").addEventListener('change', async function (e) {
  const file = e.target.files[0]
  const fd = new FormData()
  fd.append('image', file)
  const result = await axios({
    url: '/v1_0/upload',
    method: 'post',
    data: fd
  })
  document.querySelector('.rounded').src = result.data.url
  document.querySelector('.rounded').classList.add('show')
  document.querySelector('.place').classList.add('hide')
})
document.querySelector('.rounded').addEventListener('click', function () {
  document.querySelector('.img-file').click()
})

/**
 * 目标3：发布文章保存
 *  3.1 基于 form-serialize 插件收集表单数据对象
 *  3.2 基于 axios 提交到服务器保存
 *  3.3 调用 Alert 警告框反馈结果给用户
 *  3.4 重置表单并跳转到列表页
 */

document.querySelector('.send').addEventListener('click', async function (e) {
  if (e.target.innerHTML === '发布') {
    const form = serialize(document.querySelector('.art-form'), { hash: true, empty: true })

    try {
      const result = await axios({
        url: '/v1_0/mp/articles',
        method: 'post',
        data: {
          title: form.title,
          content: form.content,
          cover: {
            type: 1,
            images: [document.querySelector('.rounded').src]
          },
          channel_id: form.channel_id
        }
      })
      if (result.message === 'OK') {
        myAlert(true, '文章发布成功')

        document.querySelector('.art-form').reset()
        document.querySelector('.rounded').src = ''
        document.querySelector('.rounded').classList.remove('show')
        document.querySelector('.place').classList.remove('hide')

        editor.setHtml('')

        setTimeout(() => {
          location.href = '../content/index.html'
        }, 1500)
      }
    } catch (error) {
      myAlert(false, error.response.data.message)
    }
  }
})



/**
 * 目标4：编辑-回显文章
 *  4.1 页面跳转传参（URL 查询参数方式）
 *  4.2 发布文章页面接收参数判断（共用同一套表单）
 *  4.3 修改标题和按钮文字
 *  4.4 获取文章详情数据并回显表单
 */
const changeID = new URLSearchParams(location.search).get('id')
if (changeID) {
  axios({
    url: `/v1_0/mp/articles/${changeID}`,
    method: 'get'
  }).then(result => {
    document.querySelector('.title span').innerHTML = '修改文章'
    document.querySelector('.send').innerHTML = '修改'

    document.querySelector('.form-control').value = result.data.title
    document.querySelector('.form-select').value = result.data.channel_id
    editor.setHtml(result.data.content)
    document.querySelector('.publish-content').innerHTML = result.data.content

    if (result.data.cover.images[0]) {
      document.querySelector('.rounded').src = result.data.cover.images[0]
      document.querySelector('.rounded').classList.add('show')
      document.querySelector('.place').classList.add('hide')
    }

  }
  ).catch(error => {
    console.dir(error)
  })
}

/**
 * 目标5：编辑-保存文章
 *  5.1 判断按钮文字，区分业务（因为共用一套表单）
 *  5.2 调用编辑文章接口，保存信息到服务器
 *  5.3 基于 Alert 反馈结果消息给用户
 */



document.querySelector('.send').addEventListener('click', async (e) => {
  if (e.target.innerHTML === '修改') {
    const form = serialize(document.querySelector('.art-form'), { hash: true, empty: true })
    console.log(form)
    try {
      const result = await axios({
        url: `/v1_0/mp/articles/${new URLSearchParams(location.search).get('id')}`,
        method: 'put',
        data: {
          title: form.title,
          content: form.content,
          cover: {
            type: document.querySelector('.rounded').src === '' ? 0 : 1,
            images: [document.querySelector('.rounded').src]
          },
          channel_id: form.channel_id
        }
      })

      if (result.message === 'OK') {
        myAlert(true, '文章修改成功')

        document.querySelector('.art-form').reset()
        document.querySelector('.rounded').src = ''
        document.querySelector('.rounded').classList.remove('show')
        document.querySelector('.place').classList.remove('hide')

        editor.setHtml('')

        setTimeout(() => {
          location.href = '../content/index.html'
        }, 1500)
      }
    } catch (error) {
      myAlert(false, error.response.data.message)
    }
  }
})
