
import { SketchCollector } from '../../sketchCollector';

export class InstallatronCollector extends SketchCollector {

    static CONFIG = {
        id: "installatron",
        name: "Installatron",
        description: "i18n.collectors.installatron.description",
        version: "0",
        website: "https://installatron.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44818.jpg",
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
        entryUrl: "https://installatron.com/account/invoices",
    }

    constructor() {
        super(InstallatronCollector.CONFIG);
    }
}
