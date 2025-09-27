
import { SketchCollector } from '../../sketchCollector';

export class TheReceptionistCollector extends SketchCollector {

    static CONFIG = {
        id: "the_receptionist",
        name: "The Receptionist",
        description: "i18n.collectors.the_receptionist.description",
        version: "0",
        website: "https://app.thereceptionist.com/billing/hq/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/760629.jpg",
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
        entryUrl: "https://app.thereceptionist.com/billing/hq/invoices",
    }

    constructor() {
        super(TheReceptionistCollector.CONFIG);
    }
}
