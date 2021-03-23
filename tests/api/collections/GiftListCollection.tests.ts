import {resetDatabase} from 'meteor/xolvio:cleaner';
import {GiftListCollectionManager} from "../../../imports/api/collections/GiftListCollection";
import {UserSession} from "../../utils/UserSession";
import {GiftList} from "../../../imports/objects/giftlist/GiftList";
import * as assert from "assert";
import {Gift} from "../../../imports/objects/gift/Gift";

describe("Other test", function () {

    const userSession: UserSession = new UserSession();

    beforeEach(() => {
        resetDatabase();
        userSession.createUserSession();
    });

    afterEach(() => {
        userSession.endUserSession();
        resetDatabase();
    });

    it("Adds an empty gift list", () => {
        GiftListCollectionManager.getInstance().insert(new GiftList());
        assert.strictEqual(1, GiftListCollectionManager.getInstance().getGiftLists().length);
    })

    it("Adds a populated gift list", () => {

        const giftList = new GiftList();
        giftList.personName = "Person Name";
        giftList.username = "Username";
        giftList.gifts = [new Gift(0).setName("Gift")];

        GiftListCollectionManager.getInstance().insert(giftList);
        assert.strictEqual(1, GiftListCollectionManager.getInstance().getGiftLists().length);

        const dbGiftList = GiftListCollectionManager.getInstance().getGiftLists()[0];
        assert.strictEqual("Person Name", dbGiftList.personName)
        assert.strictEqual("Username", dbGiftList.username)

        assert.strictEqual(1, dbGiftList.gifts.length)
        assert.strictEqual("Gift", dbGiftList.gifts[0]._name)
    });

    it("Adds a gift to a gift list", () => {

    })

});

