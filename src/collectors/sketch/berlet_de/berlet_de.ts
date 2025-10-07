
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BerletDeCollector extends SketchCollector {

    static CONFIG = {
        id: "berlet_de",
        name: "berlet.de",
        description: "i18n.collectors.berlet_de.description",
        version: "0",
        website: "https://www.berlet.de/mein-konto.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1733.jpg",
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
        entryUrl: "https://www.berlet.de/mein-konto.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BerletDeCollector.CONFIG);
    }
}
