import {Mongo} from 'meteor/mongo';
import {GiftListCollectionManager} from "./GiftListCollection";
import {UserDetails} from "../../objects/userdetails/UserDetails";
import {SharedGiftList} from "../../objects/userdetails/SharedGiftList";
import {GiftList} from "../../objects/giftlist/GiftList";

export class UserDetailsCollectionManager {

    userDetailsCollection: Mongo.Collection<UserDetails> = new Mongo.Collection<UserDetails>('userdetails');

    private static instance: UserDetailsCollectionManager = null;

    private constructor() {
    }

    static getInstance(): UserDetailsCollectionManager {
        if (this.instance == null) {
            this.instance = new UserDetailsCollectionManager();
        }
        return this.instance;
    }

    shareGiftList(giftListId: string, email: string): void {

        const userDetail: SharedGiftList = new SharedGiftList(giftListId, false);
        const userId: string = Meteor.users.findOne({email: email})._id;

        const existingUserDetails = this.getById(userId);
        if (existingUserDetails) {
            existingUserDetails.sharedGiftLists.push(userDetail);
            this.insert(existingUserDetails);
        } else {
            const userDetails: UserDetails = new UserDetails(userId, [userDetail]);
            this.insert(userDetails);
        }

    }

    insert(userDetails: UserDetails): void {
        this.userDetailsCollection.insert(userDetails);
    }

    getById(id: string): UserDetails {
        return this.userDetailsCollection.findOne({userId: id});
    }

    deleteById(id: string): boolean {
        this.userDetailsCollection.remove({"_id": id});

        return true;
    }

    get(): UserDetails {
        return this.userDetailsCollection.findOne({userId: Meteor.userId()});
    }

    getSharedGiftLists(): GiftList[] {
        const userDetails: UserDetails = this.userDetailsCollection.findOne({userId: Meteor.userId()});

        if (userDetails) {
            return userDetails.sharedGiftLists.map(sharedGiftList => {
                const giftListId = sharedGiftList.giftListId;
                console.log(giftListId)
                return GiftListCollectionManager.getInstance().getById(giftListId);
            });
        } else {
            return [];
        }
    }

    clearAll(): void {
        this.userDetailsCollection.remove({});
    }

    update(userDetails: UserDetails) {
        this.userDetailsCollection.update({_id: userDetails.userId}, {$set: userDetails});
    }
}
