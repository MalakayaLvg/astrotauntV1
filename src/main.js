import kaboom from "kaboom";

kaboom({

	background: [0, 0, 0, 1],
})


// ########################### SPRITE ################################
//
loadRoot('https://i.imgur.com/')
// loadSprite('astronaut','wunHyEq.png')
loadSprite('block','M6rwarW.png')
loadSprite('gun', '12IgStq.png')
loadSprite('enemy','KPO3fR9.png')

//Player
loadSprite("astro", "Q0FRlty.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 15,
	// Define animations
	anims: {
		"idle": 0,

		"run": {
			from: 0,
			to: 3,
			speed: 10,
			//loop: true,
		},
		// This animation only has 1 frame
		"jump": 8,
	},
})


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
					body({ isStatic: true }),
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

	// ######################## PLAYER #########################

	const SPEED = 120
	const JUMP_FORCE = 240
	setGravity(640)

	const player = add([
		sprite('astro'),
		scale(5),
		pos(0,0),
		area(),
		body(),
		setGravity(400),
	])

	//plateform

	add([
		rect(width(), 24),
		area(),
		outline(1),
		pos(0, height() - 24),
		body({ isStatic: true }),
	])


	//movement

	// Switch to "idle" or "run" animation when player hits ground
	player.onGround(() => {
		if (!isKeyDown("left") && !isKeyDown("right")) {
			player.play("idle")
		} else {
			player.play("run")
		}
	})

	onKeyPress("space", () => {
		if (player.isGrounded()) {
			player.jump(JUMP_FORCE)
			player.play("jump")
		}
	})


	onKeyDown("left", () => {
		player.move(-SPEED, 0)
		player.flipX = true
		// .play() will reset to the first frame of the anim, so we want to make sure it only runs when the current animation is not "run"
		if (player.isGrounded() && player.curAnim() !== "run") {
			player.play("run")
		}
	})

	onKeyDown("right", () => {
		player.move(SPEED, 0)
		player.flipX = false
		if (player.isGrounded() && player.curAnim() !== "run") {
			player.play("run")
		}
	})

	// #########################################################


})

go('game')