player2 = ""
player1 = ""
basic.show_number(3)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_number(2)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_number(1)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_string("P1 pick your weapon")
if input.button_is_pressed(Button.A):
    player1 = "rock"
elif input.button_is_pressed(Button.B):
    player1 = "paper"
elif input.button_is_pressed(Button.AB):
    player1 = "scissors"
else:
    while True:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_string("P2 pick your weapon")
if input.button_is_pressed(Button.A):
    player2 = "rock"
elif input.button_is_pressed(Button.B):
    player2 = "paper"
elif input.button_is_pressed(Button.AB):
    player2 = "scissors"
else:
    while True:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
if player1 == player2:
    basic.show_string("Game is drawed")
elif player1 == "rock":
    if player2 == "paper":
        basic.show_string("Player2 wins")
    else:
        basic.show_string("Player1 wins")
elif player1 == "paper":
    if player2 == "rock":
        basic.show_string("Player1 wins")
    else:
        basic.show_string("Player2 wins")
elif player2 == "paper":
    basic.show_string("Player1 wins")
else:
    basic.show_string("Player2 wins")