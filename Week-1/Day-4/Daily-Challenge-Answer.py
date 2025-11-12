# Coffee Shop Menu Manager

# 1 Starting data (the menu)

menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

# 2 Functions


def show_menu(menu_dict):
    """Print all drinks and prices."""
    if not menu_dict:  # if menu is empty
        print("The menu is empty.")
    else:
        print("Current menu:")
        for drink, price in menu_dict.items():
            print(f"{drink} - {price}₪")
    print()  # adds a blank line for readability


def add_item(menu_dict):
    """Add a new drink to the menu."""
    drink = input("Enter new drink name: ").lower().strip()
    if drink in menu_dict:
        print("Item already exists!\n")
        return

    try:
        price = float(input("Enter price: "))
        if price < 0:
            print("Invalid price.\n")
            return
    except ValueError:
        print("Invalid input. Price must be a number.\n")
        return

    menu_dict[drink] = price
    print(f'"{drink}" added!\n')


def update_price(menu_dict):
    """Change the price of an existing drink."""
    drink = input("Which drink do you want to update? ").lower().strip()
    if drink in menu_dict:
        try:
            new_price = float(input("Enter the new price: "))
            if new_price < 0:
                print("Invalid price.\n")
                return
            menu_dict[drink] = new_price
            print("Price updated!\n")
        except ValueError:
            print("Invalid input. Price must be a number.\n")
    else:
        print("Item not found.\n")


def delete_item(menu_dict):
    """Remove a drink from the menu."""
    drink = input("Which drink do you want to delete? ").lower().strip()
    if drink in menu_dict:
        del menu_dict[drink]
        print("Item deleted.\n")
    else:
        print("Item not found.\n")


def show_options():
    """Print the available actions."""
    print("What would you like to do?")
    print("1. Show menu")
    print("2. Add item")
    print("3. Update price")
    print("4. Delete item")
    print("5. Exit")
    print()  # blank line for spacing


def run_coffee_shop():
    """Main loop of the program."""
    while True:
        show_options()
        choice = input("> ").strip()

        if choice == "1":
            show_menu(menu)
        elif choice == "2":
            add_item(menu)
        elif choice == "3":
            update_price(menu)
        elif choice == "4":
            delete_item(menu)
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid choice, try again.\n")


# 3 Start the program

run_coffee_shop()
