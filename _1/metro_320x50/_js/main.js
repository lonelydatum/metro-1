import '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})

	tl.from('.t1', .5, { opacity: 0 }, '+=.3')
}

start()



module.exports = {};

