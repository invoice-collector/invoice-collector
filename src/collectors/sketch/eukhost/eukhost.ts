
import { SketchCollector } from '../../sketchCollector';

export class EukhostCollector extends SketchCollector {

    static CONFIG = {
        id: "eukhost",
        name: "EUKHOST",
        description: "i18n.collectors.eukhost.description",
        version: "0",
        website: "http://www.eukhost.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9212.jpg",
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
        entryUrl: "http://www.eukhost.com",
    }

    constructor() {
        super(EukhostCollector.CONFIG);
    }
}
