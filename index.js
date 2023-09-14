class InventoryManager {
    constructor() {
        this.inventory = new Map();
    }

    addItem(itemName, quantity) {
        if (!this.inventory.has(itemName)) {
            this.inventory.set(itemName, 0);
        }

        this.inventory.set(itemName, this.inventory.get(itemName) + quantity);
    }

    removeItem(itemName, quantity) {
        if (this.inventory.has(itemName)) {
            const currentQuantity = this.inventory.get(itemName);

            if (currentQuantity >= quantity) {
                this.inventory.set(itemName, currentQuantity - quantity);
            } else {
                throw new Error('Insufficient quantity in inventory.');
            }
        } else {
            throw new Error('Item not found in inventory.');
        }
    }

    viewInventory() {
        return Array.from(this.inventory.entries());
    }
}

const manager = new InventoryManager();

function performAction() {
    const action = document.getElementById('action').value;
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);
    const resultElement = document.getElementById('result');

    switch (action) {
        case 'add':
            try {
                manager.addItem(itemName, itemQuantity);
                resultElement.innerText = `Added ${itemQuantity} ${itemName}(s) to inventory.`;
            } catch (error) {
                resultElement.innerText = `Error: ${error.message}`;
            }
            break;
        case 'remove':
            try {
                manager.removeItem(itemName, itemQuantity);
                resultElement.innerText = `Removed ${itemQuantity} ${itemName}(s) from inventory.`;
            } catch (error) {
                resultElement.innerText = `Error: ${error.message}`;
            }
            break;
        case 'view':
            const inventoryEntries = manager.viewInventory();
            resultElement.innerText = 'Inventory:\n';

            for (const [itemName, quantity] of inventoryEntries) {
                resultElement.innerText += `${itemName}: ${quantity}\n`;
            }
            break;
        default:
            resultElement.innerText = 'Invalid action selected.';
    }
}