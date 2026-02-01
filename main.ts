let player2 = ""
let player1 = ""
let a = true
basic.showNumber(3)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showNumber(2)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showNumber(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # . . #
    # . # . #
    # # . . #
    # . . . #
    # . . . #
    `)
while (a == true) {
    if (input.buttonIsPressed(Button.A)) {
        player1 = "rock"
        a = false
    } else if (input.buttonIsPressed(Button.B)) {
        player1 = "paper"
        a = false
    } else if (input.buttonIsPressed(Button.AB)) {
        player1 = "scissors"
        a = false
    }
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
a = true
basic.showLeds(`
    # # . # #
    # . # . #
    # # . # .
    # . # . .
    # . # # #
    `)
while (a == true) {
    if (input.buttonIsPressed(Button.A)) {
        player2 = "rock"
        a = false
    } else if (input.buttonIsPressed(Button.B)) {
        player2 = "paper"
        a = false
    } else if (input.buttonIsPressed(Button.AB)) {
        player2 = "scissors"
        a = false
    }
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
if (player1 == player2) {
    basic.showString("D")
} else if (player1 == "rock") {
    if (player2 == "paper") {
        while (true) {
            basic.showString(" P2W")
            basic.showIcon(IconNames.Happy)
        }
    } else {
        while (true) {
            basic.showString(" P1W")
            basic.showIcon(IconNames.Heart)
        }
    }
} else if (player1 == "paper") {
    if (player2 == "rock") {
        while (true) {
            basic.showString(" P1W")
            basic.showIcon(IconNames.Heart)
        }
    } else {
        while (true) {
            basic.showString(" P2W")
            basic.showIcon(IconNames.Happy)
        }
    }
} else if (player2 == "paper") {
    while (true) {
        basic.showString(" P1W")
        basic.showIcon(IconNames.Heart)
    }
} else {
    while (true) {
        basic.showString(" P2W")
        basic.showIcon(IconNames.Happy)
    }
}
