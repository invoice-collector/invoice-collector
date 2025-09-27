
import { SketchCollector } from '../../sketchCollector';

export class TdsTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "tds_telecom",
        name: "TDS Telecom",
        description: "i18n.collectors.tds_telecom.description",
        version: "0",
        website: "https://login.tds.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382651.jpg",
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
        entryUrl: "https://login.tds.net/",
    }

    constructor() {
        super(TdsTelecomCollector.CONFIG);
    }
}
