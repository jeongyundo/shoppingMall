import Item from '../../models/item'
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    if(ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }
    return next();
};

export const write = async ctx => {
    const { itemNo, itemName, color, size, price, imgList, discount, description, review, itemAmount } = ctx.request.body;
    const item = new Item({
        itemNo, itemName, color, size, price, imgList, discount, description, review, itemAmount
    });
    try {
        await item.save();
        ctx.body = item;
    } catch (e) {
        ctx.throw(500, e)
    }
};

export const list = async ctx => {
    try {
        const items = await Item.find().exec();
        ctx.body = items;
    } catch (e) {
        ctx.throw(500, e)
    }
};

export const read = async ctx => {
    const { id } = ctx.params;
    try {
        const item = await Item.findById(id).exec();
        if(!item) {
            ctx.status = 404;
            return;
        }
        ctx.body = item;
    } catch (e) {
        ctx.throw(500, e)
    }
    
};

export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Item.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const update = async ctx => {
    const { id } = ctx.params;
    try {
        const item = await Item.findByIdAndUpdate(id, ctx,request,body, {
            new: true
        }).exec();
        if (!item) {
            ctx.status = 404;
            return;
        }

    } catch (e) {
        ctx.throw(500, e);
    }
};