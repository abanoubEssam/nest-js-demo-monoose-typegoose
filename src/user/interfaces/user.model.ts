import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import * as mongooseI18n from 'mongoose-i18n-localize';
import { autoIncrement } from 'mongoose-plugin-autoinc-fix';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop()
    _id: number;

    @Prop({ required: true, i18n: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.plugin(autoIncrement, {
    model: User.name,
    field: '_id',
    startAt: 1,
});

UserSchema.plugin(mongooseI18n, { locales: ['en', 'ar'] });
