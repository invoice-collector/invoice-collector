
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KanuberErdgasCollector extends SketchCollector {

    static CONFIG = {
        id: "kanuber_erdgas",
        name: "Kanuber Erdgas",
        description: "i18n.collectors.kanuber_erdgas.description",
        version: "0",
        website: "https://energieportal.knauber.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90723.jpg",
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
        entryUrl: "https://energieportal.knauber.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KanuberErdgasCollector.CONFIG);
    }
}
