import '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})

	tl.from('.t1', .5, { opacity: 0 }, '+=.3')
	tl.to('.t1', .3, { opacity: 0 }, '+=1')



	tl.add('t3', "+=.3")
	tl.from( ['.t3a', '.logo_ls', '.line_ver', '.logo_spot'], .5, { opacity: 0 }, 't3')
	


	tl.add('t3b', "+=2")
	tl.from('.logo_spot', .5, { opacity: 0 }, "t3b" )
	tl.from( ['.line_ver2', '.t3b'], .5, { opacity: 0 } )
	tl.from('.cta', .5, { opacity: 0 }, "+=.1" )
	// logo_spot


}

start()



module.exports = {};

