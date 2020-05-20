export default class ItemView {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }

    toHtml() {
        // const checked = (this.itemModel.done) ? "checked" : "";
        // const color = (this.itemModel.done) ? "grey" : "black";
        return `
            <tr>
                <td>
                    ${this.itemModel.word}
                </td>
                <td>
                    ${this.itemModel.meaning}
                </td>
                <td id="operation-table">
                    <button data-id="${this.itemModel.id}" class="del-button">Delete</button>
                    <button data-id="${this.itemModel.id}" class="edit-button">Edit</button>
                </td>
            </tr>`;
    }
}