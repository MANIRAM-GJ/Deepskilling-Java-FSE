import java.util.Arrays;
import java.util.Comparator;

public class Main {

    public static Item searchByNameLinear(Item[] inventory, String name) {
        for (Item i : inventory) {
            if (i.itemName.equalsIgnoreCase(name)) {
                return i;
            }
        }
        return null;
    }

    public static Item searchByNameBinary(Item[] inventory, String name) {
        int low = 0, high = inventory.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int res = inventory[mid].itemName.compareToIgnoreCase(name);

            if (res == 0) return inventory[mid];
            else if (res < 0) low = mid + 1;
            else high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {
        Item[] storeItems = {
            new Item(2001, "Hoodie", "Winter Wear"),
            new Item(2002, "Sneakers", "Footwear"),
            new Item(2003, "Cap", "Accessories"),
            new Item(2004, "T-Shirt", "Casual Wear"),
            new Item(2005, "Backpack", "Bags")
        };

        Item found1 = searchByNameLinear(storeItems, "Cap");
        System.out.println("Linear Search Result: " + found1);

        Arrays.sort(storeItems, Comparator.comparing(i -> i.itemName.toLowerCase()));

        Item found2 = searchByNameBinary(storeItems, "Cap");
        System.out.println("Binary Search Result: " + found2);
    }
}

