
import { SketchCollector } from '../../sketchCollector';

export class MatomoCollector extends SketchCollector {

    static CONFIG = {
        id: "matomo",
        name: "matomo",
        description: "i18n.collectors.matomo.description",
        version: "0",
        website: "https://www.matomo.cloud",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119838.jpg",
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
        entryUrl: "https://www.matomo.cloud",
    }

    constructor() {
        super(MatomoCollector.CONFIG);
    }
}
