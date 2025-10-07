
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FigurscoutVertriebsCollector extends SketchCollector {

    static CONFIG = {
        id: "figurscout_vertriebs",
        name: "Figurscout Vertriebs",
        description: "i18n.collectors.figurscout_vertriebs.description",
        version: "0",
        website: "https://www.dein-figurplan.de/mein-konto/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161592.jpg",
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
        entryUrl: "https://www.dein-figurplan.de/mein-konto/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FigurscoutVertriebsCollector.CONFIG);
    }
}
