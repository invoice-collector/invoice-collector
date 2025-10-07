
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DhlFrCollector extends SketchCollector {

    static CONFIG = {
        id: "dhl_fr",
        name: "DHL.fr",
        description: "i18n.collectors.dhl_fr.description",
        version: "0",
        website: "https://www.dhl.com/fr-fr/home.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20447.jpg",
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
        entryUrl: "https://www.dhl.com/fr-fr/home.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DhlFrCollector.CONFIG);
    }
}
