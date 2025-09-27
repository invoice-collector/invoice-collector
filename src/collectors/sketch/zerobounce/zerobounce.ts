
import { SketchCollector } from '../../sketchCollector';

export class ZerobounceCollector extends SketchCollector {

    static CONFIG = {
        id: "zerobounce",
        name: "Zerobounce",
        description: "i18n.collectors.zerobounce.description",
        version: "0",
        website: "https://www.zerobounce.net/members/customerinvoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1324760.jpg",
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
        entryUrl: "https://www.zerobounce.net/members/customerinvoices/",
    }

    constructor() {
        super(ZerobounceCollector.CONFIG);
    }
}
