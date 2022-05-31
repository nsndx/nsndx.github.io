// header
var x = document.querySelector('.nav')
var y = document.querySelector('.fa-bars')
var z = document.querySelector('.fa-xmark')
var btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    if (x.style.display == 'flex') {
        x.style.display = 'none'
        y.style.display = 'block'
        z.style.display = 'none'
    } else{        
        x.style.display = 'flex'
        y.style.display = 'none'
        z.style.display = 'block'
    }
})


// carousel
function clock() {
    var time = new Date()
    var day = time.getDay() + 1
    var date = time.getDate()
    var month = time.getMonth() + 1
    var year = time.getFullYear()
    var hours = time.getHours()
    var mimutes = time.getMinutes()
    var seconds = time.getSeconds()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (mimutes < 10) {
        mimutes = '0' + mimutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    document.getElementById('hours').innerHTML = hours + ':' + mimutes + ':' + seconds + 's'

    if (day == 1) {
        day = 'Chủ nhật'
        document.getElementById('day').innerHTML = day + ', ' + 'Ngày ' + date + ', ' + 'Tháng ' + month + ', ' + 'Năm ' + year
    } else {
        document.getElementById('day').innerHTML = 'Thứ ' + day + ', ' + 'Ngày ' + date + ', ' + 'Tháng ' + month + ', ' + 'Năm ' + year
    }

    setInterval(clock, 1000)
}
clock()