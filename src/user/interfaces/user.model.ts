import { prop, plugin } from "@typegoose/typegoose";
import { AutoIncrementID } from "@typegoose/auto-increment";
import * as mongooseI18n from 'mongoose-i18n-localize';


@plugin(AutoIncrementID, { startAt: 1, field: "_id", incrementBy: 1 })
@plugin(mongooseI18n, { locales: ['en', 'ar'] })
export class User {
    @prop()
    public _id: number;

    @prop({ i18n: true })
    public name: string;

    @prop()
    public email: string;

    @prop()
    public password: string;

}

