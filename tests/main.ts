import {Factory} from 'meteor/dburles:factory';
import {Meteor} from 'meteor/meteor';
import {resetDatabase} from 'meteor/xolvio:cleaner';
import {GiftListCollectionManager} from "../imports/api/collections/GiftListCollection";
import User = Meteor.User;

import { sinon } from 'meteor/practicalmeteor:sinon';

describe("skel", function () {

    let sandbox;

    it("package.json has correct name", async function () {


    });

    let currentUser;

    beforeEach(() => {
        resetDatabase();
        Factory.define('user', Meteor.users, {

        });
        currentUser = Factory.create('user');
        sinon.stub(Meteor, 'user');

        Meteor.user.returns(currentUser);

        sinon.stub(Meteor, 'userId');

        Meteor.userId.returns(currentUser._id);
    });

    afterEach(() => {
        Meteor.user.restore();
        Meteor.userId.restore();
        resetDatabase();
    });

    it("does something", () => {
        console.log("Gift lists")
        console.log(GiftListCollectionManager.getInstance().getGiftLists());
    })
});

