import {Meteor} from "meteor/meteor";
import {GiftList} from "../../objects/giftlist/GiftList";
import {UserDetails} from "../../objects/userdetails/UserDetails";

export class UserDetailsManager {

    private static instance: UserDetailsManager = null;

    private constructor() {
    }

    static getInstance(): UserDetailsManager {
        if (this.instance == null) {
            this.instance = new UserDetailsManager();
        }
        return this.instance;
    }

    getSharedGiftLists(callback: (giftLists: GiftList[]) => void) {
        Meteor.call("getSharedGiftLists", {}, (err: any, res: GiftList[]) => {
            if (err) {
                console.error(err);
            } else {
                callback(res);
            }
        });
    }

    isLoggedIn(): boolean {
        return Meteor.user() !== undefined && Meteor.user() !== null;
    }

    getById(id: string, callback: (boolean) => void) {
        Meteor.call("getUserDetailsById", id, (err: any, res: UserDetails) => {
            if (err) {
                console.error(err);
            } else {
                callback(res);
            }
        });
    }
}
