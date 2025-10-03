
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CicRelevesFiscauxCollector extends SketchCollector {

    static CONFIG = {
        id: "cic_releves_fiscaux",
        name: "CIC - Releves fiscaux",
        description: "i18n.collectors.cic_releves_fiscaux.description",
        version: "0",
        website: "https://www.cic.fr/fr/authentification.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115986.jpg",
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
        entryUrl: "https://www.cic.fr/fr/authentification.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CicRelevesFiscauxCollector.CONFIG);
    }
}
