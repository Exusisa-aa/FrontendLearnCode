// 富文本编辑器
// 创建编辑器函数，创建工具栏函数
const { createEditor, createToolbar } = window.wangEditor

//编辑器配置对象
const editorConfig = {
  //占位提示文字
  placeholder: '输入文章内容...',
  //编辑器变化时触发的回调函数
  onChange(editor) {
    //获取富文本内容
    const html = editor.getHtml()
    console.log('editor content', html)
    // 也可以同步到 <textarea>
    //为后续serialize获取整个表单数据做铺垫
    document.querySelector('.publish-content').value = html
  },
}

//创建编辑器
const editor = createEditor({
  //指定创建位置
  selector: '#editor-container',
  //文本的默认内容
  html: '<p><br></p>',
  //配置顶
  config: editorConfig,
  //配置集成模式（default全部  or  simple简单）
  mode: 'default', // or 'simple'
})

//工具栏配置对象，在这里自由配置工具栏
const toolbarConfig = {}

//创建工具栏
const toolbar = createToolbar({
  //关联指定编辑器
  editor,
  //指定创建位置
  selector: '#toolbar-container',
  //工具栏配置对象
  config: toolbarConfig,
  //集成模式（default全部  or  simple简单）
  mode: 'default', // or 'simple'
})