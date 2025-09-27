
import { SketchCollector } from '../../sketchCollector';

export class MyyavinCollector extends SketchCollector {

    static CONFIG = {
        id: "myyavin",
        name: "MYYAVIN",
        description: "i18n.collectors.myyavin.description",
        version: "0",
        website: "https://my.yavin.com/bo/company/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2201656.jpg",
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
        entryUrl: "https://my.yavin.com/bo/company/invoices",
    }

    constructor() {
        super(MyyavinCollector.CONFIG);
    }
}
