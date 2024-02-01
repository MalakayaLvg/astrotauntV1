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
loadSprite('ghosty','KPO3fR9.png')


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
// loadSprite('timerswitch', 'UGMGRMu.png')

loadSprite('map', 'd87auk2.png',{
	sliceX:20,
	sliceY:20,
})
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
	const level1 = [
		addLevel(
			[
				'           a      h                              ',
				'            b      i                             ',
				'             c      j                        ',
				'              d      k                           ',
				'               e      l                          ',
				'                r      m                         ',
				'                f       n                       ',
				'         /       g                             ',
				'        ==        ===                         ',
				'                                               ',
				'                               g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					/////////////// /FOND BLEU ///////////////////////

					"a": () => [sprite("map", {frame:0}),scale(5)],
					"b": () => [sprite("map", {frame:1}),scale(5)],
					"c": () => [sprite("map", {frame:2}),scale(5)],
					"d": () => [sprite("map", {frame:3}),scale(5)],
					"e": () => [sprite("map", {frame:4}),scale(5)],
					"f": () => [sprite("map", {frame:5}),scale(5)],
					"g": () => [sprite("map", {frame:6}),scale(5)],
					"h": () => [sprite("map", {frame:7}),scale(5)],
					"i": () => [sprite("map", {frame:8}),scale(5)],
					"j": () => [sprite("map", {frame:9}),scale(5)],
					"k": () => [sprite("map", {frame:10}),scale(5)],
					"l": () => [sprite("map", {frame:11}),scale(5)],
					"m": () => [sprite("map", {frame:12}),scale(5)],
					"n": () => [sprite("map", {frame:20}),scale(5)],
					"o": () => [sprite("map", {frame:21}),scale(5)],
					"p": () => [sprite("map", {frame:22}),scale(5)],
					"q": () => [sprite("map", {frame:23}),scale(5)],
					"r": () => [sprite("map", {frame:24}),scale(5)],
					"s": () => [sprite("map", {frame:25}),scale(5)],
					"t": () => [sprite("map", {frame:26}),scale(5)],
					"u": () => [sprite("map", {frame:27}),scale(5)],
					"v": () => [sprite("map", {frame:28}),scale(5)],
					"w": () => [sprite("map", {frame:29}),scale(5)],
					"x": () => [sprite("map", {frame:30}),scale(5)],
					"y": () => [sprite("map", {frame:31}),scale(5)],
					"!": () => [sprite("map", {frame:40}),scale(5)],
					":": () => [sprite("map", {frame:41}),scale(5)],
					";": () => [sprite("map", {frame:42}),scale(5)],
					"*": () => [sprite("map", {frame:43}),scale(5)],
					"ù": () => [sprite("map", {frame:44}),scale(5)],
					"$": () => [sprite("map", {frame:45}),scale(5)],


					"/": () => [
						sprite("gun"),
						area(),
						body({ isStatic: true }),
						scale(1),
						'gun',]
				},
			}),
		addLevel(
			[
				'                                           ',
				'                                               ',
				'                                           ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'a      abcdefgh                         g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					//////////////// PLATEFORM ///////////////////////

					"a": () => [sprite("map", {frame:33}),scale(5), area(),body({isStatic:true}) ],
					"b": () => [sprite("map", {frame:34}),scale(5), area(),body({isStatic:true}) ],
					"c": () => [sprite("map", {frame:52}),scale(5), area(),body({isStatic:true}) ],
					"d": () => [sprite("map", {frame:53}),scale(5), area(),body({isStatic:true}) ],
					"e": () => [sprite("map", {frame:54}),scale(5), area(),body({isStatic:true}) ],
					"f": () => [sprite("map", {frame:180}),scale(5), area(),body({isStatic:true}) ],
					"g": () => [sprite("map", {frame:181}),scale(5), area(),body({isStatic:true}) ],
					"h": () => [sprite("map", {frame:182}),scale(5), area(),body({isStatic:true}) ],
					"i": () => [sprite("map", {frame:183}),scale(5), area(),body({isStatic:true}) ],
					"j": () => [sprite("map", {frame:184}),scale(5), area(),body({isStatic:true}) ],
					"k": () => [sprite("map", {frame:185}),scale(5), area(),body({isStatic:true}) ],
					"l": () => [sprite("map", {frame:186}),scale(5), area(),body({isStatic:true}) ],
					"m": () => [sprite("map", {frame:187}),scale(5), area(),body({isStatic:true}) ],
					"n": () => [sprite("map", {frame:188}),scale(5), area(),body({isStatic:true}) ],
					"o": () => [sprite("map", {frame:189}),scale(5), area(),body({isStatic:true}) ],
					"p": () => [sprite("map", {frame:190}),scale(5), area(),body({isStatic:true}) ],
				},
			}),
		addLevel(
			[
				'                              a                              ',
				'                           b                            ',
				'                          c                        ',
				'                        d                          ',
				'                      e                                ',
				'                     r                        ',
				'                                j                      ',
				'         /       g                             ',
				'        ==        ===                         ',
				'                                               ',
				'                               g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					///////////////  DECORATION BLEU  ///////////////////////

					"a": () => [sprite("map", {frame:13}),scale(5)],
					"b": () => [sprite("map", {frame:14}),scale(5)],
					"c": () => [sprite("map", {frame:15}),scale(5)],
					"d": () => [sprite("map", {frame:16}),scale(5)],
					"e": () => [sprite("map", {frame:17}),scale(5)],
					"f": () => [sprite("map", {frame:18}),scale(5)],
					"g": () => [sprite("map", {frame:19}),scale(5)],
					"h": () => [sprite("map", {frame:33}),scale(5)],
					"i": () => [sprite("map", {frame:34}),scale(5)],
					"j": () => [sprite("map", {frame:35}),scale(5)],
					"k": () => [sprite("map", {frame:36}),scale(5)],
					"l": () => [sprite("map", {frame:37}),scale(5)],
					"m": () => [sprite("map", {frame:38}),scale(5)],
					"n": () => [sprite("map", {frame:39}),scale(5)],
					"o": () => [sprite("map", {frame:52}),scale(5)],
					"p": () => [sprite("map", {frame:53}),scale(5)],
					"q": () => [sprite("map", {frame:54}),scale(5)],
					"r": () => [sprite("map", {frame:55}),scale(5)],
					"s": () => [sprite("map", {frame:56}),scale(5)],
					"t": () => [sprite("map", {frame:57}),scale(5)],
					"u": () => [sprite("map", {frame:58}),scale(5)],
					"v": () => [sprite("map", {frame:59}),scale(5)],
				},
			})
	]
	const level2 = [
		addLevel(
			[
				'           a      h                              ',
				'            b      i                             ',
				'             c      j                        ',
				'              d      k                           ',
				'               e      l                          ',
				'                r      m                         ',
				'                f       n                       ',
				'         /       g                             ',
				'        ==        ===                         ',
				'                                               ',
				'                               g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					/////////////// /FOND ORANGE ///////////////////////

					"a": () => [sprite("map", {frame:60}),scale(5)],
					"b": () => [sprite("map", {frame:61}),scale(5)],
					"c": () => [sprite("map", {frame:62}),scale(5)],
					"d": () => [sprite("map", {frame:63}),scale(5)],
					"e": () => [sprite("map", {frame:64}),scale(5)],
					"f": () => [sprite("map", {frame:65}),scale(5)],
					"g": () => [sprite("map", {frame:66}),scale(5)],
					"h": () => [sprite("map", {frame:67}),scale(5)],
					"i": () => [sprite("map", {frame:68}),scale(5)],
					"j": () => [sprite("map", {frame:69}),scale(5)],
					"k": () => [sprite("map", {frame:70}),scale(5)],
					"l": () => [sprite("map", {frame:71}),scale(5)],
					"m": () => [sprite("map", {frame:72}),scale(5)],
					"n": () => [sprite("map", {frame:80}),scale(5)],
					"o": () => [sprite("map", {frame:81}),scale(5)],
					"p": () => [sprite("map", {frame:82}),scale(5)],
					"q": () => [sprite("map", {frame:83}),scale(5)],
					"r": () => [sprite("map", {frame:84}),scale(5)],
					"s": () => [sprite("map", {frame:85}),scale(5)],
					"t": () => [sprite("map", {frame:86}),scale(5)],
					"u": () => [sprite("map", {frame:87}),scale(5)],
					"v": () => [sprite("map", {frame:88}),scale(5)],
					"w": () => [sprite("map", {frame:89}),scale(5)],
					"x": () => [sprite("map", {frame:90}),scale(5)],
					"y": () => [sprite("map", {frame:91}),scale(5)],
				},
			}),
		addLevel(
			[
				'                                           ',
				'                                               ',
				'                                           ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'a      abcdefgh                         g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					//////////////// PLATEFORM ORANGE ///////////////////////

					"a": () => [sprite("map", {frame:93}),scale(5), area(),body({isStatic:true}) ],
					"b": () => [sprite("map", {frame:94}),scale(5), area(),body({isStatic:true}) ],
					"c": () => [sprite("map", {frame:112}),scale(5), area(),body({isStatic:true}) ],
					"d": () => [sprite("map", {frame:113}),scale(5), area(),body({isStatic:true}) ],
					"e": () => [sprite("map", {frame:114}),scale(5), area(),body({isStatic:true}) ],
					"f": () => [sprite("map", {frame:200}),scale(5), area(),body({isStatic:true}) ],
					"g": () => [sprite("map", {frame:201}),scale(5), area(),body({isStatic:true}) ],
					"h": () => [sprite("map", {frame:202}),scale(5), area(),body({isStatic:true}) ],
					"i": () => [sprite("map", {frame:203}),scale(5), area(),body({isStatic:true}) ],
					"j": () => [sprite("map", {frame:204}),scale(5), area(),body({isStatic:true}) ],
					"k": () => [sprite("map", {frame:205}),scale(5), area(),body({isStatic:true}) ],
					"l": () => [sprite("map", {frame:206}),scale(5), area(),body({isStatic:true}) ],
					"m": () => [sprite("map", {frame:207}),scale(5), area(),body({isStatic:true}) ],
					"n": () => [sprite("map", {frame:208}),scale(5), area(),body({isStatic:true}) ],
					"o": () => [sprite("map", {frame:209}),scale(5), area(),body({isStatic:true}) ],
					"p": () => [sprite("map", {frame:210}),scale(5), area(),body({isStatic:true}) ],
				},
			}),
		addLevel(
			[
				'                              a                              ',
				'                           b                            ',
				'                          c                        ',
				'                        d                          ',
				'                      e                                ',
				'                     r                        ',
				'                                j                      ',
				'         /       g                             ',
				'        ==        ===                         ',
				'                                               ',
				'                               g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					///////////////  DECORATION ORANGE   ///////////////////////

					"a": () => [sprite("map", {frame:73}),scale(5)],
					"b": () => [sprite("map", {frame:74}),scale(5)],
					"c": () => [sprite("map", {frame:75}),scale(5)],
					"d": () => [sprite("map", {frame:76}),scale(5)],
					"e": () => [sprite("map", {frame:77}),scale(5)],
					"f": () => [sprite("map", {frame:78}),scale(5)],
					"g": () => [sprite("map", {frame:79}),scale(5)],
					"h": () => [sprite("map", {frame:93}),scale(5)],
					"i": () => [sprite("map", {frame:94}),scale(5)],
					"j": () => [sprite("map", {frame:95}),scale(5)],
					"k": () => [sprite("map", {frame:96}),scale(5)],
					"l": () => [sprite("map", {frame:97}),scale(5)],
					"m": () => [sprite("map", {frame:98}),scale(5)],
					"n": () => [sprite("map", {frame:99}),scale(5)],
					"o": () => [sprite("map", {frame:112}),scale(5)],
					"p": () => [sprite("map", {frame:113}),scale(5)],
					"q": () => [sprite("map", {frame:114}),scale(5)],
					"r": () => [sprite("map", {frame:115}),scale(5)],
					"s": () => [sprite("map", {frame:116}),scale(5)],
					"t": () => [sprite("map", {frame:117}),scale(5)],
					"u": () => [sprite("map", {frame:118}),scale(5)],
					"v": () => [sprite("map", {frame:119}),scale(5)],
				},
			})
	]
	const level3 = [
		addLevel(
			[
				'           a      h                              ',
				'            b      i                             ',
				'             c      j                        ',
				'              d      k                           ',
				'               e      l                          ',
				'                r      m                         ',
				'                f       n                       ',
				'         /       g                             ',
				'        ==        ===                         ',
				'                                               ',
				'                               g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					/////////////// /FOND VERT ///////////////////////

					"a": () => [sprite("map", {frame:120}),scale(5)],
					"b": () => [sprite("map", {frame:121}),scale(5)],
					"c": () => [sprite("map", {frame:122}),scale(5)],
					"d": () => [sprite("map", {frame:123}),scale(5)],
					"e": () => [sprite("map", {frame:124}),scale(5)],
					"f": () => [sprite("map", {frame:125}),scale(5)],
					"g": () => [sprite("map", {frame:126}),scale(5)],
					"h": () => [sprite("map", {frame:127}),scale(5)],
					"i": () => [sprite("map", {frame:128}),scale(5)],
					"j": () => [sprite("map", {frame:129}),scale(5)],
					"k": () => [sprite("map", {frame:130}),scale(5)],
					"l": () => [sprite("map", {frame:131}),scale(5)],
					"m": () => [sprite("map", {frame:132}),scale(5)],
					"n": () => [sprite("map", {frame:140}),scale(5)],
					"o": () => [sprite("map", {frame:141}),scale(5)],
					"p": () => [sprite("map", {frame:142}),scale(5)],
					"q": () => [sprite("map", {frame:143}),scale(5)],
					"r": () => [sprite("map", {frame:144}),scale(5)],
					"s": () => [sprite("map", {frame:145}),scale(5)],
					"t": () => [sprite("map", {frame:146}),scale(5)],
					"u": () => [sprite("map", {frame:147}),scale(5)],
					"v": () => [sprite("map", {frame:148}),scale(5)],
					"w": () => [sprite("map", {frame:149}),scale(5)],
					"x": () => [sprite("map", {frame:150}),scale(5)],
					"y": () => [sprite("map", {frame:151}),scale(5)],
				},
			}),
		addLevel(
			[
				'                                           ',
				'                                               ',
				'                                           ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'                                               ',
				'aaaaaaaaaabcdefgh                         g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					//////////////// PLATEFORM VERT ///////////////////////

					"a": () => [sprite("map", {frame:153}),scale(5), area(),body({isStatic:true}) ],
					"b": () => [sprite("map", {frame:154}),scale(5), area(),body({isStatic:true}) ],
					"c": () => [sprite("map", {frame:172}),scale(5), area(),body({isStatic:true}) ],
					"d": () => [sprite("map", {frame:173}),scale(5), area(),body({isStatic:true}) ],
					"e": () => [sprite("map", {frame:174}),scale(5), area(),body({isStatic:true}) ],
					"f": () => [sprite("map", {frame:220}),scale(5), area(),body({isStatic:true}) ],
					"g": () => [sprite("map", {frame:221}),scale(5), area(),body({isStatic:true}) ],
					"h": () => [sprite("map", {frame:222}),scale(5), area(),body({isStatic:true}) ],
					"i": () => [sprite("map", {frame:223}),scale(5), area(),body({isStatic:true}) ],
					"j": () => [sprite("map", {frame:224}),scale(5), area(),body({isStatic:true}) ],
					"k": () => [sprite("map", {frame:225}),scale(5), area(),body({isStatic:true}) ],
					"l": () => [sprite("map", {frame:226}),scale(5), area(),body({isStatic:true}) ],
					"m": () => [sprite("map", {frame:227}),scale(5), area(),body({isStatic:true}) ],
					"n": () => [sprite("map", {frame:228}),scale(5), area(),body({isStatic:true}) ],
					"o": () => [sprite("map", {frame:229}),scale(5), area(),body({isStatic:true}) ],
					"p": () => [sprite("map", {frame:230}),scale(5), area(),body({isStatic:true}) ],
				},
			}),
		addLevel(
			[
				'                              a                              ',
				'                           b                            ',
				'                          c                        ',
				'                        d                          ',
				'                      e                                ',
				'                     r                        ',
				'                                j                      ',
				'         /       g                             ',
				'        ==        ===                         ',
				'                                               ',
				'                               g             ',
				'====================  = =  ====================',


			],{
				tileWidth: 36,
				tileHeight: 36,
				tiles: {

					///////////////  DECORATION VERT   ///////////////////////

					"a": () => [sprite("map", {frame:133}),scale(5)],
					"b": () => [sprite("map", {frame:134}),scale(5)],
					"c": () => [sprite("map", {frame:135}),scale(5)],
					"d": () => [sprite("map", {frame:136}),scale(5)],
					"e": () => [sprite("map", {frame:137}),scale(5)],
					"f": () => [sprite("map", {frame:138}),scale(5)],
					"g": () => [sprite("map", {frame:139}),scale(5)],
					"h": () => [sprite("map", {frame:153}),scale(5)],
					"i": () => [sprite("map", {frame:154}),scale(5)],
					"j": () => [sprite("map", {frame:155}),scale(5)],
					"k": () => [sprite("map", {frame:156}),scale(5)],
					"l": () => [sprite("map", {frame:157}),scale(5)],
					"m": () => [sprite("map", {frame:158}),scale(5)],
					"n": () => [sprite("map", {frame:159}),scale(5)],
					"o": () => [sprite("map", {frame:172}),scale(5)],
					"p": () => [sprite("map", {frame:173}),scale(5)],
					"q": () => [sprite("map", {frame:174}),scale(5)],
					"r": () => [sprite("map", {frame:175}),scale(5)],
					"s": () => [sprite("map", {frame:176}),scale(5)],
					"t": () => [sprite("map", {frame:177}),scale(5)],
					"u": () => [sprite("map", {frame:178}),scale(5)],
					"v": () => [sprite("map", {frame:179}),scale(5)],
				},
			})
	]


	// ######################## PLAYER #########################

	const SPEED = 250
	const JUMP_FORCE = 240
	const ENEMY_SPEED = 60
	const BULLET_SPEED = 200
	let PLAYER_HEALTH = 100
	let gunDestroyed = false;

	setGravity(640)

	const player = add([
		sprite('astro'),
		scale(5),
		pos(0,0),
		area(),
		body(),
		setGravity(400),
		health(PLAYER_HEALTH),
	])

	//plateform

	add([
		rect(width(), 24),
		area(),
		outline(1),
		pos(0, height()),
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


	// ######################## ENEMY #########################

	const enemy = add([
		sprite("ghosty"),
		scale(1.5),
		pos(450,50),
		area(),
		body(),
		anchor("center"),
		state("move", [ "idle", "attack", "move" ]),
	])


	enemy.onStateEnter("idle", async () => {
		await wait(0.5)
		enemy.enterState("attack")
	})

	enemy.onStateEnter("attack", async () => {

		// Don't do anything if player doesn't exist anymore
		if (player.exists() && enemy.exists()) {

			const dir = player.pos.sub(enemy.pos).unit()

			add([
				pos(enemy.pos),
				move(dir, BULLET_SPEED),
				rect(12, 12),
				area(),
				offscreen({ destroy: true }),
				anchor("center"),
				color(BLUE),
				"enemyBullet",
			])

		}

		await wait(2)
		enemy.enterState("move")

	})

	enemy.onStateEnter("move", async () => {
		await wait(2)
		enemy.enterState("idle")
	})


	enemy.onStateUpdate("move", () => {
		if (!player.exists()) return
		const dir = player.pos.sub(enemy.pos).unit()
		enemy.move(dir.scale(ENEMY_SPEED))
	})



	//#############################################################






	// ################# Bullet ######################

	function spawnBullet(p) {
		if (gunDestroyed) {
			add([
				rect(12, 12),
				pos(p),
				anchor('center'),
				area(),
				color(300, 0, 0),
				move(0, 400),
				offscreen({ destroy: true }),
				'playerBullet',
			])
		}
	}

	onKeyPress('up', () => {
		spawnBullet(player.pos.add(20, 20));
	})

	// ---------------- COLLIDE -----------------

	player.onCollide("enemyBullet", (bullet) => {
		destroy(bullet)
		player.hurt(20)
		healthBar.value -= 20
		healthBar.text = healthBar.value + "pv"
		console.log(healthBar.value)
		if (healthBar.value <= 0)
		{
			go('lose')
			wait(2,()=>{
				go('scene')
			})
		}
	})

	enemy.onCollide("playerBullet", (bullet) => {
		destroy(enemy)
		console.log("touch enemy")
	})

	player.onCollide('gun', (m) => {
		destroy(m)
		gunDestroyed = true
	})

	// ########################### SCORE #############################

	const score = add([
		text("score: 0"),
		pos(width()-200,20),
		{
			value:0,
		}
	])

	// ####################################################################

	// ############################# TIMER ###############################

	// const timer = add([
	// 	text("0"),
	// 	pos(width()-200,60),
	// 	{
	// 		value:0,
	// 	},
	// ])
	//
	// loop(1,()=>{
	// 	timer.value ++
	// 	timer.text = timer.value
	// })

	// ###############################################################

	// ########################## Health ############################

	const healthBar = add([
		text( "100 pv"),
		pos(width()/2,20),
		{
			value:100,
		}
	])

	//################################################################


})

scene('lose',()=>{

	add([
		text('you lose'),
		anchor('center'),
		scale(5),
		pos(width()/2, height()/2)
	])
})

go('game')