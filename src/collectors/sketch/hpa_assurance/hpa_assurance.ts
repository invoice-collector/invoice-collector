
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HpaAssuranceCollector extends SketchCollector {

    static CONFIG = {
        id: "hpa_assurance",
        name: "HPA ASSURANCE",
        description: "i18n.collectors.hpa_assurance.description",
        version: "0",
        website: "https://hpassurance.courtier-en-ligne.com/fr/contrats/1050/avis",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4188942.jpg",
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
        entryUrl: "https://hpassurance.courtier-en-ligne.com/fr/contrats/1050/avis",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HpaAssuranceCollector.CONFIG);
    }
}
