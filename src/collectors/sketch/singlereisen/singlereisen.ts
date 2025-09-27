
import { SketchCollector } from '../../sketchCollector';

export class SinglereisenCollector extends SketchCollector {

    static CONFIG = {
        id: "singlereisen",
        name: "Singlereisen",
        description: "i18n.collectors.singlereisen.description",
        version: "0",
        website: "https://partner.singlereisen.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1665662.jpg",
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
        entryUrl: "https://partner.singlereisen.de/user-billings.do",
    }

    constructor() {
        super(SinglereisenCollector.CONFIG);
    }
}
