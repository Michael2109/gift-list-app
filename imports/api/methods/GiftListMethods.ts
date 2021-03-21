import {GiftListCollectionManager} from "../collections/GiftListCollection";
import {GiftList} from "../../objects/giftlist/GiftList";

Meteor.methods({
        "getGiftLists": function (): GiftList[] {
            return GiftListCollectionManager.getInstance().getGiftLists();
        }
    });

    Meteor.methods({
        "getGiftListById": function (id: string): GiftList {
            return GiftListCollectionManager.getInstance().getById(id);
        }
    });

    Meteor.methods({
        "addGiftList": function (giftList: GiftList): void {
            return GiftListCollectionManager.getInstance().insert(giftList);
        }
    });

    Meteor.methods({
        "deleteGiftList": function (giftListId: string): boolean {
            return GiftListCollectionManager.getInstance().deleteById(giftListId);
        }
    });

    Meteor.methods({
        "updateGiftList": function (giftList: GiftList): void {
            return GiftListCollectionManager.getInstance().updateGiftList(giftList);
        }
    });
