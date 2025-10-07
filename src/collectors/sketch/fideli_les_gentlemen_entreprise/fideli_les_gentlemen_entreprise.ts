
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FideliLesGentlemenEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "fideli_les_gentlemen_entreprise",
        name: "Fideli - Les Gentlemen - Entreprise",
        description: "i18n.collectors.fideli_les_gentlemen_entreprise.description",
        version: "0",
        website: "https://www.gentlemen-demenagement.com/demenagement-entreprises/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118873.jpg",
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
        entryUrl: "https://www.gentlemen-demenagement.com/demenagement-entreprises/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FideliLesGentlemenEntrepriseCollector.CONFIG);
    }
}
