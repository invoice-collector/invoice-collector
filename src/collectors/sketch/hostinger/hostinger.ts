
import { SketchCollector } from '../../sketchCollector';

export class HostingerCollector extends SketchCollector {

    static CONFIG = {
        id: "hostinger",
        name: "Hostinger",
        description: "i18n.collectors.hostinger.description",
        version: "0",
        website: "https://hpanel.hostinger.com/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779718.jpg",
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
        entryUrl: "https://hpanel.hostinger.com/de",
    }

    constructor() {
        super(HostingerCollector.CONFIG);
    }
}
