天气查询案例



服务器提供天气网址：(https://www.apifox.cn/apidoc/docs-site/1937884/doc-1695440)



使用到的两个接口：获取天气：https://hmajax.itheima.net/api/weather

                                    搜索：https://hmajax.itheima.net/api/weather/city



代码风格极简化，以下讲讲大概实现：



        reset.css:   css初始化代码



        index.css:  媒体查询＋rem格式的布局，整个页面的单位rem根据font-size的大小来变动，font-size的大小又根据媒体查询来变动，从而实现移动端的适配和栅格式布局，在媒体查询中，用important最高权重来强制修改样式



        index.html:简单的布局，没啥说的



        search.js:代表搜索框的使用特性，1.有内容输入则让搜索框的结果显现，并展示从服务器获得的搜索结果

                                                                    2.无内容则关闭搜索框的结果

                                                                    3.失焦后保持500ms再消失

                                                                    4.若搜索框本来就有内容，聚焦时显现搜索结果



        my-axios.js:自己封装的从服务器获得数据的方法：方案一：axios(myAxios)  方案二：jquery(Axios)

                            这两种方案都接收一个对象，并返回promise对象

                            参数有：URL地址  params(请求方法为get时的参数)  data(请求方法为post时的参数，此时还要设置请求头Content-Type为application/json) 

                            状态码status：若为200到300之间则成功获取数据，其他则表示失败，并返回Error对象



        index.js:render渲染方法:需要一个城市的代号，可以从服务器获取，成功获取数据后在then()中异步处理获取的结果result，并将result结果按json格式封装在本地localStorage中        result.data.data是一大串json，其中包含该城市7天的天气数据，有存在对象套对象的情况，故用多个For循环遍历并赋予给html，避免使用字符串渲染，更有拓展性      由于result.data.data中的数据的名字和html标签的类名大部分一致且一一对应，故直接在For循环中将对应名字的数据赋予给对应类名的dom对象的innerHTML

                        搜索：搜索后，从服务器返回的数据会以li标签的形式插入搜索结果中，并且赋予该标签对应城市的代号(data-code)，方便在点击时取出

                        点击搜索结果后，用e.target.dataset.code获取代号，放入render（）方法中完成重新渲染



                        注：由于result已获得数据，存入localStorage不必再次取出，若要取出。可以使用JSON.parse(localStorage.getItem("cityWeather"))将数据取出渲染，但result结果就在面前，没有必要执行取出这一步，有这个东西存在单纯只是为了加分，且从服务器得到的数据是最新的实时更新的，自己写还要每天改，没必要
