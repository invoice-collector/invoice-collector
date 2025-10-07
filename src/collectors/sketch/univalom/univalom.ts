
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnivalomCollector extends SketchCollector {

    static CONFIG = {
        id: "univalom",
        name: "Univalom",
        description: "i18n.collectors.univalom.description",
        version: "0",
        website: "https://univalom.ecocito.com/Usager/Facture/Index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4175572.jpg",
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
        entryUrl: "https://univalom.ecocito.com/Usager/Facture/Index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnivalomCollector.CONFIG);
    }
}
