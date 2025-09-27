
import { SketchCollector } from '../../sketchCollector';

export class KlentyCollector extends SketchCollector {

    static CONFIG = {
        id: "klenty",
        name: "klenty",
        description: "i18n.collectors.klenty.description",
        version: "0",
        website: "https://app.klenty.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/209807.jpg",
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
        entryUrl: "https://app.klenty.com/",
    }

    constructor() {
        super(KlentyCollector.CONFIG);
    }
}
