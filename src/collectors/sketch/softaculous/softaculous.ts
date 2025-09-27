
import { SketchCollector } from '../../sketchCollector';

export class SoftaculousCollector extends SketchCollector {

    static CONFIG = {
        id: "softaculous",
        name: "Softaculous",
        description: "i18n.collectors.softaculous.description",
        version: "0",
        website: "https://www.softaculous.com/clients?ca=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44820.jpg",
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
        entryUrl: "https://www.softaculous.com/clients?ca=invoices",
    }

    constructor() {
        super(SoftaculousCollector.CONFIG);
    }
}
