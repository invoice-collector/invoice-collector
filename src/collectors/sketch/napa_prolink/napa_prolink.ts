
import { SketchCollector } from '../../sketchCollector';

export class NapaProlinkCollector extends SketchCollector {

    static CONFIG = {
        id: "napa_prolink",
        name: "NAPA PROLink",
        description: "i18n.collectors.napa_prolink.description",
        version: "0",
        website: "https://pro.napaprolink.com/my-account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593639.jpg",
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
        entryUrl: "https://pro.napaprolink.com/my-account/invoices",
    }

    constructor() {
        super(NapaProlinkCollector.CONFIG);
    }
}
