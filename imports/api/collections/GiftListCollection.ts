import {Mongo} from 'meteor/mongo';
import {GiftList} from "../../objects/giftlist/GiftList";
import {Gift} from "../../objects/gift/Gift";

/**
 * todo remove update gift list and allow adding/removing single gifts by id
 */
export class GiftListCollectionManager {

    GiftListCollection: Mongo.Collection<GiftList> = new Mongo.Collection<GiftList>('giftlist');

    private static instance: GiftListCollectionManager = new GiftListCollectionManager();

    static getInstance(): GiftListCollectionManager {
        return this.instance;
    }

    insert(giftList: GiftList): string {
        const Future = Npm.require('fibers/future');
        let future = new Future();

        giftList.userId = Meteor.userId();

        const id: string = this.GiftListCollection.insert(giftList, () => {
            future.return();
        });

        future.wait();

        return id;
    }

    getById(id: string) : GiftList | undefined{
        return this.GiftListCollection.findOne({_id: id});
    }

    deleteById(id: string): boolean {
        this.GiftListCollection.remove({"_id": id});

        return true;
    }

    getGiftLists(): GiftList[] {
        return this.GiftListCollection.find({userId: Meteor.userId()}).fetch();
    }

    clearAll(): void {
        this.GiftListCollection.remove({});
    }

    addGift(giftListId: string, gift: Gift){
        const ObjectID = require('mongodb').ObjectID;
        const giftId: string = new ObjectID().toHexString();
        gift._id = giftId;

        this.GiftListCollection.update({_id: giftListId}, {$push: {gifts: gift}});
    }

    removeGift(giftListId: string, giftId: number){

    }

    updateGiftList(giftList: GiftList) {
        this.GiftListCollection.update({_id: giftList._id}, {$set: giftList});
    }
}
