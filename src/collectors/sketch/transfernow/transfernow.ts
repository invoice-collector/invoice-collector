
import { SketchCollector } from '../../sketchCollector';

export class TransfernowCollector extends SketchCollector {

    static CONFIG = {
        id: "transfernow",
        name: "Transfernow",
        description: "i18n.collectors.transfernow.description",
        version: "0",
        website: "https://jmestudio.transfernow.net/en/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2716236.jpg",
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
        entryUrl: "https://jmestudio.transfernow.net/en/account/invoices",
    }

    constructor() {
        super(TransfernowCollector.CONFIG);
    }
}
