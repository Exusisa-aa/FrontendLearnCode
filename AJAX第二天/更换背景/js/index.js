/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */

document.querySelector(".bg-ipt").addEventListener('change', function (e) {
  const fd = new FormData()
  fd.append('img', e.target.files[0])
  axios({
    url: "https://hmajax.itheima.net/api/uploadimg",
    method: "post",
    data: fd
  }).then(result => {
    document.body.style.backgroundImage = `url(${result.data.data.url})`
    localStorage.setItem('bgtest', result.data.data.url)
  })
})

if (localStorage.getItem('bgtest') !== null) {
  document.body.style.backgroundImage = `url(${localStorage.getItem('bgtest')})`
}