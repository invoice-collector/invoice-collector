
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebDeCollector extends SketchCollector {

    static CONFIG = {
        id: "web_de",
        name: "WEB.de",
        description: "i18n.collectors.web_de.description",
        version: "0",
        website: "https://mein.web.de/rechnungen?inner=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/318.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://mein.web.de/rechnungen?inner=true",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebDeCollector.CONFIG);
    }
}
