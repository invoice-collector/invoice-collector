
import { SketchCollector } from '../../sketchCollector';

export class AustrocardCollector extends SketchCollector {

    static CONFIG = {
        id: "austrocard",
        name: "Austrocard",
        description: "i18n.collectors.austrocard.description",
        version: "0",
        website: "https://portal.austrocard.at/#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221837.jpg",
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
        entryUrl: "https://portal.austrocard.at/#/invoices",
    }

    constructor() {
        super(AustrocardCollector.CONFIG);
    }
}
