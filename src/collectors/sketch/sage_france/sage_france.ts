
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SageFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "sage_france",
        name: "Sage France",
        description: "i18n.collectors.sage_france.description",
        version: "0",
        website: "https://www.sage.com/fr-fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87684.jpg",
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
        entryUrl: "https://www.sage.com/fr-fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SageFranceCollector.CONFIG);
    }
}
