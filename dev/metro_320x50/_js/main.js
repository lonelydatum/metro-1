import {size} from '../../_common/js/common.js'

console.log(size);

function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	const w = size.w * 2
	const h = size.h * 2

		


	
	tl.from('.logos', .7, { opacity: 0 }, 'start')
	
	

	
	tl.from('.cta', .5, { opacity: 0, y:"+=15" }, "end")	

	
}

start()



module.exports = {};

