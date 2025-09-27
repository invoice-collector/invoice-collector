
import { SketchCollector } from '../../sketchCollector';

export class FreenowCollector extends SketchCollector {

    static CONFIG = {
        id: "freenow",
        name: "FreeNow",
        description: "i18n.collectors.freenow.description",
        version: "0",
        website: "https://free-now.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1172861.jpg",
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
        entryUrl: "https://free-now.com/de/",
    }

    constructor() {
        super(FreenowCollector.CONFIG);
    }
}
