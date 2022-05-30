// header
function navbar() {
    var x = document.getElementById('nav')
    var y = document.getElementById('navopen')
    var z = document.getElementById('navclose')
    if (x.style.display == 'none') {
        x.style.display = 'flex'
        y.style.display = 'none'
        z.style.display = 'inline-block'
    } else {
        x.style.display = 'none'
        y.style.display = 'inline-block'
        z.style.display = 'none'
    }
}




// home->banner
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