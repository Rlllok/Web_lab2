import ItemListModel from './model/ItemListModel.js';
import ItemListView from './view/ItemListView.js';
import Controller from './controller/Controller.js';

let itemListModel = new ItemListModel();
let itemListView = new ItemListView(itemListModel);

let controller = new Controller(itemListModel, itemListView);

controller.addItem('first', '1');
controller.addItem('second', '2');

//itemListModel.delete(item1.id);
//itemListModel.toggleDone([item2.id]);

