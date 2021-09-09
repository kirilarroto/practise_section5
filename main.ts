namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Key = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    if (haveKey == 1) {
        game.splash("开门了，恭喜通关")
        game.over(true)
    } else {
        HeroA.y += -5
        game.splash("没有钥匙")
    }
})
sprites.onOverlap(SpriteKind.Key, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("捡到钥匙了")
    haveKey = 1
    keyA.destroy()
})
/**
 * 请修改代码实现拿到钥匙之后才能开门
 */
let keyA: Sprite = null
let HeroA: Sprite = null
let haveKey = 0
scene.setTileMap(img`
    . . . . . . . . . . 
    . . 4 4 4 4 4 4 . . 
    . . 4 5 . . . 4 . . 
    . . 4 . . . . 4 . . 
    . . 4 . . . . 4 . . 
    . . 4 4 9 4 4 4 . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `)
haveKey = 0
scene.setTile(4, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 1 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, true)
scene.setTile(5, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(9, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
HeroA = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(HeroA)
let doorA = sprites.create(img`
    e e e e e e e e e e e e e e e e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 f 4 4 e e 4 4 f 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 e e 4 4 4 4 4 4 e 
    e e e e e e e e e e e e e e e e 
    `, SpriteKind.Door)
scene.placeOnRandomTile(doorA, 9)
keyA = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f . . . . 
    . . . . . . . f f 5 5 f . . . . 
    . . . . . . f f 5 5 f f . . . . 
    . . . . . f f 5 5 f f . . . . . 
    . f f f f f 5 5 5 f . . . . . . 
    . f 5 5 5 5 5 5 f f . . . . . . 
    . f 5 f 5 5 f f f . . . . . . . 
    . f 5 5 5 f . . . . . . . . . . 
    . f f f f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Key)
scene.placeOnRandomTile(keyA, 5)
