
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WortAndBildServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "wort_and_bild_service",
        name: "Wort&Bild Service",
        description: "i18n.collectors.wort_and_bild_service.description",
        version: "0",
        website: "https://cockpit.wub-service.de/#/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777994.jpg",
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
        entryUrl: "https://cockpit.wub-service.de/#/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WortAndBildServiceCollector.CONFIG);
    }
}
