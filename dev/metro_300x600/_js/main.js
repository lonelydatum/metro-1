import {size} from '../../_common/js/common.js'

console.log(size);

function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	const w = size.w * 2
	const h = size.h * 2

	const tl_border = new TimelineMax()

	const BORDER_TIME = .2
	tl_border.from('.border_1', BORDER_TIME, { clip: `rect(0px ${w}px ${h}px ${w}px)`, ease:Linear.easeNone })
	tl_border.from('.border_2', BORDER_TIME, { clip: `rect(${h}px ${h}px ${w}px 0px)`, ease:Linear.easeNone })
	tl_border.from('.border_3', BORDER_TIME, { clip: `rect(0px 0px ${h}px 0px)`, ease:Linear.easeNone })
	tl_border.from('.border_4', BORDER_TIME, { clip: `rect(0px ${w}px 0px 0px)`, ease:Linear.easeNone })


	


	tl.add('start', .8)
	tl.from('.logo_metro', .7, { opacity: 0 }, 'start')
	tl.from('.line_hor', .7, { clip: `rect(0px 0px ${h}px 0px)`, ease:Power2.easeOut }, 'start')
	tl.from('.logo_ls', .3, { opacity: 0 })
	tl.from('.logo_royal', .5, { opacity: 0 }, '+=.3')
	// tl.to(".f1", .35, {opacity:0}, '+=1.2')

	tl.from('.t1', .5, { opacity: 0 }, '+=.3')
	tl.to('.t1', .3, { opacity: 0 }, '+=2')
	tl.from('.t2', .5, { opacity: 0 })	
	// tl.to('.f2', .3, { opacity: 0 }, '+=3.4')



	
	
	// tl.from('.logos', .3, { opacity: 0 } )


	

	
	tl.from('.cta', .5, { opacity: 0, y:"+=20" }, "end")	

	
}

start()



module.exports = {};

