
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleRadianceEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_radiance_entreprise",
        name: "Mutuelle Radiance - Entreprise",
        description: "i18n.collectors.mutuelle_radiance_entreprise.description",
        version: "0",
        website: "https://mutuelle.fr/entreprise",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130492.jpg",
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
        entryUrl: "https://mutuelle.fr/entreprise",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleRadianceEntrepriseCollector.CONFIG);
    }
}
