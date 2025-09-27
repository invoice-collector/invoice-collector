
import { SketchCollector } from '../../sketchCollector';

export class SternstromCollector extends SketchCollector {

    static CONFIG = {
        id: "sternstrom",
        name: "SternStrom",
        description: "i18n.collectors.sternstrom.description",
        version: "0",
        website: "https://www.sternstrom.de/sternstrom/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9155.jpg",
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
        entryUrl: "https://www.sternstrom.de/sternstrom/",
    }

    constructor() {
        super(SternstromCollector.CONFIG);
    }
}
