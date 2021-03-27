
import {Meteor} from "meteor/meteor";
import User = Meteor.User;
import {GiftList} from "../../objects/giftlist/GiftList";
import {Gift} from "../../objects/gift/Gift";

export class GiftListManager {

    private static instance: GiftListManager = new GiftListManager();

    static getInstance(): GiftListManager {
        return this.instance;
    }

    shareGiftList(giftListId: string, email: string, callback: (boolean) => void) {
        const user: User = Meteor.user();
        if (user != null) {

            Meteor.call("shareGiftList", {giftListId, email}, (err: any, res: boolean) => {
                if (err) {
                    console.error(err);
                } else {
                    callback(res);
                }
            });

        } else {
            throw new Error("User not logged in")
        }
    }


    updateGiftList(giftList: GiftList, callback: (boolean) => void) {
        const user: User = Meteor.user();
        if (user != null) {

            Meteor.call("updateGiftList", giftList, (err: any, res: boolean) => {
                if (err) {
                    console.error(err);
                } else {
                    callback(res);
                }
            });

        } else {
            throw new Error("User not logged in")
        }
    }

    updateGift(gift) {

    }

    deleteGiftList(giftListId: String, callback: (success: boolean) => void) {
        const user: User = Meteor.user();
        if (user != null) {

            Meteor.call("deleteGiftList", giftListId, (err: any, res: boolean) => {
                if (err) {
                    console.error(err);
                } else {
                    callback(res);
                }
            });

        } else {
            throw new Error("User not logged in")
        }
    }

    deleteGift(giftId) {

    }

    getGiftListById(id: string, callback: (giftList: GiftList) => void) {
        Meteor.call("getGiftListById", id, (err: any, res: GiftList) => {
            if (err) {
                alert(err);
            } else {
                callback(res);
            }
        });
    }

    getGiftLists(callback: (giftLists: GiftList[]) => void) {
        const user: User = Meteor.user();
        if (user !== undefined) {

            Meteor.call("getGiftLists", {}, (err: any, res: GiftList[]) => {
                if (err) {
                    alert(err);
                } else {
                    callback(res);
                }
            });

        } else {
            throw new Error("User not logged in")
        }
    }

    addGiftList(giftList, callback: () => void) {
        const user: User = Meteor.user();
        if (user != null) {

            Meteor.call("addGiftList", giftList, (err: any, res) => {
                if (err) {
                    console.error(err);
                } else {
                    callback();
                }
            });

        } else {
            throw new Error("User not logged in")
        }
    }


    addGift(giftListId:string, gift: Gift, callback: () => void) {
        const user: User = Meteor.user();
        if (user != null) {

            Meteor.call("addGift", giftListId, gift, (err: any, res) => {
                if (err) {
                    console.error(err);
                } else {
                    callback();
                }
            });

        } else {
            throw new Error("User not logged in")
        }
    }
}