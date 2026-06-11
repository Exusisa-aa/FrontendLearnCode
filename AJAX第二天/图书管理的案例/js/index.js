/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

const creator = "老张"
function renderBookList() {
  axios({
    url: "https://hmajax.itheima.net/api/books",
    params: {
      creator: creator
    }
  }).then(result => {
    document.querySelector(".list").innerHTML = result.data.data.map((item, index) => {
      return `
      <tr>
          <td>${index + 1}</td>
          <td>${item.bookname}</td>
          <td>${item.author}</td>
          <td>${item.publisher}</td>
          <td data-id=${item.id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
       </tr>   `
    }).join('')
  })
}

renderBookList()

document.querySelector(".add-btn").addEventListener("click", function () {
  const addForm = document.querySelector(".add-form")
  const data = serialize(addForm, { hash: true, empty: true })
  const { bookname, author, publisher } = data
  const addModalDom = document.querySelector(".add-modal")
  const addModal = new bootstrap.Modal(addModalDom)

  axios({
    url: "https://hmajax.itheima.net/api/books",
    method: "post",
    data: {
      bookname: bookname,
      author: author,
      publisher: publisher,
      creator: creator
    }
  }).then(() => {
    renderBookList()
    addForm.reset()
    addModal.hide()
  })
})

document.querySelector(".list").addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    axios({
      url: `https://hmajax.itheima.net/api/books/${e.target.parentNode.dataset.id}`,
      method: "delete"
    }).then(() => {
      renderBookList()
    })
  }
})

const editModalDom = document.querySelector(".edit-modal")
const editModal = new bootstrap.Modal(editModalDom)
document.querySelector(".list").addEventListener("click", function (e) {
  if (e.target.classList.contains("edit")) {
    axios({
      url: `https://hmajax.itheima.net/api/books/${e.target.parentNode.dataset.id}`,
      method: "get"
    }).then(result => {
      for (let key in result.data.data) {
        editModalDom.querySelector(`[name=${key}]`).value = result.data.data[key]
      }
    })
    editModal.show()
  }
})



document.querySelector(".edit-btn").addEventListener("click", function () {
  const eForm = document.querySelector(".edit-form")
  const eForms = serialize(eForm, { hash: true, empty: true })
  axios({
    url: `https://hmajax.itheima.net/api/books/${eForms.id}`,
    method: "put",
    data: {
      bookname: eForms.bookname,
      author: eForms.author,
      publisher: eForms.publisher,
      creator: creator
    }
  }).then(() => {
    renderBookList()
    editModal.hide()
  })
})

