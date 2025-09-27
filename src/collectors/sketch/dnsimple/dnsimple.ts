
import { SketchCollector } from '../../sketchCollector';

export class DnsimpleCollector extends SketchCollector {

    static CONFIG = {
        id: "dnsimple",
        name: "DNSimple",
        description: "i18n.collectors.dnsimple.description",
        version: "0",
        website: "https://dnsimple.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8857.jpg",
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
        entryUrl: "https://dnsimple.com/login",
    }

    constructor() {
        super(DnsimpleCollector.CONFIG);
    }
}
