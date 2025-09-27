
import { SketchCollector } from '../../sketchCollector';

export class ParcelMonkeyCollector extends SketchCollector {

    static CONFIG = {
        id: "parcel_monkey",
        name: "Parcel Monkey",
        description: "i18n.collectors.parcel_monkey.description",
        version: "0",
        website: "https://www.parcelmonkey.fr/en-fr/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746575.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.parcelmonkey.fr/en-fr/account/orders",
    }

    constructor() {
        super(ParcelMonkeyCollector.CONFIG);
    }
}
