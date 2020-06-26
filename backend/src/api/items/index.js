import Router from 'koa-router'
import * as itemsCtrl from './items.ctrl'

const items = new Router();

items.get('/', itemsCtrl.list);
items.post('/', itemsCtrl.write);

const item = new Router();

item.get('/:id', itemsCtrl.read);
item.delete('/:id', itemsCtrl.remove);
item.patch('/:id', itemsCtrl.update);

items.use('/:id', itemsCtrl.checkObjectId, item.routes());
export default items;