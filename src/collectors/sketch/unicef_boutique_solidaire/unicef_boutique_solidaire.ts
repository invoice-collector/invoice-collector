
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnicefBoutiqueSolidaireCollector extends SketchCollector {

    static CONFIG = {
        id: "unicef_boutique_solidaire",
        name: "Unicef - boutique solidaire",
        description: "i18n.collectors.unicef_boutique_solidaire.description",
        version: "0",
        website: "http://boutique-solidaire.com/unicef/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123519.jpg",
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
        entryUrl: "http://boutique-solidaire.com/unicef/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnicefBoutiqueSolidaireCollector.CONFIG);
    }
}
