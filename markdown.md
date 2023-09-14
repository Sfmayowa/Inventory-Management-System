
Inventory Management System

Introduction:

The Inventory Management System is a web-based tool designed to help users manage their inventory of items. Whether you need to keep track of supplies, products, or any other items, this system allows you to add, remove, and view inventory items efficiently.

How to Use:

Follow these steps to use the Inventory Management System:

Step 1: Access the Website

Open your web browser and navigate to the Inventory Management System website.

Step 2: Understand the Actions

Upon arriving at the website, you will find three primary actions you can perform:

1. Add Item: Use this action to add items to your inventory.
2. Remove Item: Use this action to remove items from your inventory.
3. View Inventory: Use this action to see the current status of your inventory.

Step 3: Input Item Information

For any action you choose, you will need to provide the following information:

- Item Name: Enter the name of the item you want to add or remove.
- Quantity: Specify the quantity of items to add or remove.

Step 4: Choose an Action

In the "Action" dropdown menu, select the action you want to perform based on the following options:

- Add Item: Adds the specified quantity of the item to the inventory.
- Remove Item: Removes the specified quantity of the item from the inventory.
- View Inventory: Displays the current inventory with item names and quantities.

Step 5: Perform the Action
z
After entering the required information and selecting an action, click the "Perform Action" button.

Step 6: Review the Result

The system will execute your chosen action and display the result in the "Result" section below. You will receive a confirmation message or an error message if any issues arise.



Walkthrough: How the Code Works

The Inventory Management System is powered by JavaScript, which incorporates classes, switch statements, and try-catch-finally statements to handle inventory-related tasks.

- Classes: The `InventoryManager` class is responsible for managing the inventory. It has methods to add, remove, and view items.

- Switch Statements: The `performAction()` function uses a switch statement to determine which action the user selected and then calls the corresponding method from the `InventoryManager` class.

- Try-Catch-Finally Statements: Error handling is implemented using try-catch blocks. If an error occurs during an action (e.g., insufficient quantity or item not found), the code captures the error and displays an error message to the user.

This website offers a user-friendly interface for inventory management, along with robust error handling to ensure smooth operation.
