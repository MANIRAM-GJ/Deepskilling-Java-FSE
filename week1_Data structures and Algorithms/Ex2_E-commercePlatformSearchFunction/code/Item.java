public class Item {
    int itemCode;
    String itemName;
    String type;

    public Item(int itemCode, String itemName, String type) {
        this.itemCode = itemCode;
        this.itemName = itemName;
        this.type = type;
    }

    @Override
    public String toString() {
        return itemCode + " - " + itemName + " [" + type + "]";
    }
}
