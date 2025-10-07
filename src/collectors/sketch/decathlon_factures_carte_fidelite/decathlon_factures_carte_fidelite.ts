
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DecathlonFacturesCarteFideliteCollector extends SketchCollector {

    static CONFIG = {
        id: "decathlon_factures_carte_fidelite",
        name: "Decathlon (Factures carte fidelite)",
        description: "i18n.collectors.decathlon_factures_carte_fidelite.description",
        version: "0",
        website: "https://www.decathlon.fr/fr/loginPage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118382.jpg",
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
        entryUrl: "https://www.decathlon.fr/fr/loginPage",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DecathlonFacturesCarteFideliteCollector.CONFIG);
    }
}
