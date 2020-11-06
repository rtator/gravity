let sprite = game.createSprite(2, 2)
sprite.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        sprite.change(LedSpriteProperty.X, -1)
    } else if (input.isGesture(Gesture.TiltRight)) {
        sprite.change(LedSpriteProperty.X, 1)
    } else if (input.isGesture(Gesture.LogoDown)) {
        sprite.change(LedSpriteProperty.Y, -1)
    } else if (input.isGesture(Gesture.LogoUp)) {
        sprite.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y)).move(0)
})
