
import { SketchCollector } from '../../sketchCollector';

export class UrbansportsB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "urbansports_b2b",
        name: "UrbanSports B2B",
        description: "i18n.collectors.urbansports_b2b.description",
        version: "0",
        website: "https://portal.urbansportsclub.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4095796.jpg",
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
        entryUrl: "https://portal.urbansportsclub.com/invoices",
    }

    constructor() {
        super(UrbansportsB2bCollector.CONFIG);
    }
}
