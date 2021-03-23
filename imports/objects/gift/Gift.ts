import {GiftList} from "../giftlist/GiftList";

export class Gift {

    constructor(id: number) {
        this._id = id;
    }

    _id: number;

    _name: string = "";

    _description: string = "";

    _isPrivate: boolean = false;

    _cost: number = 0;

    _giftList: GiftList = null as any;

    setName(value: string): Gift {
        this._name = value;
        return this;
    }

    setDescription(value: string): Gift {
        this._description = value;
        return this;
    }

    setIsPrivate(value: boolean): Gift {
        this._isPrivate = value;
        return this;
    }

    setCost(value: number): Gift {
        this._cost = value;
        return this;
    }

    setGiftList(value: GiftList): Gift {
        this._giftList = value;
        return this;
    }
}