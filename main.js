let cuteBudd = document.getElementById('cuteBuddy')
let frameno = 1
setInterval(() => {
    if (frameno === 1) {
        cuteBudd.src = 'res/frame1-min.png'
    }
    if (frameno === 2) {
        cuteBudd.src = 'res/frame2-min.png'
    }
    if (frameno === 3) {
        cuteBudd.src = 'res/frame1-min.png'
    }
    if (frameno === 4) {
        cuteBudd.src = 'res/frame2-min.png'
    }
    if (frameno === 5) {
        cuteBudd.src = 'res/frame3-min.png'
        frameno = 0
    }
    frameno += 1
}, 1000)