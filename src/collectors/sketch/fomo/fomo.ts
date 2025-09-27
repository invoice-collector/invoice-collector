
import { SketchCollector } from '../../sketchCollector';

export class FomoCollector extends SketchCollector {

    static CONFIG = {
        id: "fomo",
        name: "Fomo",
        description: "i18n.collectors.fomo.description",
        version: "0",
        website: "https://fomo.com/app#/profile/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134678.jpg",
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
        entryUrl: "https://fomo.com/app#/profile/invoices",
    }

    constructor() {
        super(FomoCollector.CONFIG);
    }
}
