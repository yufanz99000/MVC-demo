import $ from 'jquery'
import './app4.css'

const $circle = $('.circle')

$circle.on('mouseenter', ()=>{
    $circle.addClass('active')
}).on('mouseleave', ()=> {
    $circle.removeClass('active')
})