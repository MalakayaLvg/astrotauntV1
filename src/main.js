import kaboom from "kaboom";

kaboom({

    scale:2,
    font: "upheavtt",
})

setBackground(Color.fromHex("#24323F"))
setGravity(600)
////////////////////////////

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
        "jump": 7,
    },
})


//image de fond :
loadSprite('bg-beginning', 'SutOjg4.png')
loadSprite('bg-levels', 'sM0Q2AA.png')
loadSprite('bg-death', 'fMJvDkf.png')
// NATAN
loadFont("upheavtt", "font/upheavtt.ttf")
loadSprite('logo', 'MqUYiI6.png')

loadSprite('beam', 'fUwX4Jc.png')
loadSprite('crate', 'Uz51WxL.png')
loadSprite('crate2', 'UPq5A74.png')
loadSprite('droplets', 'r13H16o.png')
loadSprite('editorblock', '8cM0Be2.png')
loadSprite('jet', 'vaegfFS.png')
loadSprite('jet2', 'qtajq2q.png')
loadSprite('jet3', 'jtSXoc2.png')
loadSprite('pod1', 'ylskanF.png')
loadSprite('portrait', 'gXUjnJr.png')



/////////////////////////////SPRITE AVEC PLUSIEURS TILES///////////////////

loadSprite('battery', 'bOX5EXQ.png',{sliceX: 4, sliceY: 1,})
loadSprite('explosion', 'NTmk76G.png', {sliceX: 17, sliceY: 1,})
loadSprite('explosion2', 'lOrfZSj.png',{sliceX: 17, sliceY: 1,})
loadSprite('smoke', 'sjIQbV0.png',{sliceX: 11, sliceY: 1,})
loadSprite('timerswitch', 'UGMGRMu.png',{sliceX: 5, sliceY: 1,})
loadSprite('button', 'ThnSicB.png',{sliceX: 2, sliceY: 1,})
loadSprite('powerlight', 'uq3DEGN.png',{sliceX: 2, sliceY: 1,})
loadSprite('shipbits', 'oD1VIw6.png',{sliceX: 5, sliceY: 1,})
loadSprite('pit', 'DFAfOnt.png', {sliceX: 2, sliceY: 3,})
loadSprite('pod', 'fnH45mO.png', {sliceX: 4, sliceY: 1,})
loadSprite('messagebox', 'gUvvVXW.png', {sliceX: 3, sliceY: 3,})
loadSprite('rocks', 'QzTqlac.png', {sliceX: 8, sliceY: 3,})
loadSprite('map', 'asb3EeB.png',{sliceX:20, sliceY:20,})



//TODO ############################ SCENE LOSE ################################"
scene('lose',()=>{

    add([
        sprite("bg-death")
    ])
    add([
        text('you lose'),
        anchor('center'),
        scale(5),
        pos(width()/2, height()/2)
    ])
})

//TODO #################### SCENE MENU ###############################


scene("menu", () => {

    add([
        sprite("bg-beginning"),
        scale(0.500)
    ]),

        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y),
            scale(1),
        ]),

        add([
            text('upheavtt'),
            area(),
            anchor("center"),
            pos(center().x, 450),
            outline(4),
            text("Taper sur [ ENTRER ] pour commencer à jouer", {
                size: 20,
                opacity: 0.3
            }),
        ]);

    onKeyRelease("enter", () => {
        go("chooseLevel");
    })
});

scene("chooseLevel", () => {

    add([
        sprite("bg-levels"),
        scale(0.500)
    ])
    function addButton(txt, p, f) {


        const btn = add([
            rect(240, 80, { radius: 8 }),
            pos(p),
            area(),
            scale(1),
            anchor("center"),
            outline(4),
        ])


        btn.add([
            text(txt),
            anchor("center"),
            color(0, 0, 0),
        ])

        btn.onHoverUpdate(() => {
            const t = time() * 10
            btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
            btn.scale = vec2(1.2)
            setCursor("pointer")
        })

        btn.onHoverEnd(() => {
            btn.scale = vec2(1)
            btn.color = rgb()
        })

        btn.onClick(f)

        return btn

    }

    addButton("Level 1",vec2(450,200),()=> go("level1"))
    addButton("Level 2",vec2(450,300),()=> go("level2"))
    addButton("Level 3",vec2(450,400),()=> go("level3"))

    add([
        text("Dans le game ",  {

            size: 40,
            outline: 4
        }),
    ]);
});



// ########################### SCENE GAME ################################

scene("game",()=>{

    // ############## FULL SCREEN #############


    onKeyPress("f", (c) => {
        setFullscreen(!isFullscreen())
    })

    // ##########################################
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     const level1 = [
//         addLevel(
//
//             [
//
//                 ////////////////FOND BLEU ///////////////////////
//
//                 '                                                     ',
//                 '                    de        de                     ',
//                 '  nnnnnnnn            nnnnnnnn            nnnnnnnnn  ',
//                 '          n       nnnn        nnnn       n           ',
//                 '                                                     ',
//                 '                nn                nn                 ',
//                 '                                                     ',
//                 '                                    nnnnn            ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                     bbbbbbbb                        ',
//                 '                    bddddddddbb                      ',
//                 '                   bdddddddddddd                     ',
//                 '                   dddddddddddd                      ',
//                 '                     ddddddddd                       ',
//                 '                      abdddab                        ',
//                 '                      dedddde                        ',
//                 '                       ddddd                         ',
//                 '                       ddddd                         ',
//                 '                       ddddd                         ',
//                 '  bbddbb               ddddd                 bddbbb  ',
//                 '  b ddd                ddddd                  ddd b  ',
//                 '  d ddd                ddddd                  ddd d  ',
//                 '  d ddd                                       ddd d  ',
//                 '  d ddd                                       ddd d  ',
//                 '  d ddd                                       ddd d  ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                              ddd d  ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
//                 '                                                     ',
// ///////////////////////////////////////////////////////////////////////|
//
//             ],{
//                 tileWidth: 36,
//                 tileHeight: 36,
//                 tiles: {
//
//
//
//                     "a": () => [sprite("map", {frame:0}),scale(4.5)],
//                     "b": () => [sprite("map", {frame:1}),scale(4.5)],
//                     "c": () => [sprite("map", {frame:2}),scale(4.5)],
//                     "d": () => [sprite("map", {frame:3}),scale(4.5)],
//                     "e": () => [sprite("map", {frame:4}),scale(4.5)],
//                     "f": () => [sprite("map", {frame:5}),scale(4.5)],
//                     "g": () => [sprite("map", {frame:6}),scale(4.5)],
//                     "h": () => [sprite("map", {frame:7}),scale(4.5)],
//                     "i": () => [sprite("map", {frame:8}),scale(4.5)],
//                     "j": () => [sprite("map", {frame:9}),scale(4.5)],
//                     "k": () => [sprite("map", {frame:10}),scale(4.5)],
//                     "l": () => [sprite("map", {frame:11}),scale(4.5)],
//                     "m": () => [sprite("map", {frame:12}),scale(4.5)],
//                     "n": () => [sprite("map", {frame:20}),scale(4.5)],
//                     "o": () => [sprite("map", {frame:21}),scale(4.5)],
//                     "p": () => [sprite("map", {frame:22}),scale(4.5)],
//                     "q": () => [sprite("map", {frame:23}),scale(4.5)],
//                     "r": () => [sprite("map", {frame:24}),scale(4.5)],
//                     "s": () => [sprite("map", {frame:25}),scale(4.5)],
//                     "t": () => [sprite("map", {frame:26}),scale(4.5)],
//                     "u": () => [sprite("map", {frame:27}),scale(4.5)],
//                     "v": () => [sprite("map", {frame:28}),scale(4.5)],
//                     "w": () => [sprite("map", {frame:29}),scale(4.5)],
//                     "x": () => [sprite("map", {frame:30}),scale(4.5)],
//                     "y": () => [sprite("map", {frame:31}),scale(4.5)],
//                     "!": () => [sprite("map", {frame:40}),scale(4.5)],
//                     ":": () => [sprite("map", {frame:41}),scale(4.5)],
//                     ";": () => [sprite("map", {frame:42}),scale(4.5)],
//                     "*": () => [sprite("map", {frame:43}),scale(4.5)],
//                     "ù": () => [sprite("map", {frame:44}),scale(4.5)],
//                     "$": () => [sprite("map", {frame:45}),scale(4.5)],
//
//
//                     "/": () => [
//                         sprite("gun"),
//                         area(),
//                         body({ isStatic: true }),
//                         scale(4.5),
//                         'gun',]
//                 },
//             }),
//         addLevel(
//             [
//
//                 //////////////// PLATEFORM ///////////////////////
//
//                 '                                                     ',
//                 ' ccccccccc          deccccccccde          cccccccccc ',
//                 ' c        c      ccccc        ccccc      c         c ',
//                 ' c         c     c                c     c          c ',
//                 ' c         c   ccc                ccc   c          c ',
//                 ' c         c   c                    c   c          c ',
//                 ' c         ccccc         fffff      ccccc          c ',
//                 ' cc                                             ffcc ',
//                 '  c                                               c  ',
//                 '  c          ffff                                 c  ',
//                 '  c                               fffff           c  ',
//                 '  c                                               c  ',
//                 '  cccccc             cccccccc                cccccc  ',
//                 '       c            c        cc              c       ',
//                 '       c           c           c         fff c       ',
//                 '       c          c             c            c       ',
//                 '       c          c            c             c       ',
//                 '       c          ccc         c              c       ',
//                 '       c             cab   abc     ff        c       ',
//                 '       c              de  fde                c       ',
//                 '       c              c     c                c       ',
//                 '       c              c     c                c       ',
//                 ' ccccccc              cf    c           fffffccccccc ',
//                 ' c                    c     c                      c ',
//                 ' c                    c     c                      c ',
//                 ' c                    c     c    fffff             c ',
//                 ' c                        fff                 fff  c ',
//                 ' c    fffff                                        c ',
//                 ' c                                                 c ',
//                 ' ccccccccccccccff                    ffccccccccccccc ',
//                 '              c                     f  c             ',
//                 '              c                    f   c             ',
//                 '              c        fffffff         c             ',
//                 '              c                        c             ',
//                 '              c                        c             ',
//                 ' ccccccc      c                ffffffffc     ccccccc ',
//                 ' c     c      c                        c     c     c ',
//                 ' c     c      c             ff         c     c     c ',
//                 ' c     c      c                        c     c     c ',
//                 ' c     c      c                        c     cf    c ',
//                 ' c     cccccccc    ffffff              ccccccc     c ',
//                 ' c                                                 c ',
//                 ' c                                                 c ',
//                 ' c                             fffff             ffc ',
//                 ' c                                                 c ',
//                 ' c                                                 c ',
//                 ' cccccccfffffff       ffffff             ffffccccccc ',
//                 '       c                                     c       ',
//                 '       c                                     c       ',
//                 '       c                         fffff       c       ',
//                 '       c                                     c       ',
//                 '       ccccccccccccccccccccccccccccccccccccccc       ',
//                 '                                                     ',
// //////////////////////////////////////////////////////////////////////|
//
//             ],{
//                 tileWidth: 36,
//                 tileHeight: 36,
//                 tiles: {
//
//
//                     "a": () => [sprite("map", {frame:33}),scale(4.5), area(),body({isStatic:true}) ],
//                     "b": () => [sprite("map", {frame:34}),scale(4.5), area(),body({isStatic:true}) ],
//                     "c": () => [sprite("map", {frame:52}),scale(4.5), area(),body({isStatic:true}),"block" ],
//                     "d": () => [sprite("map", {frame:53}),scale(4.5), area(),body({isStatic:true}) ],
//                     "e": () => [sprite("map", {frame:54}),scale(4.5), area(),body({isStatic:true}) ],
//                     "f": () => [sprite("map", {frame:180}),scale(4.5), area(),body({isStatic:true}),"block" ],
//                     "g": () => [sprite("map", {frame:181}),scale(4.5), area(),body({isStatic:true}) ],
//                     "h": () => [sprite("map", {frame:182}),scale(4.5), area(),body({isStatic:true}) ],
//                     "i": () => [sprite("map", {frame:183}),scale(4.5), area(),body({isStatic:true}) ],
//                     "j": () => [sprite("map", {frame:184}),scale(4.5), area(),body({isStatic:true}) ],
//                     "k": () => [sprite("map", {frame:185}),scale(4.5), area(),body({isStatic:true}) ],
//                     "l": () => [sprite("map", {frame:186}),scale(4.5), area(),body({isStatic:true}) ],
//                     "m": () => [sprite("map", {frame:187}),scale(4.5), area(),body({isStatic:true}) ],
//                     "n": () => [sprite("map", {frame:188}),scale(4.5), area(),body({isStatic:true}) ],
//                     "o": () => [sprite("map", {frame:189}),scale(4.5), area(),body({isStatic:true}) ],
//                     "p": () => [sprite("map", {frame:190}),scale(4.5), area(),body({isStatic:true}) ],
//                 },
//             }),
//
//         addLevel(
//             [
//
//                 ///////////////  DECORATION BLEU  ///////////////////////
//
//                 'crrrrrrrrrcchiccchichirrrrrrrrhichicchicccrrrrrrrrrrc',
//                 'j         rjpqjrrpqrpq        pqrpqrrpqjjr          j',
//                 'j          rccjhi                  hiccjr           j',
//                 'j           rrjpq                  pqrrj            j',
//                 'j           hij                      hij            j',
//                 'j           pqr                      pqr            j',
//                 'j                                                   j',
//                 'r                                                   r',
//                 'hi                                                 hi',
//                 'pq                                                 pq',
//                 'cc                                                 cc',
//                 'rr                                                 rr',
//                 'hi                                                 hi',
//                 'pqrrccc                                       cccrrpq',
//                 'cchijjj                                       jjjhicc',
//                 'jjpqrrj                                       jrrpqjj',
//                 'jjcchij                                       jhiccjj',
//                 'jjrrpqj                                       jpqrrjj',
//                 'jjhiccj                                       jcchijj',
//                 'rrpqrrj                                       jpqrrjj',
//                 'hicchij                                       jrrpqrr',
//                 'pqrrpqr                                       jhicchi',
//                 'j                                                   c',
//                 'j                                                   j',
//                 'j  c   c                                     c   c  j',
//                 'j  j   j                                     j   j  j',
//                 'j  j   j                                     j   j  j',
//                 'j  j   j                                     j   j  j',
//                 'j  r   r                                     r   r  j',
//                 'j                                                   j',
//                 'jhicchicchiccc                          hicchijjhijjj',
//                 'jpqrrpqrrpqrrj                          pqrrpqrrpqrrj',
//                 'jrrrrrrrrrrrrj                          rrrrrrrrrrrrr',
//                 'jjjhijjhijjhij                          jjhijjhijjhij',
//                 'jrrpqrrpqrrpqj                          rrpqrrpqrrpqj',
//                 'j       jhijjj                          hijjj    c  j',
//                 'j       jpqjjj                          pqjjj    j  j',
//                 'j       jjjhij                          jjhij    j  j',
//                 'j       jjjpqj                          jjpqj    j  j',
//                 'j       rrrrrr                          rrrrr    j  j',
//                 'j                                                j  j',
//                 'j                                            c   j  j',
//                 'j                                            j   j  j',
//                 'j                                            j   j  j',
//                 'j                                            j   j  j',
//                 'j                                            r   r  j',
//                 'j                                                   j',
//                 'jhicchi                                       hicchij',
//                 'jpqrrpq                                       pqrrpqj',
//                 'jcchicc                                       rrpqrrj',
//                 'jrrpqrr                                       rrpqrrj',
//                 'jhirrrr                                       rrrrhij',
//                 'rpqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpqr',
// /////////////////////////////////////////////////////////////////////|
//
//             ],{
//                 tileWidth: 36,
//                 tileHeight: 36,
//                 tiles: {
//
//
//                     "a": () => [sprite("map", {frame:13}),scale(4.5)],
//                     "b": () => [sprite("map", {frame:14}),scale(4.5)],
//                     "c": () => [sprite("map", {frame:15}),scale(4.5)],
//                     "d": () => [sprite("map", {frame:16}),scale(4.5)],
//                     "e": () => [sprite("map", {frame:17}),scale(4.5)],
//                     "f": () => [sprite("map", {frame:18}),scale(4.5)],
//                     "g": () => [sprite("map", {frame:19}),scale(4.5)],
//                     "h": () => [sprite("map", {frame:33}),scale(4.5)],
//                     "i": () => [sprite("map", {frame:34}),scale(4.5)],
//                     "j": () => [sprite("map", {frame:35}),scale(4.5)],
//                     "k": () => [sprite("map", {frame:36}),scale(4.5)],
//                     "l": () => [sprite("map", {frame:37}),scale(4.5)],
//                     "m": () => [sprite("map", {frame:38}),scale(4.5)],
//                     "n": () => [sprite("map", {frame:39}),scale(4.5)],
//                     "o": () => [sprite("map", {frame:52}),scale(4.5)],
//                     "p": () => [sprite("map", {frame:53}),scale(4.5)],
//                     "q": () => [sprite("map", {frame:54}),scale(4.5)],
//                     "r": () => [sprite("map", {frame:55}),scale(4.5)],
//                     "s": () => [sprite("map", {frame:56}),scale(4.5)],
//                     "t": () => [sprite("map", {frame:57}),scale(4.5)],
//                     "u": () => [sprite("map", {frame:58}),scale(4.5)],
//                     "v": () => [sprite("map", {frame:59}),scale(4.5)],
//                 },
//             }),addLevel(
//             [
//
//                 ///////////////  ACCESSOIRE BLEU  ///////////////////////
//
//                 '                                                   ',
//                 '                           *                       ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                     a                             ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                             *                     ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '                                                   ',
//                 '      *                        *                   ',
//                 '                                                   ',
//                 '                                                   ',
// /////////////////////////////////////////////////////////////////////|
//
//             ],{
//                 tileWidth: 36,
//                 tileHeight: 36,
//                 tiles: {
//
//
//                     "a": () => [sprite("battery", {frame:1}),scale(4.5)],
//                     "b": () => [sprite("explosion", {frame:14}),scale(4.5)],
//                     "c": () => [sprite("explosion2", {frame:15}),scale(4.5)],
//                     "d": () => [sprite("smoke", {frame:16}),scale(4.5)],
//                     "e": () => [sprite("timerswitch", {frame:17}),scale(4.5)],
//                     "f": () => [sprite("button", {frame:18}),scale(4.5)],
//                     "g": () => [sprite("powerlight", {frame:19}),scale(4.5)],
//                     "h": () => [sprite("shipbits", {frame:33}),scale(4.5)],
//                     "i": () => [sprite("pit", {frame:34}),scale(4.5)],
//                     "*": () => [sprite("pod", {frame:3}),scale(2.5), anchor("bot"), patrol(), offscreen({ hide: true }),  area(), "dangerous"],
//                     "k": () => [sprite("messagebox", {frame:36}),scale(4.5)],
//                     "l": () => [sprite("rocks", {frame:37}),scale(4.5)],
//                     "m": () => [sprite("beam", {frame:38}),scale(4.5)],
//                     "n": () => [sprite("crate", {frame:39}),scale(4.5)],
//                     "o": () => [sprite("crate2", {frame:52}),scale(4.5)],
//                     "p": () => [sprite("droplets", {frame:53}),scale(4.5)],
//                     "q": () => [sprite("editorblock", {frame:54}),scale(4.5)],
//                     "r": () => [sprite("jet", {frame:55}),scale(4.5)],
//                     "s": () => [sprite("jet2", {frame:56}),scale(4.5)],
//                     "t": () => [sprite("jet3", {frame:57}),scale(4.5)],
//                     "u": () => [sprite("pod1", {frame:58}),scale(4.5)],
//                     "v": () => [sprite("portrait", {frame:59}),scale(4.5)],
//                 },
//             })
//
//     ]

//     const level2 = [
//         addLevel(
//             [
//                 '                                                                                                                 ',
//                 '             nnnnnnnnnnnnnnn                                                                                     ',
//                 '             ddddddddddddddd                                                                                     ',
//                 '             ddddddddddddddd                   nnnnnnnnnnn                                                       ',
//                 '     nnnnnnnnddddddddddddddd                  ndddddddddddn                                                      ',
//                 '             ddddddddddddddd                 ndddddddddddddn                                                     ',
//                 '                     ddddddd               ndddddddddddddddddn                                                   ',
//                 '                      dddddd              ndddddddddddddddddddn                                                  ',
//                 '                       ddddd             ndddddddddddddddddddddn                                                 ',
//                 '                                         dddddddddddddddddddddddd                                                ',
//                 '                                         dddddddddddddddddddddddd                                                ',
//                 '                                         dddddddddddddddddddddddd                                                ',
//                 '                                           ddddddddddddddddddd                                                   ',
//                 '                                           ddddddddddddddddddd                                                   ',
//                 '                                             ddddddddddddddd               dddddddddddd                          ',
//                 '                                              ddddddddddddd               dddddddddddddd                         ',
//                 '                                                                         ddddddddddddddddddddd                   ',
//                 '                                                                        dddddddddddddddddddddd                   ',
//                 '                                                                        ddddddddddddddddddd                      ',
//                 '                                                                        dddddddddddddddddd                       ',
//                 '                                                                        ddddddddddddddddd                        ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//
// ///////////////////////////////////////////////////////////////////////|
//
//             ],{
//                 tileWidth: 36,
//                 tileHeight: 36,
//                 tiles: {
//
//                     /////////////// /FOND ORANGE ///////////////////////
//
//                     "a": () => [sprite("map", {frame:60}),scale(1)],
//                     "b": () => [sprite("map", {frame:61}),scale(1)],
//                     "c": () => [sprite("map", {frame:62}),scale(1)],
//                     "d": () => [sprite("map", {frame:63}),scale(1)],
//                     "e": () => [sprite("map", {frame:64}),scale(1)],
//                     "f": () => [sprite("map", {frame:65}),scale(1)],
//                     "g": () => [sprite("map", {frame:66}),scale(1)],
//                     "h": () => [sprite("map", {frame:67}),scale(1)],
//                     "i": () => [sprite("map", {frame:68}),scale(1)],
//                     "j": () => [sprite("map", {frame:69}),scale(1)],
//                     "k": () => [sprite("map", {frame:70}),scale(1)],
//                     "l": () => [sprite("map", {frame:71}),scale(1)],
//                     "m": () => [sprite("map", {frame:72}),scale(1)],
//                     "n": () => [sprite("map", {frame:80}),scale(1)],
//                     "o": () => [sprite("map", {frame:81}),scale(1)],
//                     "p": () => [sprite("map", {frame:82}),scale(1)],
//                     "q": () => [sprite("map", {frame:83}),scale(1)],
//                     "r": () => [sprite("map", {frame:84}),scale(1)],
//                     "s": () => [sprite("map", {frame:85}),scale(1)],
//                     "t": () => [sprite("map", {frame:86}),scale(1)],
//                     "u": () => [sprite("map", {frame:87}),scale(1)],
//                     "v": () => [sprite("map", {frame:88}),scale(1)],
//                     "w": () => [sprite("map", {frame:89}),scale(1)],
//                     "x": () => [sprite("map", {frame:90}),scale(1)],
//                     "y": () => [sprite("map", {frame:91}),scale(1)],
//                 },
//             }),
//         addLevel(
//             [
//                 'kccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccck',
//                 'k   k   k   k               k       k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k',
//                 'k   k   k   k               k       k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k',
//                 'kkk kkk kkk k               k       k   k   k               k   k   kabababababababababababab   k   k   k   k   k',
//                 'k   k                       k       k   k   k               k   k   kdedededededededededededeabababababab   k   k',
//                 'k   k                       kcccc       k   k               k   k  ab                        dededededede   k   k',
//                 'k kkk           iiiii       k   c       k   fffffff             k  de                                    abab   k',
//                 'k cc                 i      k   c       k                       kabffffff                                dedecc k',
//                 'kc  c                 i     k   ccccc   k                       kde                                         c  ck',
//                 'k                     iiiiiik       c   k                                                                       k',
//                 'k                                   cccck                ff                           ffff                      k',
//                 'k                                       k                                                                       k',
//                 'kiiii     ccc       fffff               kjj                   jjj                                   ccc   iiiiiik',
//                 'k    i    ckc                           abk                   kab          cccccccccccc             k c         k',
//                 'k     i   c  c                          dekjj               jjkde         c            c           c  c         k',
//                 'k     i   c   c                                                          c              ccc       c   c         k',
//                 'k    i    ckk kc              ffff                fff                   c                        ck kkc       ffk',
//                 'kiiii     c   c                                                                                   c   c         k',
//                 'k cc      c  c     ff                                                       ffffffff       ccc     c  c         k',
//                 'kc  c     ckc     f                        abababab   abababab                            c         k c fff     k',
//                 'k         ccc    f                     iiiidededede  fdedededeiiii                       c          ccc         k',
//                 'k                                      abab k   k       k   k abab      ccccccccccccccccc                       k',
//                 'kccccc                               iidede k   k       k   k dedeii                                       ccccck',
//                 'k   kc                               ab k   k   k       k   k   k ab                                       ck   k',
//                 'k   kc                            iiide k   k   kf      k   k   k deiii                                    ck   k',
//                 'kkk kcccccccc                     abk   k   k   k       k   k   k   kab       fff                   cccccccck   k',
//                 'k   kkk kkk k                   iidek   k   k   k     ffk   k   k   kdeii                           k   k   k   k',
//                 'k   k   k   k                  iab  k   k   k   k       k   k   k   k  abi                    ff    k   k   k   k',
//                 'k kkk   k   kcccccccccccccccciiide  k   k   k   k       k   k   k   k  deiii         ccccccccccccccck   k   k   k',
//                 'kccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccck',
// //////////////////////////////////////////////////////////////////////|
//
//
//             ],{
//                 tileWidth: 36,
//                 tileHeight: 36,
//                 tiles: {
//
//                     //////////////// PLATEFORM ORANGE ///////////////////////
//
//                     "a": () => [sprite("map", {frame:93}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "b": () => [sprite("map", {frame:94}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "c": () => [sprite("map", {frame:112}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "d": () => [sprite("map", {frame:113}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "e": () => [sprite("map", {frame:114}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "f": () => [sprite("map", {frame:200}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "g": () => [sprite("map", {frame:201}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "h": () => [sprite("map", {frame:202}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "i": () => [sprite("map", {frame:203}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "j": () => [sprite("map", {frame:204}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "k": () => [sprite("map", {frame:205}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "l": () => [sprite("map", {frame:206}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "m": () => [sprite("map", {frame:207}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "n": () => [sprite("map", {frame:208}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "o": () => [sprite("map", {frame:209}),scale(1), area(),body({isStatic:true}), "block" ],
//                     "p": () => [sprite("map", {frame:210}),scale(1), area(),body({isStatic:true}), "block" ],
//                 },
//             }),
//         addLevel(
//             [
//                 '                                                                                                                 ',
//                 ' hic hic hic                 hiooccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc     ',
//                 ' pqj pqj pqj                 pqhijjj jjj jjj jjr rrr rrr rjj jjj jjj rrr rrr rrr rrr rrr rrr jjj jjj jjj jjj     ',
//                 '   r   r   r                 hipqjjj jjj jjj jr           rj jjj jjj                         rrr rrr rrr jjj     ',
//                 ' chi                         pqoorrr jjj jjj r             r jjj jjr                                     jjj     ',
//                 ' jpq   c                         hioojjj jjr                 rjj jj                                      rrr     ',
//                 ' r     j                         pqhijjj jr                   rj rr                                              ',
//                 '       j                         hipqjjj r                     r                                                 ',
//                 '       j                             jjj                                                                 c       ',
//                 ' c  c  j                             rrr                                                                 j  c  c ',
//                 ' j  j  j                                                                                                 j  j  j ',
//                 ' r  r  j              c                                                                         c        j  r  r ',
//                 '       j        c     j                  jj                   jjj                               j        j       ',
//                 ' hioo  j        j     j                                                                         j    o   j  c  c ',
//                 ' pqhio j   hi   j     j                    jj               jj                                  j   hi   j  j  j ',
//                 ' hipqo j   pqc  j     j                                                                         j  cpq   j  j  j ',
//                 ' pqoo  j     j  j     j                                                                         j  j     j  j  j ',
//                 '       j   hir  j     j                                                                         j  rhi   j  j  j ',
//                 '       j   pq   j     j                                                                         j   pq   j  j  j ',
//                 '       j        j  c  j                                                                      c  j  c o   j  j  j ',
//                 ' c  c  j        j  j  j                                                                   c  j  j  j     j  j  j ',
//                 ' r  r  j        j  j  j                    c ccc         ccc c                            j  j  j  j  c  j  r  r ',
//                 '       j        j  j  j                    j jjj         jjj j                            j  j  j  j  j  j       ',
//                 ' hic   j        j  j  j                c ccj jjj         jjj jcc c                        j  j  j  j  j  j   chi ',
//                 ' pqj   r        j  j  j                j jjj jjj         jjj jjj j                        j  j  j  j  r  r   jpq ',
//                 '   r         c  j  j  j              ccj jjj jjj         jjj jjj jcc                      j  j  j  j         r   ',
//                 ' chi   c   c j  j  j  j              jjj jjj jjj         jjj jjj jjj                      j  j  j  j c   c   jic ',
//                 ' jpq hij hij r  r  r  r           cc jjj jjj jjj         jjj jjj jjj cc                   r  r  r  r jhi jhi pqj ',
//                 ' r   pqr pqr                      jj rrr rrr rrr         rrr rrr rrr jj                              rpq rpq   r ',
//                 '                                                                                                                 ',
// /////////////////////////////////////////////////////////////////////|
//
//
//             ],{
//                 tileWidth: 36,
//                 tileHeight: 36,
//                 tiles: {
//
//                     ///////////////  DECORATION ORANGE   ///////////////////////
//
//                     "a": () => [sprite("map", {frame:73}),scale(1)],
//                     "b": () => [sprite("map", {frame:74}),scale(1)],
//                     "c": () => [sprite("map", {frame:75}),scale(1)],
//                     "d": () => [sprite("map", {frame:76}),scale(1)],
//                     "e": () => [sprite("map", {frame:77}),scale(1)],
//                     "f": () => [sprite("map", {frame:78}),scale(1)],
//                     "g": () => [sprite("map", {frame:79}),scale(1)],
//                     "h": () => [sprite("map", {frame:93}),scale(1)],
//                     "i": () => [sprite("map", {frame:94}),scale(1)],
//                     "j": () => [sprite("map", {frame:95}),scale(1)],
//                     "k": () => [sprite("map", {frame:96}),scale(1)],
//                     "l": () => [sprite("map", {frame:97}),scale(1)],
//                     "m": () => [sprite("map", {frame:98}),scale(1)],
//                     "n": () => [sprite("map", {frame:99}),scale(1)],
//                     "o": () => [sprite("map", {frame:112}),scale(1)],
//                     "p": () => [sprite("map", {frame:113}),scale(1)],
//                     "q": () => [sprite("map", {frame:114}),scale(1)],
//                     "r": () => [sprite("map", {frame:115}),scale(1)],
//                     "s": () => [sprite("map", {frame:116}),scale(1)],
//                     "t": () => [sprite("map", {frame:117}),scale(1)],
//                     "u": () => [sprite("map", {frame:118}),scale(1)],
//                     "v": () => [sprite("map", {frame:119}),scale(1)],
//                 },
//             }),
//         addLevel(
//             [
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//                 '                                                                                                                 ',
//             ], {
//                 tileWidth: 36,
//                 tileHeight: 36,
//                 tiles: {
//
//
//                     "a": () => [sprite("battery", {frame:1}),scale(1)],
//                     "b": () => [sprite("explosion", {frame:14}),scale(1)],
//                     "c": () => [sprite("explosion2", {frame:15}),scale(1)],
//                     "d": () => [sprite("smoke", {frame:16}),scale(1)],
//                     "e": () => [sprite("timerswitch", {frame:17}),scale(1)],
//                     "f": () => [sprite("button", {frame:18}),scale(1)],
//                     "g": () => [sprite("powerlight", {frame:19}),scale(1)],
//                     "h": () => [sprite("shipbits", {frame:33}),scale(1)],
//                     "i": () => [sprite("pit", {frame:34}),scale(1)],
//                     "*": () => [sprite("pod", {frame:3}),scale(2.5)],
//                     "k": () => [sprite("messagebox", {frame:36}),scale(1)],
//                     "l": () => [sprite("rocks", {frame:37}),scale(1)],
//                     "m": () => [sprite("beam", {frame:38}),scale(1)],
//                     "n": () => [sprite("crate", {frame:39}),scale(1)],
//                     "o": () => [sprite("crate2", {frame:52}),scale(1)],
//                     "p": () => [sprite("droplets", {frame:53}),scale(1)],
//                     "q": () => [sprite("editorblock", {frame:54}),scale(1)],
//                     "r": () => [sprite("jet", {frame:55}),scale(1)],
//                     "s": () => [sprite("jet2", {frame:56}),scale(1)],
//                     "t": () => [sprite("jet3", {frame:57}),scale(1)],
//                     "u": () => [sprite("pod1", {frame:58}),scale(1)],
//                     "v": () => [sprite("portrait", {frame:59}),scale(1)],
//                 },
//             })
//     ]


    const level3 = [
        addLevel(
            [
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                 VVVVVVVVVV                 ',
                '                 VVVVVVVVVV                 ',
                '               VVVVV    VVVVV               ',
                '               VVVVV    VVVVV               ',
                '             VVVVVVV    VVVVVVV             ',
                '             VVVVV        VVVVV             ',
                '             VVVVV        VVVVV             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '                                            ',
                '                                            ',
                '                                            ',


///////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    /////////////// /FOND VERT ///////////////////////

                    "a": () => [sprite("map", {frame:120}),scale(1)],
                    "b": () => [sprite("map", {frame:121}),scale(1)],
                    "c": () => [sprite("map", {frame:122}),scale(1)],
                    "d": () => [sprite("map", {frame:123}),scale(1)],
                    "e": () => [sprite("map", {frame:124}),scale(1)],
                    "f": () => [sprite("map", {frame:125}),scale(1)],
                    "g": () => [sprite("map", {frame:126}),scale(1)],
                    "h": () => [sprite("map", {frame:127}),scale(1)],
                    "i": () => [sprite("map", {frame:128}),scale(1)],
                    "j": () => [sprite("map", {frame:129}),scale(1)],
                    "k": () => [sprite("map", {frame:130}),scale(1)],
                    "l": () => [sprite("map", {frame:131}),scale(1)],
                    "m": () => [sprite("map", {frame:132}),scale(1)],
                    "n": () => [sprite("map", {frame:140}),scale(1)],
                    "o": () => [sprite("map", {frame:141}),scale(1)],
                    "p": () => [sprite("map", {frame:142}),scale(1)],
                    "q": () => [sprite("map", {frame:143}),scale(1)],
                    "r": () => [sprite("map", {frame:144}),scale(1)],
                    "s": () => [sprite("map", {frame:145}),scale(1)],
                    "t": () => [sprite("map", {frame:146}),scale(1)],
                    "u": () => [sprite("map", {frame:147}),scale(1)],
                    "v": () => [sprite("map", {frame:148}),scale(1)],
                    "w": () => [sprite("map", {frame:149}),scale(1)],
                    "x": () => [sprite("map", {frame:150}),scale(1)],
                    "y": () => [sprite("map", {frame:151}),scale(1)],
                },
            }),
        addLevel(
            [
                'ffffffffffffffffffffffffffffffffffffffffffff',
                'fabjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjabf',
                'fde              ababababab              def',
                'fj               dedededede               jf',
                'fj             ab          ab             jf',
                'fj             de          de             jf',
                'fj           ab              ab           jf',
                'fj           de     abab     de           jf',
                'fj         ab       dede       ab         jf',
                'fj         de     ab    ab     de         jf',
                'fj                de    de                jf',
                'fj              ab        ab              jf',
                'fj              de        de              jf',
                'fj                                        jf',
                'fj                                        jf',
                'fjbab                                  abajf',
                'fjede                                  dedjf',
                'fj   ab                              ab   jf',
                'fj   de                              de   jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj         abkabkabkababkabkabkab         jf',
                'fj        kdekdekdekdedekdekdekdek        jf',
                'fj      abk  k  k  k    k  k  k  kab      jf',
                'fj     kdek  k  k  k    k  k  k  kdek     jf',
                'fj     k  k  k  k  k    k  k  k  k  k     jf',
                'fj   abk  k  k  k  k    k  k  k  k  kab   jf',
                'fab  dek  k  k  k  k    k  k  k  k  kde  abf',
                'fdejjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdef',
                'ffffffffffffffffffffffffffffffffffffffffffff',
//////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    //////////////// PLATEFORM VERT ///////////////////////

                    "a": () => [sprite("map", {frame:153}),scale(1), area(),body({isStatic:true}) ],
                    "b": () => [sprite("map", {frame:154}),scale(1), area(),body({isStatic:true}) ],
                    "c": () => [sprite("map", {frame:172}),scale(1), area(),body({isStatic:true}),"block" ],
                    "d": () => [sprite("map", {frame:173}),scale(1), area(),body({isStatic:true}) ],
                    "e": () => [sprite("map", {frame:174}),scale(1), area(),body({isStatic:true}) ],
                    "f": () => [sprite("map", {frame:220}),scale(1), area(),body({isStatic:true}),"block" ],
                    "g": () => [sprite("map", {frame:221}),scale(1), area(),body({isStatic:true}) ],
                    "h": () => [sprite("map", {frame:222}),scale(1), area(),body({isStatic:true}) ],
                    "i": () => [sprite("map", {frame:223}),scale(1), area(),body({isStatic:true}) ],
                    "j": () => [sprite("map", {frame:224}),scale(1), area(),body({isStatic:true}) ],
                    "k": () => [sprite("map", {frame:225}),scale(1), area(),body({isStatic:true}) ],
                    "l": () => [sprite("map", {frame:226}),scale(1), area(),body({isStatic:true}) ],
                    "m": () => [sprite("map", {frame:227}),scale(1), area(),body({isStatic:true}) ],
                    "n": () => [sprite("map", {frame:228}),scale(1), area(),body({isStatic:true}) ],
                    "o": () => [sprite("map", {frame:229}),scale(1), area(),body({isStatic:true}) ],
                    "p": () => [sprite("map", {frame:230}),scale(1), area(),body({isStatic:true}) ],
                },
            }),
        addLevel(
            [

                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                    rrrr                    ',
                '           cc                  cc           ',
                '           jj     rr    rr     jj           ',
                '           jj                  jj           ',
                '           jj   cc        cc   jj           ',
                '           jj   jj        jj   jj           ',
                '           jj   jj        jj   jj           ',
                '           jj   jj        jj   jj           ',
                '           jj   jj        jj   jj           ',
                '           jj   jj        jj   jj           ',
                '     cc    jj   jj        jj   jj    cc     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    rr   rr        rr   rr    jj     ',
                '     jj                              jj     ',
                '     jj                              jj     ',
                '     jj    cc cc cc cccc cc cc cc    jj     ',
                '     jj    jj jj jj jjjj jj jj jj    jj     ',
                '     jj cc jj jj jj jjjj jj jj jj cc jj     ',
                '        jj jj jj jj jjjj jj jj jj jj        ',
                '        rr rr rr rr rrrr rr rr rr rr        ',
                '                                            ',
                '                                            ',
/////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    ///////////////  DECORATION VERT   ///////////////////////

                    "a": () => [sprite("map", {frame:133}),scale(1)],
                    "b": () => [sprite("map", {frame:134}),scale(1)],
                    "c": () => [sprite("map", {frame:135}),scale(1)],
                    "d": () => [sprite("map", {frame:136}),scale(1)],
                    "e": () => [sprite("map", {frame:137}),scale(1)],
                    "f": () => [sprite("map", {frame:138}),scale(1)],
                    "g": () => [sprite("map", {frame:139}),scale(1)],
                    "h": () => [sprite("map", {frame:153}),scale(1)],
                    "i": () => [sprite("map", {frame:154}),scale(1)],
                    "j": () => [sprite("map", {frame:155}),scale(1)],
                    "k": () => [sprite("map", {frame:156}),scale(1)],
                    "l": () => [sprite("map", {frame:157}),scale(1)],
                    "m": () => [sprite("map", {frame:158}),scale(1)],
                    "n": () => [sprite("map", {frame:159}),scale(1)],
                    "o": () => [sprite("map", {frame:172}),scale(1)],
                    "p": () => [sprite("map", {frame:173}),scale(1)],
                    "q": () => [sprite("map", {frame:174}),scale(1)],
                    "r": () => [sprite("map", {frame:175}),scale(1)],
                    "s": () => [sprite("map", {frame:176}),scale(1)],
                    "t": () => [sprite("map", {frame:177}),scale(1)],
                    "u": () => [sprite("map", {frame:178}),scale(1)],
                    "v": () => [sprite("map", {frame:179}),scale(1)],
                },
            })
    ]


    // ######################## PLAYER #########################

    const SPEED = 250
    let JUMP_FORCE = 400
    const ENEMY_SPEED = 60
    const BULLET_SPEED = 200
    let PLAYER_HEALTH = 100
    let gunDestroyed = false

    const player = add([
        sprite('astro'),
        scale(5),
        anchor("center"),
        pos(300,300),
        area(),
        body(),
        health(PLAYER_HEALTH),
        z(49),
        "player"
    ])

    //######################### MOUVEMENT ###########################

    // Switch to "idle" or "run" animation when player hits ground
    player.onGround(() => {
        if (!isKeyDown("left") && !isKeyDown("right")) {
            player.play("idle")
        } else {
            player.play("run")
        }
    })

    // ########################## DASH ##############################

    let isDashAvailable = true
    player.onGround(()=>{
        isDashAvailable = true
    })
    function Dash(dashX,dashY){
        isDashAvailable = false
        camScale(1.1,1)
        const t = tween(player.pos,vec2((player.pos.x)+dashX,(player.pos.y)+dashY),0.2,(p) => player.pos = p,easings.easeOutSine)
        onUpdate(()=>{
            player.onCollide("block",()=>{
                // console.log("player collide with block")
                t.cancel()
            })
        })
        wait(0.5,()=>{
            camScale(1,1)
        })
    }

    // ########################## KEYBOARD CONTROL #############################
    let dirX = 0
    let dirY = 0
    if(!isGamepadConnected){

        onUpdate(()=>{
            onKeyDown("z",()=>{
                gun.angle = -90
                dirX = 0
                dirY = 100
            })
            onKeyDown("s",()=>{
                gun.angle = 90
                dirX = 0
                dirY = -100
            })

            onKeyDown("q",()=>{
                gun.angle = 180
                dirX = 100
                dirY = 0
            })

            onKeyDown("d",()=>{
                gun.angle = 0
                dirX = -100
                dirY = 0
            })

            if(isKeyDown("z") && isKeyDown("d"))
            {
                console.log("up right")
                gun.angle = -45
                dirX = -100
                dirY = 100
            }
            if(isKeyDown("z") && isKeyDown("q"))
            {
                console.log("up left")
                gun.angle = -135
                dirX = 100
                dirY = 100
            }
            if(isKeyDown("s") && isKeyDown("q"))
            {
                console.log("down left")
                gun.angle = 135
                dirX = 100
                dirY = -100
            }
            if(isKeyDown("s") && isKeyDown("d"))
            {
                console.log("down right")
                gun.angle = 45
                dirX = -100
                dirY = 100
            }
        })

        onKeyDown("d",()=>{
            player.move(SPEED, 0)
            onUpdate(()=>{
                if(isDashing){
                    player.move(0,0)
                    wait(3,()=>{
                        isDashing = false
                        console.log("waiting 3s ")
                    })

                }
            })
        })

        onKeyDown("q",()=>{
            player.move(-SPEED, 0)
        })

        let canJump  = true
        onKeyPress("space", () => {
            if (player.isGrounded()) {
                canJump = true
                // console.log(canJump)
                // console.log("player grounded")
                player.jump(JUMP_FORCE)
                player.play("jump")
            } else {
                // console.log("player on air")
                // console.log(canJump)
                if(canJump){
                    // console.log("can jump")
                    Dash(0,-100)
                    canJump = false
                } else {
                    // console.log("cannon jump")
                }
            }
        })

        onKeyPress("shift",(position)=> {

            const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
            spawnBullet(muzzlePos.x, muzzlePos.y, Vec2.fromAngle(gun.angle).scale(1, -1))
            //debug.log(mousePos().angle())
            if(!player.isGrounded()){
                if(isDashAvailable){
                    isDashing = true
                    Dash(dirX,dirY)
                }
            }

        })
    }


    // ##################################################################

    // ########################## GAMEPAD CONTROL #######################

    if(isGamepadConnected){
        // setGravity(1500)
        onGamepadStick("left", (v) => {
            player.move(v.x * 250, 0)
            onUpdate(()=>{
                if (v.x > 0 && v.y === 0){
                    gun.angle= 0
                    dirX = -100
                    dirY = 0
                }
                if (v.x === 0 && v.y > 0){
                    gun.angle= 90
                    dirX = 0
                    dirY = -100
                }
                if (v.x < 0 && v.y === 0){
                    gun.angle= 180
                    dirX = 100
                    dirY = 0
                }
                if (v.x === 0 && v.y < 0){
                    gun.angle= -90
                    dirX = 0
                    dirY = 100
                }
            })
        })

        let canJump  = true
        onGamepadButtonPress("south", () => {
            if (player.isGrounded()) {
                canJump = true
                // console.log(canJump)
                // console.log("player grounded")
                player.jump(JUMP_FORCE)
                player.play("jump")
            } else {
                // console.log("player on air")
                // console.log(canJump)
                if(canJump){
                    // console.log("can jump")
                    Dash(0,-100)
                    canJump = false
                } else {
                    // console.log("cannon jump")
                }
            }
        })

        onUpdate(()=>{
            onGamepadButtonPress("dpad-up",()=>{
                console.log("controller dpad up")
                gun.angle = -90
                dirX = 0
                dirY = 100
            })
            onGamepadButtonDown("dpad-down",()=>{
                console.log("controller dpad down")
                gun.angle = 90
                dirX = 0
                dirY = -100
            })
            onGamepadButtonDown("dpad-left",()=>{
                gun.angle = 180
                dirX = 100
                dirY = 0
            })
            onGamepadButtonDown("dpad-right",()=>{
                gun.angle = 0
                dirX = -100
                dirY = 0
            })
        })

        onGamepadButtonPress("west",(position)=> {
            console.log("west")

            const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
            spawnBullet(muzzlePos.x, muzzlePos.y, Vec2.fromAngle(gun.angle).scale(1, -1))
            //debug.log(mousePos().angle())
            if(!player.isGrounded()){
                if(!player.isGrounded()){
                    if(isDashAvailable){
                        isDashing = true
                        Dash(dirX,dirY)
                    }
                }
            }
        })

    }


    // #########################################################

    //######################### CAMERA ##########################

    player.onUpdate(()=>{
        camPos(player.pos)
    })

    //###########################################################

    // ###################### GUN ##############################

    const gun = add([
        // rect(35, 8),
        sprite("gun"),
        scale(0.04),
        pos(player.pos.x,player.pos.y),
        // pos(500,500),
        anchor(vec2(0,0)),
        area(),
        rotate(0),
        color(204, 230, 244),
        z(50),
        // z(49),
        "gun",
    ])

    onUpdate(() => {
        // const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
        // 	console.log("muzzle: ", muzzlePos)
        gun.pos = player.pos
        // 	console.log(gun.pos)
        // gun.angle = mousePos().angle(gun.pos)
        // 	console.log(gun.angle)
    })

    let isDashing = false

    function spawnBullet(bulletposX, bulletPosY, direction) {

        add([
            rect(25, 3),
            pos(gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))),
            anchor("top"),
            color(165, 36, 34),
            area(),
            move(Vec2.fromAngle(gun.angle), 400),
            z(20),
            //layer("game"),
            rotate(gun.angle),
            "playerBullet",
            "danger"
        ]);
    }

    // ###############################################################


    // ######################## ENEMY #########################

    function patrol(speed = 100, dir = 1) {
        let changeDirectionTimeout;

        function changeDirection() {
            dir = -dir; // Change la direction
            // Réinitialise le délai pour le prochain changement de direction
            changeDirectionTimeout = setTimeout(changeDirection, 3000); // 3000 ms = 3 secondes
        }

        return {
            id: "patrol",
            require: ["pos", "area"],
            add() {
                // Lance le délai initial pour le premier changement de direction
                changeDirectionTimeout = setTimeout(changeDirection, 3000); // 3000 ms = 3 secondes

                this.on("collide", (obj, col) => {
                    if (col.isLeft() || col.isRight()) {
                        dir = -dir;
                    }
                });
            },
            update() {
                this.move(speed * dir, 0);
            },
        };
    }

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

    // function spawnBullet(p) {
    // 	if (gunDestroyed) {
    // 		add([
    // 			rect(12, 12),
    // 			pos(p),
    // 			anchor('center'),
    // 			area(),
    // 			color(300, 0, 0),
    // 			move(0, 400),
    // 			offscreen({ destroy: true }),
    // 			'playerBullet',
    // 		])
    // 	}
    // }

    // onKeyPress('up', () => {
    // 	spawnBullet(player.pos.add(20, 20));
    // })

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
        shake(200)
    })

    // player.onCollide('gun', (m) => {
    // 	destroy(m)
    // 	gunDestroyed = true
    // })

    player.onCollide("dangerous", () => {
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

    onCollide("playerBullet", "dangerous", (p, d) => {
        destroy(d)
        shake(10)
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

// ############################ SCENE LVL1 ################################"
scene('level1',()=> {

    const level1 = [
        addLevel(

            [

                ////////////////FOND BLEU ///////////////////////

                '                                                     ',
                '                    de        de                     ',
                '  nnnnnnnn            nnnnnnnn            nnnnnnnnn  ',
                '          n       nnnn        nnnn       n           ',
                '                                                     ',
                '                nn                nn                 ',
                '                                                     ',
                '                                    nnnnn            ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                     bbbbbbbb                        ',
                '                    bddddddddbb                      ',
                '                   bdddddddddddd                     ',
                '                   dddddddddddd                      ',
                '                     ddddddddd                       ',
                '                      abdddab                        ',
                '                      dedddde                        ',
                '                       ddddd                         ',
                '                       ddddd                         ',
                '                       ddddd                         ',
                '  bbddbb               ddddd                 bddbbb  ',
                '  b ddd                ddddd                  ddd b  ',
                '  d ddd                ddddd                  ddd d  ',
                '  d ddd                                       ddd d  ',
                '  d ddd                                       ddd d  ',
                '  d ddd                                       ddd d  ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                              ddd d  ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
                '                                                     ',
///////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {



                    "a": () => [sprite("map", {frame:0}),scale(1)],
                    "b": () => [sprite("map", {frame:1}),scale(1)],
                    "c": () => [sprite("map", {frame:2}),scale(1)],
                    "d": () => [sprite("map", {frame:3}),scale(1)],
                    "e": () => [sprite("map", {frame:4}),scale(1)],
                    "f": () => [sprite("map", {frame:5}),scale(1)],
                    "g": () => [sprite("map", {frame:6}),scale(1)],
                    "h": () => [sprite("map", {frame:7}),scale(1)],
                    "i": () => [sprite("map", {frame:8}),scale(1)],
                    "j": () => [sprite("map", {frame:9}),scale(1)],
                    "k": () => [sprite("map", {frame:10}),scale(1)],
                    "l": () => [sprite("map", {frame:11}),scale(1)],
                    "m": () => [sprite("map", {frame:12}),scale(1)],
                    "n": () => [sprite("map", {frame:20}),scale(1)],
                    "o": () => [sprite("map", {frame:21}),scale(1)],
                    "p": () => [sprite("map", {frame:22}),scale(1)],
                    "q": () => [sprite("map", {frame:23}),scale(1)],
                    "r": () => [sprite("map", {frame:24}),scale(1)],
                    "s": () => [sprite("map", {frame:25}),scale(1)],
                    "t": () => [sprite("map", {frame:26}),scale(1)],
                    "u": () => [sprite("map", {frame:27}),scale(1)],
                    "v": () => [sprite("map", {frame:28}),scale(1)],
                    "w": () => [sprite("map", {frame:29}),scale(1)],
                    "x": () => [sprite("map", {frame:30}),scale(1)],
                    "y": () => [sprite("map", {frame:31}),scale(1)],
                    "!": () => [sprite("map", {frame:40}),scale(1)],
                    ":": () => [sprite("map", {frame:41}),scale(1)],
                    ";": () => [sprite("map", {frame:42}),scale(1)],
                    "*": () => [sprite("map", {frame:43}),scale(1)],
                    "ù": () => [sprite("map", {frame:44}),scale(1)],
                    "$": () => [sprite("map", {frame:45}),scale(1)],


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

                //////////////// PLATEFORM ///////////////////////

                '                                                     ',
                ' ccccccccc          deccccccccde          cccccccccc ',
                ' c        c      ccccc        ccccc      c         c ',
                ' c         c     c                c     c          c ',
                ' c         c   ccc                ccc   c          c ',
                ' c         c   c                    c   c          c ',
                ' c         ccccc         fffff      ccccc          c ',
                ' cc                                             ffcc ',
                '  c                                               c  ',
                '  c          ffff                                 c  ',
                '  c                               fffff           c  ',
                '  c                                               c  ',
                '  cccccc             cccccccc                cccccc  ',
                '       c            c        cc              c       ',
                '       c           c           c         fff c       ',
                '       c          c             c            c       ',
                '       c          c            c             c       ',
                '       c          ccc         c              c       ',
                '       c             cab   abc     ff        c       ',
                '       c              de  fde                c       ',
                '       c              c     c                c       ',
                '       c              c     c                c       ',
                ' ccccccc              cf    c           fffffccccccc ',
                ' c                    c     c                      c ',
                ' c                    c     c                      c ',
                ' c                    c     c    fffff             c ',
                ' c                        fff                 fff  c ',
                ' c    fffff                                        c ',
                ' c                                                 c ',
                ' ccccccccccccccff                    ffccccccccccccc ',
                '              c                     f  c             ',
                '              c                    f   c             ',
                '              c        fffffff         c             ',
                '              c                        c             ',
                '              c                        c             ',
                ' ccccccc      c                ffffffffc     ccccccc ',
                ' c     c      c                        c     c     c ',
                ' c     c      c             ff         c     c     c ',
                ' c     c      c                        c     c     c ',
                ' c     c      c                        c     cf    c ',
                ' c     cccccccc    ffffff              ccccccc     c ',
                ' c                                                 c ',
                ' c                                                 c ',
                ' c                             fffff             ffc ',
                ' c                                                 c ',
                ' c                                                 c ',
                ' cccccccfffffff       ffffff             ffffccccccc ',
                '       c                                     c       ',
                '       c                                     c       ',
                '       c                         fffff       c       ',
                '       c                                     c       ',
                '       ccccccccccccccccccccccccccccccccccccccc       ',
                '                                                     ',
//////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {


                    "a": () => [sprite("map", {frame:33}),scale(1), area(),body({isStatic:true}) ],
                    "b": () => [sprite("map", {frame:34}),scale(1), area(),body({isStatic:true}) ],
                    "c": () => [sprite("map", {frame:52}),scale(1), area(),body({isStatic:true}),"block" ],
                    "d": () => [sprite("map", {frame:53}),scale(1), area(),body({isStatic:true}) ],
                    "e": () => [sprite("map", {frame:54}),scale(1), area(),body({isStatic:true}) ],
                    "f": () => [sprite("map", {frame:180}),scale(1), area(),body({isStatic:true}),"block" ],
                    "g": () => [sprite("map", {frame:181}),scale(1), area(),body({isStatic:true}) ],
                    "h": () => [sprite("map", {frame:182}),scale(1), area(),body({isStatic:true}) ],
                    "i": () => [sprite("map", {frame:183}),scale(1), area(),body({isStatic:true}) ],
                    "j": () => [sprite("map", {frame:184}),scale(1), area(),body({isStatic:true}) ],
                    "k": () => [sprite("map", {frame:185}),scale(1), area(),body({isStatic:true}) ],
                    "l": () => [sprite("map", {frame:186}),scale(1), area(),body({isStatic:true}) ],
                    "m": () => [sprite("map", {frame:187}),scale(1), area(),body({isStatic:true}) ],
                    "n": () => [sprite("map", {frame:188}),scale(1), area(),body({isStatic:true}) ],
                    "o": () => [sprite("map", {frame:189}),scale(1), area(),body({isStatic:true}) ],
                    "p": () => [sprite("map", {frame:190}),scale(1), area(),body({isStatic:true}) ],
                },
            }),

        addLevel(
            [

                ///////////////  DECORATION BLEU  ///////////////////////

                'crrrrrrrrrcchiccchichirrrrrrrrhichicchicccrrrrrrrrrrc',
                'j         rjpqjrrpqrpq        pqrpqrrpqjjr          j',
                'j          rccjhi                  hiccjr           j',
                'j           rrjpq                  pqrrj            j',
                'j           hij                      hij            j',
                'j           pqr                      pqr            j',
                'j                                                   j',
                'r                                                   r',
                'hi                                                 hi',
                'pq                                                 pq',
                'cc                                                 cc',
                'rr                                                 rr',
                'hi                                                 hi',
                'pqrrccc                                       cccrrpq',
                'cchijjj                                       jjjhicc',
                'jjpqrrj                                       jrrpqjj',
                'jjcchij                                       jhiccjj',
                'jjrrpqj                                       jpqrrjj',
                'jjhiccj                                       jcchijj',
                'rrpqrrj                                       jpqrrjj',
                'hicchij                                       jrrpqrr',
                'pqrrpqr                                       jhicchi',
                'j                                                   c',
                'j                                                   j',
                'j  c   c                                     c   c  j',
                'j  j   j                                     j   j  j',
                'j  j   j                                     j   j  j',
                'j  j   j                                     j   j  j',
                'j  r   r                                     r   r  j',
                'j                                                   j',
                'jhicchicchiccc                          hicchijjhijjj',
                'jpqrrpqrrpqrrj                          pqrrpqrrpqrrj',
                'jrrrrrrrrrrrrj                          rrrrrrrrrrrrr',
                'jjjhijjhijjhij                          jjhijjhijjhij',
                'jrrpqrrpqrrpqj                          rrpqrrpqrrpqj',
                'j       jhijjj                          hijjj    c  j',
                'j       jpqjjj                          pqjjj    j  j',
                'j       jjjhij                          jjhij    j  j',
                'j       jjjpqj                          jjpqj    j  j',
                'j       rrrrrr                          rrrrr    j  j',
                'j                                                j  j',
                'j                                            c   j  j',
                'j                                            j   j  j',
                'j                                            j   j  j',
                'j                                            j   j  j',
                'j                                            r   r  j',
                'j                                                   j',
                'jhicchi                                       hicchij',
                'jpqrrpq                                       pqrrpqj',
                'jcchicc                                       rrpqrrj',
                'jrrpqrr                                       rrpqrrj',
                'jhirrrr                                       rrrrhij',
                'rpqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpqr',
/////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {


                    "a": () => [sprite("map", {frame:13}),scale(1)],
                    "b": () => [sprite("map", {frame:14}),scale(1)],
                    "c": () => [sprite("map", {frame:15}),scale(1)],
                    "d": () => [sprite("map", {frame:16}),scale(1)],
                    "e": () => [sprite("map", {frame:17}),scale(1)],
                    "f": () => [sprite("map", {frame:18}),scale(1)],
                    "g": () => [sprite("map", {frame:19}),scale(1)],
                    "h": () => [sprite("map", {frame:33}),scale(1)],
                    "i": () => [sprite("map", {frame:34}),scale(1)],
                    "j": () => [sprite("map", {frame:35}),scale(1)],
                    "k": () => [sprite("map", {frame:36}),scale(1)],
                    "l": () => [sprite("map", {frame:37}),scale(1)],
                    "m": () => [sprite("map", {frame:38}),scale(1)],
                    "n": () => [sprite("map", {frame:39}),scale(1)],
                    "o": () => [sprite("map", {frame:52}),scale(1)],
                    "p": () => [sprite("map", {frame:53}),scale(1)],
                    "q": () => [sprite("map", {frame:54}),scale(1)],
                    "r": () => [sprite("map", {frame:55}),scale(1)],
                    "s": () => [sprite("map", {frame:56}),scale(1)],
                    "t": () => [sprite("map", {frame:57}),scale(1)],
                    "u": () => [sprite("map", {frame:58}),scale(1)],
                    "v": () => [sprite("map", {frame:59}),scale(1)],
                },
            }),addLevel(
            [

                ///////////////  ACCESSOIRE BLEU  ///////////////////////

                '                                                   ',
                '                           *                       ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                     a                             ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                             *                     ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '                                                   ',
                '      *                        *                   ',
                '                                                   ',
                '                                                   ',
/////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {


                    "a": () => [sprite("battery", {frame:1}),scale(4.5)],
                    "b": () => [sprite("explosion", {frame:14}),scale(4.5)],
                    "c": () => [sprite("explosion2", {frame:15}),scale(4.5)],
                    "d": () => [sprite("smoke", {frame:16}),scale(4.5)],
                    "e": () => [sprite("timerswitch", {frame:17}),scale(4.5)],
                    "f": () => [sprite("button", {frame:18}),scale(4.5)],
                    "g": () => [sprite("powerlight", {frame:19}),scale(4.5)],
                    "h": () => [sprite("shipbits", {frame:33}),scale(4.5)],
                    "i": () => [sprite("pit", {frame:34}),scale(4.5)],
                    "*": () => [sprite("pod", {frame:3}),scale(2.5), anchor("bot"), patrol(), offscreen({ hide: true }),  area(), "dangerous"],
                    "k": () => [sprite("messagebox", {frame:36}),scale(4.5)],
                    "l": () => [sprite("rocks", {frame:37}),scale(4.5)],
                    "m": () => [sprite("beam", {frame:38}),scale(4.5)],
                    "n": () => [sprite("crate", {frame:39}),scale(4.5)],
                    "o": () => [sprite("crate2", {frame:52}),scale(4.5)],
                    "p": () => [sprite("droplets", {frame:53}),scale(4.5)],
                    "q": () => [sprite("editorblock", {frame:54}),scale(4.5)],
                    "r": () => [sprite("jet", {frame:55}),scale(4.5)],
                    "s": () => [sprite("jet2", {frame:56}),scale(4.5)],
                    "t": () => [sprite("jet3", {frame:57}),scale(4.5)],
                    "u": () => [sprite("pod1", {frame:58}),scale(4.5)],
                    "v": () => [sprite("portrait", {frame:59}),scale(4.5)],
                },
            })

    ]

    // ######################## PLAYER #########################

    const SPEED = 250
    let JUMP_FORCE = 400
    const ENEMY_SPEED = 60
    const BULLET_SPEED = 200
    let PLAYER_HEALTH = 100
    let gunDestroyed = false

    const player = add([
        sprite('astro'),
        scale(5),
        anchor("center"),
        pos(300,300),
        area(),
        body(),
        health(PLAYER_HEALTH),
        z(49),
        "player"
    ])

    //######################### MOUVEMENT ###########################

    // Switch to "idle" or "run" animation when player hits ground
    player.onGround(() => {
        if (!isKeyDown("left") && !isKeyDown("right")) {
            player.play("idle")
        } else {
            player.play("run")
        }
    })

    // ########################## DASH ##############################

    let isDashAvailable = true
    player.onGround(()=>{
        isDashAvailable = true
    })
    function Dash(dashX,dashY){
        isDashAvailable = false
        camScale(1.1,1)
        const t = tween(player.pos,vec2((player.pos.x)+dashX,(player.pos.y)+dashY),0.2,(p) => player.pos = p,easings.easeOutSine)
        onUpdate(()=>{
            player.onCollide("block",()=>{
                // console.log("player collide with block")
                t.cancel()
            })
        })
        wait(0.5,()=>{
            camScale(1,1)
        })
    }

    // ########################## KEYBOARD CONTROL #############################
    let dirX = 0
    let dirY = 0
    if(!isGamepadConnected){

        onUpdate(()=>{
            onKeyDown("z",()=>{
                gun.angle = -90
                dirX = 0
                dirY = 100
            })
            onKeyDown("s",()=>{
                gun.angle = 90
                dirX = 0
                dirY = -100
            })

            onKeyDown("q",()=>{
                gun.angle = 180
                dirX = 100
                dirY = 0
            })

            onKeyDown("d",()=>{
                gun.angle = 0
                dirX = -100
                dirY = 0
            })

            if(isKeyDown("z") && isKeyDown("d"))
            {
                console.log("up right")
                gun.angle = -45
                dirX = -100
                dirY = 100
            }
            if(isKeyDown("z") && isKeyDown("q"))
            {
                console.log("up left")
                gun.angle = -135
                dirX = 100
                dirY = 100
            }
            if(isKeyDown("s") && isKeyDown("q"))
            {
                console.log("down left")
                gun.angle = 135
                dirX = 100
                dirY = -100
            }
            if(isKeyDown("s") && isKeyDown("d"))
            {
                console.log("down right")
                gun.angle = 45
                dirX = -100
                dirY = 100
            }
        })

        onKeyDown("d",()=>{
            player.move(SPEED, 0)
            onUpdate(()=>{
                if(isDashing){
                    player.move(0,0)
                    wait(3,()=>{
                        isDashing = false
                        console.log("waiting 3s ")
                    })

                }
            })
        })

        onKeyDown("q",()=>{
            player.move(-SPEED, 0)
        })

        let canJump  = true
        onKeyPress("space", () => {
            if (player.isGrounded()) {
                canJump = true
                // console.log(canJump)
                // console.log("player grounded")
                player.jump(JUMP_FORCE)
                player.play("jump")
            } else {
                // console.log("player on air")
                // console.log(canJump)
                if(canJump){
                    // console.log("can jump")
                    Dash(0,-100)
                    canJump = false
                } else {
                    // console.log("cannon jump")
                }
            }
        })

        onKeyPress("shift",(position)=> {

            const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
            spawnBullet(muzzlePos.x, muzzlePos.y, Vec2.fromAngle(gun.angle).scale(1, -1))
            //debug.log(mousePos().angle())
            if(!player.isGrounded()){
                if(isDashAvailable){
                    isDashing = true
                    Dash(dirX,dirY)
                }
            }

        })
    }


    // ##################################################################

    // ########################## GAMEPAD CONTROL #######################

    if(isGamepadConnected){
        // setGravity(1500)
        onGamepadStick("left", (v) => {
            player.move(v.x * 250, 0)
            onUpdate(()=>{
                if (v.x > 0 && v.y === 0){
                    gun.angle= 0
                    dirX = -100
                    dirY = 0
                }
                if (v.x === 0 && v.y > 0){
                    gun.angle= 90
                    dirX = 0
                    dirY = -100
                }
                if (v.x < 0 && v.y === 0){
                    gun.angle= 180
                    dirX = 100
                    dirY = 0
                }
                if (v.x === 0 && v.y < 0){
                    gun.angle= -90
                    dirX = 0
                    dirY = 100
                }
            })
        })

        let canJump  = true
        onGamepadButtonPress("south", () => {
            if (player.isGrounded()) {
                canJump = true
                // console.log(canJump)
                // console.log("player grounded")
                player.jump(JUMP_FORCE)
                player.play("jump")
            } else {
                // console.log("player on air")
                // console.log(canJump)
                if(canJump){
                    // console.log("can jump")
                    Dash(0,-100)
                    canJump = false
                } else {
                    // console.log("cannon jump")
                }
            }
        })

        onUpdate(()=>{
            onGamepadButtonPress("dpad-up",()=>{
                console.log("controller dpad up")
                gun.angle = -90
                dirX = 0
                dirY = 100
            })
            onGamepadButtonDown("dpad-down",()=>{
                console.log("controller dpad down")
                gun.angle = 90
                dirX = 0
                dirY = -100
            })
            onGamepadButtonDown("dpad-left",()=>{
                gun.angle = 180
                dirX = 100
                dirY = 0
            })
            onGamepadButtonDown("dpad-right",()=>{
                gun.angle = 0
                dirX = -100
                dirY = 0
            })
        })

        onGamepadButtonPress("west",(position)=> {
            console.log("west")

            const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
            spawnBullet(muzzlePos.x, muzzlePos.y, Vec2.fromAngle(gun.angle).scale(1, -1))
            //debug.log(mousePos().angle())
            if(!player.isGrounded()){
                if(!player.isGrounded()){
                    if(isDashAvailable){
                        isDashing = true
                        Dash(dirX,dirY)
                    }
                }
            }
        })

    }


    // #########################################################

    //######################### CAMERA ##########################

    player.onUpdate(()=>{
        camPos(player.pos)
    })

    //###########################################################

    // ###################### GUN ##############################

    const gun = add([
        // rect(35, 8),
        sprite("gun"),
        scale(0.04),
        pos(player.pos.x,player.pos.y),
        // pos(500,500),
        anchor(vec2(0,0)),
        area(),
        rotate(0),
        color(204, 230, 244),
        z(50),
        // z(49),
        "gun",
    ])

    onUpdate(() => {
        // const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
        // 	console.log("muzzle: ", muzzlePos)
        gun.pos = player.pos
        // 	console.log(gun.pos)
        // gun.angle = mousePos().angle(gun.pos)
        // 	console.log(gun.angle)
    })

    let isDashing = false

    function spawnBullet(bulletposX, bulletPosY, direction) {

        add([
            rect(25, 3),
            pos(gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))),
            anchor("top"),
            color(165, 36, 34),
            area(),
            move(Vec2.fromAngle(gun.angle), 400),
            z(20),
            //layer("game"),
            rotate(gun.angle),
            "playerBullet",
            "danger"
        ]);
    }

    // ###############################################################


    // ######################## ENEMY #########################

    function patrol(speed = 100, dir = 1) {
        let changeDirectionTimeout;

        function changeDirection() {
            dir = -dir; // Change la direction
            // Réinitialise le délai pour le prochain changement de direction
            changeDirectionTimeout = setTimeout(changeDirection, 3000); // 3000 ms = 3 secondes
        }

        return {
            id: "patrol",
            require: ["pos", "area"],
            add() {
                // Lance le délai initial pour le premier changement de direction
                changeDirectionTimeout = setTimeout(changeDirection, 3000); // 3000 ms = 3 secondes

                this.on("collide", (obj, col) => {
                    if (col.isLeft() || col.isRight()) {
                        dir = -dir;
                    }
                });
            },
            update() {
                this.move(speed * dir, 0);
            },
        };
    }

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

    // function spawnBullet(p) {
    // 	if (gunDestroyed) {
    // 		add([
    // 			rect(12, 12),
    // 			pos(p),
    // 			anchor('center'),
    // 			area(),
    // 			color(300, 0, 0),
    // 			move(0, 400),
    // 			offscreen({ destroy: true }),
    // 			'playerBullet',
    // 		])
    // 	}
    // }

    // onKeyPress('up', () => {
    // 	spawnBullet(player.pos.add(20, 20));
    // })

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
        shake(200)
    })

    // player.onCollide('gun', (m) => {
    // 	destroy(m)
    // 	gunDestroyed = true
    // })

    player.onCollide("dangerous", () => {
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

    onCollide("playerBullet", "dangerous", (p, d) => {
        destroy(d)
        shake(10)
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

// ############################ SCENE LVL2 ################################"
scene('level2',()=> {

    const level2 = [
        addLevel(
            [
                '                                                                                                                 ',
                '             nnnnnnnnnnnnnnn                                                                                     ',
                '             ddddddddddddddd                                                                                     ',
                '             ddddddddddddddd                   nnnnnnnnnnn                                                       ',
                '     nnnnnnnnddddddddddddddd                  ndddddddddddn                                                      ',
                '             ddddddddddddddd                 ndddddddddddddn                                                     ',
                '                     ddddddd               ndddddddddddddddddn                                                   ',
                '                      dddddd              ndddddddddddddddddddn                                                  ',
                '                       ddddd             ndddddddddddddddddddddn                                                 ',
                '                                         dddddddddddddddddddddddd                                                ',
                '                                         dddddddddddddddddddddddd                                                ',
                '                                         dddddddddddddddddddddddd                                                ',
                '                                           ddddddddddddddddddd                                                   ',
                '                                           ddddddddddddddddddd                                                   ',
                '                                             ddddddddddddddd               dddddddddddd                          ',
                '                                              ddddddddddddd               dddddddddddddd                         ',
                '                                                                         ddddddddddddddddddddd                   ',
                '                                                                        dddddddddddddddddddddd                   ',
                '                                                                        ddddddddddddddddddd                      ',
                '                                                                        dddddddddddddddddd                       ',
                '                                                                        ddddddddddddddddd                        ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',

///////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    /////////////// /FOND ORANGE ///////////////////////

                    "a": () => [sprite("map", {frame:60}),scale(1)],
                    "b": () => [sprite("map", {frame:61}),scale(1)],
                    "c": () => [sprite("map", {frame:62}),scale(1)],
                    "d": () => [sprite("map", {frame:63}),scale(1)],
                    "e": () => [sprite("map", {frame:64}),scale(1)],
                    "f": () => [sprite("map", {frame:65}),scale(1)],
                    "g": () => [sprite("map", {frame:66}),scale(1)],
                    "h": () => [sprite("map", {frame:67}),scale(1)],
                    "i": () => [sprite("map", {frame:68}),scale(1)],
                    "j": () => [sprite("map", {frame:69}),scale(1)],
                    "k": () => [sprite("map", {frame:70}),scale(1)],
                    "l": () => [sprite("map", {frame:71}),scale(1)],
                    "m": () => [sprite("map", {frame:72}),scale(1)],
                    "n": () => [sprite("map", {frame:80}),scale(1)],
                    "o": () => [sprite("map", {frame:81}),scale(1)],
                    "p": () => [sprite("map", {frame:82}),scale(1)],
                    "q": () => [sprite("map", {frame:83}),scale(1)],
                    "r": () => [sprite("map", {frame:84}),scale(1)],
                    "s": () => [sprite("map", {frame:85}),scale(1)],
                    "t": () => [sprite("map", {frame:86}),scale(1)],
                    "u": () => [sprite("map", {frame:87}),scale(1)],
                    "v": () => [sprite("map", {frame:88}),scale(1)],
                    "w": () => [sprite("map", {frame:89}),scale(1)],
                    "x": () => [sprite("map", {frame:90}),scale(1)],
                    "y": () => [sprite("map", {frame:91}),scale(1)],
                },
            }),
        addLevel(
            [
                'kccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccck',
                'k   k   k   k               k       k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k',
                'k   k   k   k               k       k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k   k',
                'kkk kkk kkk k               k       k   k   k               k   k   kabababababababababababab   k   k   k   k   k',
                'k   k                       k       k   k   k               k   k   kdedededededededededededeabababababab   k   k',
                'k   k                       kcccc       k   k               k   k  ab                        dededededede   k   k',
                'k kkk           iiiii       k   c       k   fffffff             k  de                                    abab   k',
                'k cc                 i      k   c       k                       kabffffff                                dedecc k',
                'kc  c                 i     k   ccccc   k                       kde                                         c  ck',
                'k                     iiiiiik       c   k                                                                       k',
                'k                                   cccck                ff                           ffff                      k',
                'k                                       k                                                                       k',
                'kiiii     ccc       fffff               kjj                   jjj                                   ccc   iiiiiik',
                'k    i    ckc                           abk                   kab          cccccccccccc             k c         k',
                'k     i   c  c                          dekjj               jjkde         c            c           c  c         k',
                'k     i   c   c                                                          c              ccc       c   c         k',
                'k    i    ckk kc              ffff                fff                   c                        ck kkc       ffk',
                'kiiii     c   c                                                                                   c   c         k',
                'k cc      c  c     ff                                                       ffffffff       ccc     c  c         k',
                'kc  c     ckc     f                        abababab   abababab                            c         k c fff     k',
                'k         ccc    f                     iiiidededede  fdedededeiiii                       c          ccc         k',
                'k                                      abab k   k       k   k abab      ccccccccccccccccc                       k',
                'kccccc                               iidede k   k       k   k dedeii                                       ccccck',
                'k   kc                               ab k   k   k       k   k   k ab                                       ck   k',
                'k   kc                            iiide k   k   kf      k   k   k deiii                                    ck   k',
                'kkk kcccccccc                     abk   k   k   k       k   k   k   kab       fff                   cccccccck   k',
                'k   kkk kkk k                   iidek   k   k   k     ffk   k   k   kdeii                           k   k   k   k',
                'k   k   k   k                  iab  k   k   k   k       k   k   k   k  abi                    ff    k   k   k   k',
                'k kkk   k   kcccccccccccccccciiide  k   k   k   k       k   k   k   k  deiii         ccccccccccccccck   k   k   k',
                'kccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccckccck',
//////////////////////////////////////////////////////////////////////|


            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    //////////////// PLATEFORM ORANGE ///////////////////////

                    "a": () => [sprite("map", {frame:93}),scale(1), area(),body({isStatic:true}), "block" ],
                    "b": () => [sprite("map", {frame:94}),scale(1), area(),body({isStatic:true}), "block" ],
                    "c": () => [sprite("map", {frame:112}),scale(1), area(),body({isStatic:true}), "block" ],
                    "d": () => [sprite("map", {frame:113}),scale(1), area(),body({isStatic:true}), "block" ],
                    "e": () => [sprite("map", {frame:114}),scale(1), area(),body({isStatic:true}), "block" ],
                    "f": () => [sprite("map", {frame:200}),scale(1), area(),body({isStatic:true}), "block" ],
                    "g": () => [sprite("map", {frame:201}),scale(1), area(),body({isStatic:true}), "block" ],
                    "h": () => [sprite("map", {frame:202}),scale(1), area(),body({isStatic:true}), "block" ],
                    "i": () => [sprite("map", {frame:203}),scale(1), area(),body({isStatic:true}), "block" ],
                    "j": () => [sprite("map", {frame:204}),scale(1), area(),body({isStatic:true}), "block" ],
                    "k": () => [sprite("map", {frame:205}),scale(1), area(),body({isStatic:true}), "block" ],
                    "l": () => [sprite("map", {frame:206}),scale(1), area(),body({isStatic:true}), "block" ],
                    "m": () => [sprite("map", {frame:207}),scale(1), area(),body({isStatic:true}), "block" ],
                    "n": () => [sprite("map", {frame:208}),scale(1), area(),body({isStatic:true}), "block" ],
                    "o": () => [sprite("map", {frame:209}),scale(1), area(),body({isStatic:true}), "block" ],
                    "p": () => [sprite("map", {frame:210}),scale(1), area(),body({isStatic:true}), "block" ],
                },
            }),
        addLevel(
            [
                '                                                                                                                 ',
                ' hic hic hic                 hiooccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc     ',
                ' pqj pqj pqj                 pqhijjj jjj jjj jjr rrr rrr rjj jjj jjj rrr rrr rrr rrr rrr rrr jjj jjj jjj jjj     ',
                '   r   r   r                 hipqjjj jjj jjj jr           rj jjj jjj                         rrr rrr rrr jjj     ',
                ' chi                         pqoorrr jjj jjj r             r jjj jjr                                     jjj     ',
                ' jpq   c                         hioojjj jjr                 rjj jj                                      rrr     ',
                ' r     j                         pqhijjj jr                   rj rr                                              ',
                '       j                         hipqjjj r                     r                                                 ',
                '       j                             jjj                                                                 c       ',
                ' c  c  j                             rrr                                                                 j  c  c ',
                ' j  j  j                                                                                                 j  j  j ',
                ' r  r  j              c                                                                         c        j  r  r ',
                '       j        c     j                  jj                   jjj                               j        j       ',
                ' hioo  j        j     j                                                                         j    o   j  c  c ',
                ' pqhio j   hi   j     j                    jj               jj                                  j   hi   j  j  j ',
                ' hipqo j   pqc  j     j                                                                         j  cpq   j  j  j ',
                ' pqoo  j     j  j     j                                                                         j  j     j  j  j ',
                '       j   hir  j     j                                                                         j  rhi   j  j  j ',
                '       j   pq   j     j                                                                         j   pq   j  j  j ',
                '       j        j  c  j                                                                      c  j  c o   j  j  j ',
                ' c  c  j        j  j  j                                                                   c  j  j  j     j  j  j ',
                ' r  r  j        j  j  j                    c ccc         ccc c                            j  j  j  j  c  j  r  r ',
                '       j        j  j  j                    j jjj         jjj j                            j  j  j  j  j  j       ',
                ' hic   j        j  j  j                c ccj jjj         jjj jcc c                        j  j  j  j  j  j   chi ',
                ' pqj   r        j  j  j                j jjj jjj         jjj jjj j                        j  j  j  j  r  r   jpq ',
                '   r         c  j  j  j              ccj jjj jjj         jjj jjj jcc                      j  j  j  j         r   ',
                ' chi   c   c j  j  j  j              jjj jjj jjj         jjj jjj jjj                      j  j  j  j c   c   jic ',
                ' jpq hij hij r  r  r  r           cc jjj jjj jjj         jjj jjj jjj cc                   r  r  r  r jhi jhi pqj ',
                ' r   pqr pqr                      jj rrr rrr rrr         rrr rrr rrr jj                              rpq rpq   r ',
                '                                                                                                                 ',
/////////////////////////////////////////////////////////////////////|


            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    ///////////////  DECORATION ORANGE   ///////////////////////

                    "a": () => [sprite("map", {frame:73}),scale(1)],
                    "b": () => [sprite("map", {frame:74}),scale(1)],
                    "c": () => [sprite("map", {frame:75}),scale(1)],
                    "d": () => [sprite("map", {frame:76}),scale(1)],
                    "e": () => [sprite("map", {frame:77}),scale(1)],
                    "f": () => [sprite("map", {frame:78}),scale(1)],
                    "g": () => [sprite("map", {frame:79}),scale(1)],
                    "h": () => [sprite("map", {frame:93}),scale(1)],
                    "i": () => [sprite("map", {frame:94}),scale(1)],
                    "j": () => [sprite("map", {frame:95}),scale(1)],
                    "k": () => [sprite("map", {frame:96}),scale(1)],
                    "l": () => [sprite("map", {frame:97}),scale(1)],
                    "m": () => [sprite("map", {frame:98}),scale(1)],
                    "n": () => [sprite("map", {frame:99}),scale(1)],
                    "o": () => [sprite("map", {frame:112}),scale(1)],
                    "p": () => [sprite("map", {frame:113}),scale(1)],
                    "q": () => [sprite("map", {frame:114}),scale(1)],
                    "r": () => [sprite("map", {frame:115}),scale(1)],
                    "s": () => [sprite("map", {frame:116}),scale(1)],
                    "t": () => [sprite("map", {frame:117}),scale(1)],
                    "u": () => [sprite("map", {frame:118}),scale(1)],
                    "v": () => [sprite("map", {frame:119}),scale(1)],
                },
            }),
        addLevel(
            [
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
                '                                                                                                                 ',
            ], {
                tileWidth: 36,
                tileHeight: 36,
                tiles: {


                    "a": () => [sprite("battery", {frame:1}),scale(1)],
                    "b": () => [sprite("explosion", {frame:14}),scale(1)],
                    "c": () => [sprite("explosion2", {frame:15}),scale(1)],
                    "d": () => [sprite("smoke", {frame:16}),scale(1)],
                    "e": () => [sprite("timerswitch", {frame:17}),scale(1)],
                    "f": () => [sprite("button", {frame:18}),scale(1)],
                    "g": () => [sprite("powerlight", {frame:19}),scale(1)],
                    "h": () => [sprite("shipbits", {frame:33}),scale(1)],
                    "i": () => [sprite("pit", {frame:34}),scale(1)],
                    "*": () => [sprite("pod", {frame:3}),scale(2.5)],
                    "k": () => [sprite("messagebox", {frame:36}),scale(1)],
                    "l": () => [sprite("rocks", {frame:37}),scale(1)],
                    "m": () => [sprite("beam", {frame:38}),scale(1)],
                    "n": () => [sprite("crate", {frame:39}),scale(1)],
                    "o": () => [sprite("crate2", {frame:52}),scale(1)],
                    "p": () => [sprite("droplets", {frame:53}),scale(1)],
                    "q": () => [sprite("editorblock", {frame:54}),scale(1)],
                    "r": () => [sprite("jet", {frame:55}),scale(1)],
                    "s": () => [sprite("jet2", {frame:56}),scale(1)],
                    "t": () => [sprite("jet3", {frame:57}),scale(1)],
                    "u": () => [sprite("pod1", {frame:58}),scale(1)],
                    "v": () => [sprite("portrait", {frame:59}),scale(1)],
                },
            })
    ]

    // ######################## PLAYER #########################

    const SPEED = 250
    let JUMP_FORCE = 400
    const ENEMY_SPEED = 60
    const BULLET_SPEED = 200
    let PLAYER_HEALTH = 100
    let gunDestroyed = false

    const player = add([
        sprite('astro'),
        scale(5),
        anchor("center"),
        pos(300,300),
        area(),
        body(),
        health(PLAYER_HEALTH),
        z(49),
        "player"
    ])

    //######################### MOUVEMENT ###########################

    // Switch to "idle" or "run" animation when player hits ground
    player.onGround(() => {
        if (!isKeyDown("left") && !isKeyDown("right")) {
            player.play("idle")
        } else {
            player.play("run")
        }
    })

    // ########################## DASH ##############################

    let isDashAvailable = true
    player.onGround(()=>{
        isDashAvailable = true
    })
    function Dash(dashX,dashY){
        isDashAvailable = false
        camScale(1.1,1)
        const t = tween(player.pos,vec2((player.pos.x)+dashX,(player.pos.y)+dashY),0.2,(p) => player.pos = p,easings.easeOutSine)
        onUpdate(()=>{
            player.onCollide("block",()=>{
                // console.log("player collide with block")
                t.cancel()
            })
        })
        wait(0.5,()=>{
            camScale(1,1)
        })
    }

    // ########################## KEYBOARD CONTROL #############################
    let dirX = 0
    let dirY = 0
    if(!isGamepadConnected){

        onUpdate(()=>{
            onKeyDown("z",()=>{
                gun.angle = -90
                dirX = 0
                dirY = 100
            })
            onKeyDown("s",()=>{
                gun.angle = 90
                dirX = 0
                dirY = -100
            })

            onKeyDown("q",()=>{
                gun.angle = 180
                dirX = 100
                dirY = 0
            })

            onKeyDown("d",()=>{
                gun.angle = 0
                dirX = -100
                dirY = 0
            })

            if(isKeyDown("z") && isKeyDown("d"))
            {
                console.log("up right")
                gun.angle = -45
                dirX = -100
                dirY = 100
            }
            if(isKeyDown("z") && isKeyDown("q"))
            {
                console.log("up left")
                gun.angle = -135
                dirX = 100
                dirY = 100
            }
            if(isKeyDown("s") && isKeyDown("q"))
            {
                console.log("down left")
                gun.angle = 135
                dirX = 100
                dirY = -100
            }
            if(isKeyDown("s") && isKeyDown("d"))
            {
                console.log("down right")
                gun.angle = 45
                dirX = -100
                dirY = 100
            }
        })

        onKeyDown("d",()=>{
            player.move(SPEED, 0)
            onUpdate(()=>{
                if(isDashing){
                    player.move(0,0)
                    wait(3,()=>{
                        isDashing = false
                        console.log("waiting 3s ")
                    })

                }
            })
        })

        onKeyDown("q",()=>{
            player.move(-SPEED, 0)
        })

        let canJump  = true
        onKeyPress("space", () => {
            if (player.isGrounded()) {
                canJump = true
                // console.log(canJump)
                // console.log("player grounded")
                player.jump(JUMP_FORCE)
                player.play("jump")
            } else {
                // console.log("player on air")
                // console.log(canJump)
                if(canJump){
                    // console.log("can jump")
                    Dash(0,-100)
                    canJump = false
                } else {
                    // console.log("cannon jump")
                }
            }
        })

        onKeyPress("shift",(position)=> {

            const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
            spawnBullet(muzzlePos.x, muzzlePos.y, Vec2.fromAngle(gun.angle).scale(1, -1))
            //debug.log(mousePos().angle())
            if(!player.isGrounded()){
                if(isDashAvailable){
                    isDashing = true
                    Dash(dirX,dirY)
                }
            }

        })
    }


    // ##################################################################

    // ########################## GAMEPAD CONTROL #######################

    if(isGamepadConnected){
        // setGravity(1500)
        onGamepadStick("left", (v) => {
            player.move(v.x * 250, 0)
            onUpdate(()=>{
                if (v.x > 0 && v.y === 0){
                    gun.angle= 0
                    dirX = -100
                    dirY = 0
                }
                if (v.x === 0 && v.y > 0){
                    gun.angle= 90
                    dirX = 0
                    dirY = -100
                }
                if (v.x < 0 && v.y === 0){
                    gun.angle= 180
                    dirX = 100
                    dirY = 0
                }
                if (v.x === 0 && v.y < 0){
                    gun.angle= -90
                    dirX = 0
                    dirY = 100
                }
            })
        })

        let canJump  = true
        onGamepadButtonPress("south", () => {
            if (player.isGrounded()) {
                canJump = true
                // console.log(canJump)
                // console.log("player grounded")
                player.jump(JUMP_FORCE)
                player.play("jump")
            } else {
                // console.log("player on air")
                // console.log(canJump)
                if(canJump){
                    // console.log("can jump")
                    Dash(0,-100)
                    canJump = false
                } else {
                    // console.log("cannon jump")
                }
            }
        })

        onUpdate(()=>{
            onGamepadButtonPress("dpad-up",()=>{
                console.log("controller dpad up")
                gun.angle = -90
                dirX = 0
                dirY = 100
            })
            onGamepadButtonDown("dpad-down",()=>{
                console.log("controller dpad down")
                gun.angle = 90
                dirX = 0
                dirY = -100
            })
            onGamepadButtonDown("dpad-left",()=>{
                gun.angle = 180
                dirX = 100
                dirY = 0
            })
            onGamepadButtonDown("dpad-right",()=>{
                gun.angle = 0
                dirX = -100
                dirY = 0
            })
        })

        onGamepadButtonPress("west",(position)=> {
            console.log("west")

            const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
            spawnBullet(muzzlePos.x, muzzlePos.y, Vec2.fromAngle(gun.angle).scale(1, -1))
            //debug.log(mousePos().angle())
            if(!player.isGrounded()){
                if(!player.isGrounded()){
                    if(isDashAvailable){
                        isDashing = true
                        Dash(dirX,dirY)
                    }
                }
            }
        })

    }


    // #########################################################

    //######################### CAMERA ##########################

    player.onUpdate(()=>{
        camPos(player.pos)
    })

    //###########################################################

    // ###################### GUN ##############################

    const gun = add([
        // rect(35, 8),
        sprite("gun"),
        scale(0.04),
        pos(player.pos.x,player.pos.y),
        // pos(500,500),
        anchor(vec2(0,0)),
        area(),
        rotate(0),
        color(204, 230, 244),
        z(50),
        // z(49),
        "gun",
    ])

    onUpdate(() => {
        // const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
        // 	console.log("muzzle: ", muzzlePos)
        gun.pos = player.pos
        // 	console.log(gun.pos)
        // gun.angle = mousePos().angle(gun.pos)
        // 	console.log(gun.angle)
    })

    let isDashing = false

    function spawnBullet(bulletposX, bulletPosY, direction) {

        add([
            rect(25, 3),
            pos(gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))),
            anchor("top"),
            color(165, 36, 34),
            area(),
            move(Vec2.fromAngle(gun.angle), 400),
            z(20),
            //layer("game"),
            rotate(gun.angle),
            "playerBullet",
            "danger"
        ]);
    }

    // ###############################################################


    // ######################## ENEMY #########################

    function patrol(speed = 100, dir = 1) {
        let changeDirectionTimeout;

        function changeDirection() {
            dir = -dir; // Change la direction
            // Réinitialise le délai pour le prochain changement de direction
            changeDirectionTimeout = setTimeout(changeDirection, 3000); // 3000 ms = 3 secondes
        }

        return {
            id: "patrol",
            require: ["pos", "area"],
            add() {
                // Lance le délai initial pour le premier changement de direction
                changeDirectionTimeout = setTimeout(changeDirection, 3000); // 3000 ms = 3 secondes

                this.on("collide", (obj, col) => {
                    if (col.isLeft() || col.isRight()) {
                        dir = -dir;
                    }
                });
            },
            update() {
                this.move(speed * dir, 0);
            },
        };
    }

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

    // function spawnBullet(p) {
    // 	if (gunDestroyed) {
    // 		add([
    // 			rect(12, 12),
    // 			pos(p),
    // 			anchor('center'),
    // 			area(),
    // 			color(300, 0, 0),
    // 			move(0, 400),
    // 			offscreen({ destroy: true }),
    // 			'playerBullet',
    // 		])
    // 	}
    // }

    // onKeyPress('up', () => {
    // 	spawnBullet(player.pos.add(20, 20));
    // })

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
        shake(200)
    })

    // player.onCollide('gun', (m) => {
    // 	destroy(m)
    // 	gunDestroyed = true
    // })

    player.onCollide("dangerous", () => {
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

    onCollide("playerBullet", "dangerous", (p, d) => {
        destroy(d)
        shake(10)
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


// ############################ SCENE LVL3 ################################"
scene('level3',()=> {

    const level3 = [
        addLevel(
            [
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                 VVVVVVVVVV                 ',
                '                 VVVVVVVVVV                 ',
                '               VVVVV    VVVVV               ',
                '               VVVVV    VVVVV               ',
                '             VVVVVVV    VVVVVVV             ',
                '             VVVVV        VVVVV             ',
                '             VVVVV        VVVVV             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '             vvv            vvv             ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv        vvv            vvv        vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '  vvv                                  vvv  ',
                '                                            ',
                '                                            ',
                '                                            ',


///////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    /////////////// /FOND VERT ///////////////////////

                    "a": () => [sprite("map", {frame:120}),scale(1)],
                    "b": () => [sprite("map", {frame:121}),scale(1)],
                    "c": () => [sprite("map", {frame:122}),scale(1)],
                    "d": () => [sprite("map", {frame:123}),scale(1)],
                    "e": () => [sprite("map", {frame:124}),scale(1)],
                    "f": () => [sprite("map", {frame:125}),scale(1)],
                    "g": () => [sprite("map", {frame:126}),scale(1)],
                    "h": () => [sprite("map", {frame:127}),scale(1)],
                    "i": () => [sprite("map", {frame:128}),scale(1)],
                    "j": () => [sprite("map", {frame:129}),scale(1)],
                    "k": () => [sprite("map", {frame:130}),scale(1)],
                    "l": () => [sprite("map", {frame:131}),scale(1)],
                    "m": () => [sprite("map", {frame:132}),scale(1)],
                    "n": () => [sprite("map", {frame:140}),scale(1)],
                    "o": () => [sprite("map", {frame:141}),scale(1)],
                    "p": () => [sprite("map", {frame:142}),scale(1)],
                    "q": () => [sprite("map", {frame:143}),scale(1)],
                    "r": () => [sprite("map", {frame:144}),scale(1)],
                    "s": () => [sprite("map", {frame:145}),scale(1)],
                    "t": () => [sprite("map", {frame:146}),scale(1)],
                    "u": () => [sprite("map", {frame:147}),scale(1)],
                    "v": () => [sprite("map", {frame:148}),scale(1)],
                    "w": () => [sprite("map", {frame:149}),scale(1)],
                    "x": () => [sprite("map", {frame:150}),scale(1)],
                    "y": () => [sprite("map", {frame:151}),scale(1)],
                },
            }),
        addLevel(
            [
                'ffffffffffffffffffffffffffffffffffffffffffff',
                'fabjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjabf',
                'fde              ababababab              def',
                'fj               dedededede               jf',
                'fj             ab          ab             jf',
                'fj             de          de             jf',
                'fj           ab              ab           jf',
                'fj           de     abab     de           jf',
                'fj         ab       dede       ab         jf',
                'fj         de     ab    ab     de         jf',
                'fj                de    de                jf',
                'fj              ab        ab              jf',
                'fj              de        de              jf',
                'fj                                        jf',
                'fj                                        jf',
                'fjbab                                  abajf',
                'fjede                                  dedjf',
                'fj   ab                              ab   jf',
                'fj   de                              de   jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj                                        jf',
                'fj         abkabkabkababkabkabkab         jf',
                'fj        kdekdekdekdedekdekdekdek        jf',
                'fj      abk  k  k  k    k  k  k  kab      jf',
                'fj     kdek  k  k  k    k  k  k  kdek     jf',
                'fj     k  k  k  k  k    k  k  k  k  k     jf',
                'fj   abk  k  k  k  k    k  k  k  k  kab   jf',
                'fab  dek  k  k  k  k    k  k  k  k  kde  abf',
                'fdejjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdef',
                'ffffffffffffffffffffffffffffffffffffffffffff',
//////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    //////////////// PLATEFORM VERT ///////////////////////

                    "a": () => [sprite("map", {frame:153}),scale(1), area(),body({isStatic:true}) ],
                    "b": () => [sprite("map", {frame:154}),scale(1), area(),body({isStatic:true}) ],
                    "c": () => [sprite("map", {frame:172}),scale(1), area(),body({isStatic:true}),"block" ],
                    "d": () => [sprite("map", {frame:173}),scale(1), area(),body({isStatic:true}) ],
                    "e": () => [sprite("map", {frame:174}),scale(1), area(),body({isStatic:true}) ],
                    "f": () => [sprite("map", {frame:220}),scale(1), area(),body({isStatic:true}),"block" ],
                    "g": () => [sprite("map", {frame:221}),scale(1), area(),body({isStatic:true}) ],
                    "h": () => [sprite("map", {frame:222}),scale(1), area(),body({isStatic:true}) ],
                    "i": () => [sprite("map", {frame:223}),scale(1), area(),body({isStatic:true}) ],
                    "j": () => [sprite("map", {frame:224}),scale(1), area(),body({isStatic:true}) ],
                    "k": () => [sprite("map", {frame:225}),scale(1), area(),body({isStatic:true}) ],
                    "l": () => [sprite("map", {frame:226}),scale(1), area(),body({isStatic:true}) ],
                    "m": () => [sprite("map", {frame:227}),scale(1), area(),body({isStatic:true}) ],
                    "n": () => [sprite("map", {frame:228}),scale(1), area(),body({isStatic:true}) ],
                    "o": () => [sprite("map", {frame:229}),scale(1), area(),body({isStatic:true}) ],
                    "p": () => [sprite("map", {frame:230}),scale(1), area(),body({isStatic:true}) ],
                },
            }),
        addLevel(
            [

                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                                            ',
                '                    rrrr                    ',
                '           cc                  cc           ',
                '           jj     rr    rr     jj           ',
                '           jj                  jj           ',
                '           jj   cc        cc   jj           ',
                '           jj   jj        jj   jj           ',
                '           jj   jj        jj   jj           ',
                '           jj   jj        jj   jj           ',
                '           jj   jj        jj   jj           ',
                '           jj   jj        jj   jj           ',
                '     cc    jj   jj        jj   jj    cc     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    jj   jj        jj   jj    jj     ',
                '     jj    rr   rr        rr   rr    jj     ',
                '     jj                              jj     ',
                '     jj                              jj     ',
                '     jj    cc cc cc cccc cc cc cc    jj     ',
                '     jj    jj jj jj jjjj jj jj jj    jj     ',
                '     jj cc jj jj jj jjjj jj jj jj cc jj     ',
                '        jj jj jj jj jjjj jj jj jj jj        ',
                '        rr rr rr rr rrrr rr rr rr rr        ',
                '                                            ',
                '                                            ',
/////////////////////////////////////////////////////////////////////|

            ],{
                tileWidth: 36,
                tileHeight: 36,
                tiles: {

                    ///////////////  DECORATION VERT   ///////////////////////

                    "a": () => [sprite("map", {frame:133}),scale(1)],
                    "b": () => [sprite("map", {frame:134}),scale(1)],
                    "c": () => [sprite("map", {frame:135}),scale(1)],
                    "d": () => [sprite("map", {frame:136}),scale(1)],
                    "e": () => [sprite("map", {frame:137}),scale(1)],
                    "f": () => [sprite("map", {frame:138}),scale(1)],
                    "g": () => [sprite("map", {frame:139}),scale(1)],
                    "h": () => [sprite("map", {frame:153}),scale(1)],
                    "i": () => [sprite("map", {frame:154}),scale(1)],
                    "j": () => [sprite("map", {frame:155}),scale(1)],
                    "k": () => [sprite("map", {frame:156}),scale(1)],
                    "l": () => [sprite("map", {frame:157}),scale(1)],
                    "m": () => [sprite("map", {frame:158}),scale(1)],
                    "n": () => [sprite("map", {frame:159}),scale(1)],
                    "o": () => [sprite("map", {frame:172}),scale(1)],
                    "p": () => [sprite("map", {frame:173}),scale(1)],
                    "q": () => [sprite("map", {frame:174}),scale(1)],
                    "r": () => [sprite("map", {frame:175}),scale(1)],
                    "s": () => [sprite("map", {frame:176}),scale(1)],
                    "t": () => [sprite("map", {frame:177}),scale(1)],
                    "u": () => [sprite("map", {frame:178}),scale(1)],
                    "v": () => [sprite("map", {frame:179}),scale(1)],
                },
            })
    ]

    // ######################## PLAYER #########################

    const SPEED = 250
    let JUMP_FORCE = 400
    const ENEMY_SPEED = 60
    const BULLET_SPEED = 200
    let PLAYER_HEALTH = 100
    let gunDestroyed = false

    const player = add([
        sprite('astro'),
        scale(5),
        anchor("center"),
        pos(300,300),
        area(),
        body(),
        health(PLAYER_HEALTH),
        z(49),
        "player"
    ])

    //######################### MOUVEMENT ###########################

    // Switch to "idle" or "run" animation when player hits ground
    player.onGround(() => {
        if (!isKeyDown("left") && !isKeyDown("right")) {
            player.play("idle")
        } else {
            player.play("run")
        }
    })

    // ########################## DASH ##############################

    let isDashAvailable = true
    player.onGround(()=>{
        isDashAvailable = true
    })
    function Dash(dashX,dashY){
        isDashAvailable = false
        camScale(1.1,1)
        const t = tween(player.pos,vec2((player.pos.x)+dashX,(player.pos.y)+dashY),0.2,(p) => player.pos = p,easings.easeOutSine)
        onUpdate(()=>{
            player.onCollide("block",()=>{
                // console.log("player collide with block")
                t.cancel()
            })
        })
        wait(0.5,()=>{
            camScale(1,1)
        })
    }

    // ########################## KEYBOARD CONTROL #############################
    let dirX = 0
    let dirY = 0
    if(!isGamepadConnected){

        onUpdate(()=>{
            onKeyDown("z",()=>{
                gun.angle = -90
                dirX = 0
                dirY = 100
            })
            onKeyDown("s",()=>{
                gun.angle = 90
                dirX = 0
                dirY = -100
            })

            onKeyDown("q",()=>{
                gun.angle = 180
                dirX = 100
                dirY = 0
            })

            onKeyDown("d",()=>{
                gun.angle = 0
                dirX = -100
                dirY = 0
            })

            if(isKeyDown("z") && isKeyDown("d"))
            {
                console.log("up right")
                gun.angle = -45
                dirX = -100
                dirY = 100
            }
            if(isKeyDown("z") && isKeyDown("q"))
            {
                console.log("up left")
                gun.angle = -135
                dirX = 100
                dirY = 100
            }
            if(isKeyDown("s") && isKeyDown("q"))
            {
                console.log("down left")
                gun.angle = 135
                dirX = 100
                dirY = -100
            }
            if(isKeyDown("s") && isKeyDown("d"))
            {
                console.log("down right")
                gun.angle = 45
                dirX = -100
                dirY = 100
            }
        })

        onKeyDown("d",()=>{
            player.move(SPEED, 0)
            onUpdate(()=>{
                if(isDashing){
                    player.move(0,0)
                    wait(3,()=>{
                        isDashing = false
                        console.log("waiting 3s ")
                    })

                }
            })
        })

        onKeyDown("q",()=>{
            player.move(-SPEED, 0)
        })

        let canJump  = true
        onKeyPress("space", () => {
            if (player.isGrounded()) {
                canJump = true
                // console.log(canJump)
                // console.log("player grounded")
                player.jump(JUMP_FORCE)
                player.play("jump")
            } else {
                // console.log("player on air")
                // console.log(canJump)
                if(canJump){
                    // console.log("can jump")
                    Dash(0,-100)
                    canJump = false
                } else {
                    // console.log("cannon jump")
                }
            }
        })

        onKeyPress("shift",(position)=> {

            const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
            spawnBullet(muzzlePos.x, muzzlePos.y, Vec2.fromAngle(gun.angle).scale(1, -1))
            //debug.log(mousePos().angle())
            if(!player.isGrounded()){
                if(isDashAvailable){
                    isDashing = true
                    Dash(dirX,dirY)
                }
            }

        })
    }


    // ##################################################################

    // ########################## GAMEPAD CONTROL #######################

    if(isGamepadConnected){
        // setGravity(1500)
        onGamepadStick("left", (v) => {
            player.move(v.x * 250, 0)
            onUpdate(()=>{
                if (v.x > 0 && v.y === 0){
                    gun.angle= 0
                    dirX = -100
                    dirY = 0
                }
                if (v.x === 0 && v.y > 0){
                    gun.angle= 90
                    dirX = 0
                    dirY = -100
                }
                if (v.x < 0 && v.y === 0){
                    gun.angle= 180
                    dirX = 100
                    dirY = 0
                }
                if (v.x === 0 && v.y < 0){
                    gun.angle= -90
                    dirX = 0
                    dirY = 100
                }
            })
        })

        let canJump  = true
        onGamepadButtonPress("south", () => {
            if (player.isGrounded()) {
                canJump = true
                // console.log(canJump)
                // console.log("player grounded")
                player.jump(JUMP_FORCE)
                player.play("jump")
            } else {
                // console.log("player on air")
                // console.log(canJump)
                if(canJump){
                    // console.log("can jump")
                    Dash(0,-100)
                    canJump = false
                } else {
                    // console.log("cannon jump")
                }
            }
        })

        onUpdate(()=>{
            onGamepadButtonPress("dpad-up",()=>{
                console.log("controller dpad up")
                gun.angle = -90
                dirX = 0
                dirY = 100
            })
            onGamepadButtonDown("dpad-down",()=>{
                console.log("controller dpad down")
                gun.angle = 90
                dirX = 0
                dirY = -100
            })
            onGamepadButtonDown("dpad-left",()=>{
                gun.angle = 180
                dirX = 100
                dirY = 0
            })
            onGamepadButtonDown("dpad-right",()=>{
                gun.angle = 0
                dirX = -100
                dirY = 0
            })
        })

        onGamepadButtonPress("west",(position)=> {
            console.log("west")

            const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
            spawnBullet(muzzlePos.x, muzzlePos.y, Vec2.fromAngle(gun.angle).scale(1, -1))
            //debug.log(mousePos().angle())
            if(!player.isGrounded()){
                if(!player.isGrounded()){
                    if(isDashAvailable){
                        isDashing = true
                        Dash(dirX,dirY)
                    }
                }
            }
        })

    }


    // #########################################################

    //######################### CAMERA ##########################

    player.onUpdate(()=>{
        camPos(player.pos)
    })

    //###########################################################

    // ###################### GUN ##############################

    const gun = add([
        // rect(35, 8),
        sprite("gun"),
        scale(0.04),
        pos(player.pos.x,player.pos.y),
        // pos(500,500),
        anchor(vec2(0,0)),
        area(),
        rotate(0),
        color(204, 230, 244),
        z(50),
        // z(49),
        "gun",
    ])

    onUpdate(() => {
        // const muzzlePos = gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))
        // 	console.log("muzzle: ", muzzlePos)
        gun.pos = player.pos
        // 	console.log(gun.pos)
        // gun.angle = mousePos().angle(gun.pos)
        // 	console.log(gun.angle)
    })

    let isDashing = false

    function spawnBullet(bulletposX, bulletPosY, direction) {

        add([
            rect(25, 3),
            pos(gun.pos.add(Vec2.fromAngle(gun.angle).scale(50))),
            anchor("top"),
            color(165, 36, 34),
            area(),
            move(Vec2.fromAngle(gun.angle), 400),
            z(20),
            //layer("game"),
            rotate(gun.angle),
            "playerBullet",
            "danger"
        ]);
    }

    // ###############################################################


    // ######################## ENEMY #########################

    function patrol(speed = 100, dir = 1) {
        let changeDirectionTimeout;

        function changeDirection() {
            dir = -dir; // Change la direction
            // Réinitialise le délai pour le prochain changement de direction
            changeDirectionTimeout = setTimeout(changeDirection, 3000); // 3000 ms = 3 secondes
        }

        return {
            id: "patrol",
            require: ["pos", "area"],
            add() {
                // Lance le délai initial pour le premier changement de direction
                changeDirectionTimeout = setTimeout(changeDirection, 3000); // 3000 ms = 3 secondes

                this.on("collide", (obj, col) => {
                    if (col.isLeft() || col.isRight()) {
                        dir = -dir;
                    }
                });
            },
            update() {
                this.move(speed * dir, 0);
            },
        };
    }

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

    // function spawnBullet(p) {
    // 	if (gunDestroyed) {
    // 		add([
    // 			rect(12, 12),
    // 			pos(p),
    // 			anchor('center'),
    // 			area(),
    // 			color(300, 0, 0),
    // 			move(0, 400),
    // 			offscreen({ destroy: true }),
    // 			'playerBullet',
    // 		])
    // 	}
    // }

    // onKeyPress('up', () => {
    // 	spawnBullet(player.pos.add(20, 20));
    // })

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
        shake(200)
    })

    // player.onCollide('gun', (m) => {
    // 	destroy(m)
    // 	gunDestroyed = true
    // })

    player.onCollide("dangerous", () => {
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

    onCollide("playerBullet", "dangerous", (p, d) => {
        destroy(d)
        shake(10)
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



// ############################ SCENE LOSE ################################"
scene('lose',()=>{

    add([
        text('you lose'),
        anchor('center'),
        scale(5),
        pos(width()/2, height()/2)
    ])
})

// #################### SCENE MENU ###############################

let isGamepadConnected = false
scene("menu",()=>{
    add([
        sprite("bg-beginning"),
        scale(0.500)
    ]),

        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y),
            scale(1),
        ]),

        add([
            text('upheavtt'),
            area(),
            anchor("center"),
            pos(center().x, 370),
            outline(4),
            text("Taper sur [ ENTRER ] pour commencer à jouer", {
                size: 30,
                opacity: 0.3
            }),
        ]);

    onKeyRelease("enter", () => {
        go("chooseLevel");
    })

    onGamepadDisconnect(()=>{
        add([
            text("Gamepad not found", {
                width: width() - 30,
                align: "center",
                size: 25,
            }),
            pos(center().x,450),
            anchor("center"),
        ])
    })


    if(isGamepadConnected == true) {
        destroy(onGamepadDisconnect)
    }

    onGamepadConnect(()=>{
        add([
            text("Gamepad Connected", {
                width: width() - 180,
                align: "center",
                color: GREEN,
            }),
            pos(center().x,450),
            anchor("center"),
        ])
        isGamepadConnected = true
    })

})

go("menu")