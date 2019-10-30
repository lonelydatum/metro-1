import '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})

	tl.from('.logo_metro', .3, { opacity: 0 })
	// tl.from('.line_hor', .5, { opacity: 0 })
	tl.from('.logo_ls', .3, { opacity: 0 }, "+=.2")
	tl.to(".f1", .35, {opacity:0}, '+=1.5')



	tl.from('.t1', .5, { opacity: 0 }, '+=.3')

	tl.to('.t1', .3, { opacity: 0 }, '+=2')

	tl.from('.t2', .5, { opacity: 0 })
	tl.from('.logo_royal', .5, { opacity: 0 }, '+=.3')
	tl.to('.f2', .3, { opacity: 0 }, '+=4')



	
	
	tl.from('.logos', .3, { opacity: 0 } )


	

	
	tl.from('.cta', .5, { opacity: 0, y:"+=20" }, "end")	

	
}

start()



module.exports = {};

