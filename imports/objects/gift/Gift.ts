import {GiftList} from "../giftlist/GiftList";

export class Gift {

    constructor() {
    }

    _id: string;

    _name: string = "";

    _description: string = "";

    _isPrivate: boolean = false;

    _cost: number = 0;

    _giftList: GiftList = null as any;

    setId(id: string): Gift {
        this._id = id;
        return this; 
    }

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