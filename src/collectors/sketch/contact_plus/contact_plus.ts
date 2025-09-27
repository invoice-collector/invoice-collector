
import { SketchCollector } from '../../sketchCollector';

export class ContactPlusCollector extends SketchCollector {

    static CONFIG = {
        id: "contact_plus",
        name: "Contact Plus",
        description: "i18n.collectors.contact_plus.description",
        version: "0",
        website: "https://app.contactsplus.com/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/760771.jpg",
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
        entryUrl: "https://app.contactsplus.com/subscription",
    }

    constructor() {
        super(ContactPlusCollector.CONFIG);
    }
}
