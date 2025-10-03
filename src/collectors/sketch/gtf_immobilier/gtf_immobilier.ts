
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GtfImmobilierCollector extends SketchCollector {

    static CONFIG = {
        id: "gtf_immobilier",
        name: "GTF Immobilier",
        description: "i18n.collectors.gtf_immobilier.description",
        version: "0",
        website: "https://extranet.gtf.fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200783.jpg",
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
        entryUrl: "https://extranet.gtf.fr/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GtfImmobilierCollector.CONFIG);
    }
}
