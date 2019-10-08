import '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})

	tl.from('.t1', .5, { opacity: 0 }, '+=.3')
	tl.to('.t1', .3, { opacity: 0 }, '+=1')



	tl.add('t3', "+=.3")
	tl.from('.t3a', .5, { opacity: 0 }, 't3')
	tl.from(['.logo_royal', '.logo_spot'], .3, { opacity: 0 } )

	

	tl.add('end', "+=3.2")
	tl.to('.logo_spot', .5, { y:"+=10", opacity: 0 }, 'end-=.2')
	tl.to('.t3a', .3, { y:0 }, "end")		
	tl.from('.cta', .5, { opacity: 0, y:"+=20" }, "end")	

	tl.from('.t3b', 1, {clip: `rect(0px 0px 500px 0px)`, ease:Power3.easeOut }, "+=.3")
}

start()



module.exports = {};

