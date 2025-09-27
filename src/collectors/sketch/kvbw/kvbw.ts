
import { SketchCollector } from '../../sketchCollector';

export class KvbwCollector extends SketchCollector {

    static CONFIG = {
        id: "kvbw",
        name: "KVBW",
        description: "i18n.collectors.kvbw.description",
        version: "0",
        website: "https://dienste.portal.kvbawue.de/bw-testverordnung/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1239246.jpg",
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
        entryUrl: "https://dienste.portal.kvbawue.de/bw-testverordnung/#/",
    }

    constructor() {
        super(KvbwCollector.CONFIG);
    }
}
