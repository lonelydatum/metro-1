import '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})

	tl.from('.t1a', .5, { opacity: 0 }, '+=.2')
	tl.from('.t1b', .3, { opacity: 0 }, '+=.4')
	tl.to('.t1', .3, { opacity: 0 }, '+=1')




	tl.add('t3', "+=.3")
	tl.from('.t3a', .5, { opacity: 0 }, 't3')
	tl.from(['.logo_royal', '.logo_spot'], .3, { opacity: 0 } )

	

	tl.add('end', "+=1.7")
	tl.from('.cta', .5, { opacity: 0, y:"+=20" }, "end")	
	tl.from('.t3b', 1, {clip: `rect(0px 0px 1200px 0px)`, ease:Power3.easeOut }, "+=.3")
}

start()



module.exports = {};

