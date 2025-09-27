
import { SketchCollector } from '../../sketchCollector';

export class DaznCollector extends SketchCollector {

    static CONFIG = {
        id: "dazn",
        name: "DAZN",
        description: "i18n.collectors.dazn.description",
        version: "0",
        website: "https://www.dazn.com/de-DE/account/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/94981.jpg",
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
        entryUrl: "https://www.dazn.com/de-DE/account/signin",
    }

    constructor() {
        super(DaznCollector.CONFIG);
    }
}
