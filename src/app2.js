import $ from 'jquery'
import './app2.css'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e)=> {
    //console.log(e.currentTarget) //用户点击的元素
    const $li = $(e.currentTarget) //获取jquery元素

    $li.addClass('selected')
        .siblings().removeClass('selected')

    const index = $li.index()
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    //eq是等于第几个 eq（index）找第index个
})

$tabBar.children().eq(0).trigger('click')
//在初始状态下设置第一个tabbar为click的状态