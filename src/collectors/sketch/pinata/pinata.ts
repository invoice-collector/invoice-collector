
import { SketchCollector } from '../../sketchCollector';

export class PinataCollector extends SketchCollector {

    static CONFIG = {
        id: "pinata",
        name: "Pinata",
        description: "i18n.collectors.pinata.description",
        version: "0",
        website: "https://app.pinata.cloud/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1248102.jpg",
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
        entryUrl: "https://app.pinata.cloud/invoices",
    }

    constructor() {
        super(PinataCollector.CONFIG);
    }
}
