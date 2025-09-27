
import { SketchCollector } from '../../sketchCollector';

export class DusNetCollector extends SketchCollector {

    static CONFIG = {
        id: "dus_net",
        name: "dus.net",
        description: "i18n.collectors.dus_net.description",
        version: "0",
        website: "https://www.dus.net/de/kundenmenue/kundencenter/bookkeeping.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6534.jpg",
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
        entryUrl: "https://www.dus.net/de/kundenmenue/kundencenter/bookkeeping.html",
    }

    constructor() {
        super(DusNetCollector.CONFIG);
    }
}
