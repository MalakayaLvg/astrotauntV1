import kaboom from "kaboom";

kaboom({

	background: [0, 0, 0, 1],
})


// ########################### SPRITE ################################
//
loadRoot('https://i.imgur.com/')
// loadSprite('mario','wunHyEq.png')
loadSprite('block','M6rwarW.png')
loadSprite('gun', '12IgStq.png')
loadSprite('enemy','KPO3fR9.png')


//image de fond :
loadSprite('bg', 'WtSop5r.png')

// NATAN

// loadSprite('astro', 'Q0FRlty.png')
// loadSprite('battery', 'bOX5EXQ.png')
// loadSprite('beam', 'fUwX4Jc.png')
// loadSprite('beamsocket', '8cT5Yhy.png')
// loadSprite('button', 'ThnSicB.png')
// loadSprite('crate', 'Uz51WxL.png')
// loadSprite('crate2', 'UPq5A74.png')
// loadSprite('droplets', 'r13H16o.png')
// loadSprite('dust', 'P0CwElc.png')
// loadSprite('editorblock', '8cM0Be2.png')
// loadSprite('explosion', 'NTmk76G.png')
// loadSprite('explosion2', 'lOrfZSj.png')
// loadSprite('jet', 'vaegfFS.png')
// loadSprite('jet2', 'qtajq2q.png')
// loadSprite('jet3', 'jtSXoc2.png')
// loadSprite('messagebox', 'gUvvVXW.png')
// loadSprite('pit', 'DFAfOnt.png')
// loadSprite('pod', 'fnH45mO.png')
// loadSprite('pod1', 'ylskanF.png')
// loadSprite('portrait', 'gXUjnJr.png')
// loadSprite('powerlight', 'uq3DEGN.png')
// loadSprite('rocks', 'QzTqlac.png')
// loadSprite('shipbits', 'oD1VIw6.png')
// loadSprite('smoke', 'sjIQbV0.png')
// loadSprite('socket', 'RhSljhH.png')
// loadSprite('thinfont', 'eSsbWN1.png')
// loadSprite('tiles', 'd87auk2.png')
// loadSprite('timerswitch', 'UGMGRMu.png')


// ########################### SCENE GAME ################################

scene("game",()=>{

    // ############## FULL SCREEN #############

    onKeyPress("f", (c) => {
        setFullscreen(!isFullscreen())
    })

    // ##########################################


	const imgLevelUn = add([
		sprite('bg'),
		scale(width() / 1920, height() /1080),
	])

	addLevel(
		[
			'                                               ',
			'                                               ',
			'       ================                        ',
			'                                               ',
			'                                               ',
			'                                               ',
			'                                               ',
			'        /                                      ',
			'        ==                                     ',
			'                                               ',
			'             &                  g          &   ',
			'====================  = =  ====================',


		],{
			tileWidth: 20,
			tileHeight: 20,
			tiles: {
				"=": () => [
					sprite("block"),
					area(),
				],
				"/": () => [
					sprite("gun"),
					area(),
					scale(0.02),
					'gun',
				],
				"&": () => [
					sprite("enemy"),
					area(),
					"danger",
				],
			}
		}
	)

	add([
		sprite('block')
	])


})

go('game')