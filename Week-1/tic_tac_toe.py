#  Tic Tac Toe Game


def display_board(board):
    print("\n-------------")
    for row in board:
        print("| " + " | ".join(row) + " |")
        print("-------------")

# Function to ask the player for their move

def player_move(board, player):
    print(f"\nPlayer {player}'s turn:")
    while True:
        row = input("Enter row (1, 2, or 3): ")
        col = input("Enter column (1, 2, or 3): ")

        # Make sure input is valid (numbers between 1 and 3)
        if not (row.isdigit() and col.isdigit()):
            print("❌ Please enter numbers only.")
            continue

        row = int(row) - 1
        col = int(col) - 1

        if row not in [0, 1, 2] or col not in [0, 1, 2]:
            print("❌ Numbers must be 1, 2, or 3.")
            continue

        # Check if the cell is empty
        if board[row][col] == " ":
            board[row][col] = player
            break
        else:
            print("❌ That spot is already taken. Try again.")

# Function to check if a player has won
def check_win(board, player):
    # Check rows
    for row in board:
        if row == [player, player, player]:
            return True

    # Check columns
    for col in range(3):
        if board[0][col] == player and board[1][col] == player and board[2][col] == player:
            return True

    # Check diagonals
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True

    return False

# Function to check if the board is full (tie)
def check_tie(board):
    for row in board:
        if " " in row:
            return False
    return True

# Main game loop
def play_game():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"

    print("🎮 Welcome to Tic Tac Toe!")
    print("Player X goes first.\n")

    while True:
        display_board(board)
        player_move(board, current_player)

        # Check if current player won
        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins!")
            break

        # Check if the game is a tie
        if check_tie(board):
            display_board(board)
            print("🤝 It's a tie!")
            break

        # ✅ Switch players
        if current_player == "X":
            current_player = "O"
        else:
            current_player = "X"

# Run the game
play_game()

