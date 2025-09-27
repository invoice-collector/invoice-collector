
import { SketchCollector } from '../../sketchCollector';

export class ContactcareNlCollector extends SketchCollector {

    static CONFIG = {
        id: "contactcare_nl",
        name: "ContactCare.nl",
        description: "i18n.collectors.contactcare_nl.description",
        version: "0",
        website: "https://my.contact.care/nl_NL/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32494.jpg",
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
        entryUrl: "https://my.contact.care/nl_NL/login",
    }

    constructor() {
        super(ContactcareNlCollector.CONFIG);
    }
}
