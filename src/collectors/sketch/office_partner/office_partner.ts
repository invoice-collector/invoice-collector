
import { SketchCollector } from '../../sketchCollector';

export class OfficePartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "office_partner",
        name: "OFFICE-Partner",
        description: "i18n.collectors.office_partner.description",
        version: "0",
        website: "https://www.office-partner.de/login#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/874681.jpg",
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
        entryUrl: "https://www.office-partner.de/login#/login",
    }

    constructor() {
        super(OfficePartnerCollector.CONFIG);
    }
}
