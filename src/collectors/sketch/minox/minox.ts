
import { SketchCollector } from '../../sketchCollector';

export class MinoxCollector extends SketchCollector {

    static CONFIG = {
        id: "minox",
        name: "minox",
        description: "i18n.collectors.minox.description",
        version: "0",
        website: "https://www.minox.nl/feature-categories/minox-open-api/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1468209.jpg",
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
        entryUrl: "https://www.minox.nl/feature-categories/minox-open-api/",
    }

    constructor() {
        super(MinoxCollector.CONFIG);
    }
}
