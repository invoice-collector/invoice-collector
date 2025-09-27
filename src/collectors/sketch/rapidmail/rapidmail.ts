
import { SketchCollector } from '../../sketchCollector';

export class RapidmailCollector extends SketchCollector {

    static CONFIG = {
        id: "rapidmail",
        name: "rapidmail",
        description: "i18n.collectors.rapidmail.description",
        version: "0",
        website: "https://my.rapidmail.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/504.jpg",
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
        entryUrl: "https://my.rapidmail.de",
    }

    constructor() {
        super(RapidmailCollector.CONFIG);
    }
}
