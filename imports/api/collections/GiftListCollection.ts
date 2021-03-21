import {Mongo} from 'meteor/mongo';
import {GiftList} from "../../objects/giftlist/GiftList";

/**
 * todo remove update gift list and allow adding/removing single gifts by id
 */
export class GiftListCollectionManager {

    GiftListCollection: Mongo.Collection<GiftList> = new Mongo.Collection<GiftList>('giftlist');

    private static instance: GiftListCollectionManager = new GiftListCollectionManager();

    static getInstance(): GiftListCollectionManager {
        return this.instance;
    }

    insert(giftList: GiftList): void {
        this.GiftListCollection.insert(giftList);
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

    updateGiftList(giftList: GiftList) {
        this.GiftListCollection.update({_id: giftList._id}, {$set: giftList});
    }
}
