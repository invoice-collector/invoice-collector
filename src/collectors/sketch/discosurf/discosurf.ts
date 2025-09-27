
import { SketchCollector } from '../../sketchCollector';

export class DiscosurfCollector extends SketchCollector {

    static CONFIG = {
        id: "discosurf",
        name: "discoSURF",
        description: "i18n.collectors.discosurf.description",
        version: "0",
        website: "https://mein.eteleon.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9079.jpg",
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
        entryUrl: "https://mein.eteleon.de/",
    }

    constructor() {
        super(DiscosurfCollector.CONFIG);
    }
}
