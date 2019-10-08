


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})

	tl.from('.t1', .3, { opacity: 0 }, '+=.3')
	tl.to('.t1', .3, { opacity: 0 }, '+=1')



	tl.add('t3')
	tl.from('.t3a', .3, { opacity: 0 }, 't3')
	tl.from(['.logo_royal', '.logo_spot'], .3, { opacity: 0 }, 't3' )

	tl.from('.logo_spot', .3, { opacity: 0 }, "+=3")

	tl.add('t3b')
	tl.to('.t3a', .3, { y:0 }, "t3b")
	tl.from('.t3b', .3, { opacity: 0 }, "t3b")
	
	tl.from('.cta', .3, { opacity: 0, y:"+=20" }, "t3b")	
}

start()



module.exports = {};

