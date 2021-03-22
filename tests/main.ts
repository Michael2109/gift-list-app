import {Factory} from 'meteor/dburles:factory';
import {Meteor} from 'meteor/meteor';
import {resetDatabase} from 'meteor/xolvio:cleaner';
import * as tsSinon from "ts-sinon"
import {GiftListCollectionManager} from "../imports/api/collections/GiftListCollection";
import User = Meteor.User;


describe("Test", function () {

    let currentUser;

    let userStub;
    let userIdStub;

    beforeEach(() => {
        resetDatabase();
        Factory.define('user', Meteor.users, {

        });

        currentUser = Factory.create('user');
        userStub = tsSinon.default.stub(Meteor, 'user').callsFake(() => currentUser);

        userIdStub= tsSinon.default.stub(Meteor, 'userId').callsFake(() => currentUser._id);

    });

    afterEach(() => {
       userStub.restore();
       userIdStub.restore();
        resetDatabase();
    });

    it("does something", () => {
        console.log("Gift lists")
        console.log(GiftListCollectionManager.getInstance().getGiftLists());
    })
    it("does something else", () => {
        console.log("HERE")
    })
});

