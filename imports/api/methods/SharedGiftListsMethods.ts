import {Meteor} from "meteor/meteor";
import {UserDetailsCollectionManager} from "../collections/UserDetailsCollection";
import {GiftList} from "../../objects/giftlist/GiftList";
import {UserDetails} from "../../objects/userdetails/UserDetails";

    Meteor.methods({
        "getSharedGiftLists": function (): GiftList[] {
            return UserDetailsCollectionManager.getInstance().getSharedGiftLists();
        }
    });

    Meteor.methods({
        "shareGiftList": function (toShare: [string, string]): void {
            return UserDetailsCollectionManager.getInstance().shareGiftList(toShare[0], toShare[1]);
        }
    });

    Meteor.methods({
        "deleteSharedGiftLists": function (sharedGiftListsId: string): boolean {
            return UserDetailsCollectionManager.getInstance().deleteById(sharedGiftListsId);
        }
    });

    Meteor.methods({
        "updateSharedGiftLists": function (sharedGiftLists: UserDetails): void {
            return UserDetailsCollectionManager.getInstance().update(sharedGiftLists);
        }
    });
