import {GiftList} from "../giftlist/GiftList";

export class Gift {

    constructor(id: number) {
        this._id = id;
    }

    _id: number;

    name: string = "";

    description: string = "";

    isPrivate: boolean = false;

    cost: number = 0;

    giftList: GiftList = null as any;
}