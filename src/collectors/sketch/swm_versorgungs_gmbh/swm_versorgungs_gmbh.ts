
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwmVersorgungsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "swm_versorgungs_gmbh",
        name: "SWM Versorgungs GmbH",
        description: "i18n.collectors.swm_versorgungs_gmbh.description",
        version: "0",
        website: "https://meine.swm.de/iss/acc/vertragsmanagement.html#/postfach",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/163752.jpg",
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
        entryUrl: "https://meine.swm.de/iss/acc/vertragsmanagement.html#/postfach",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwmVersorgungsGmbhCollector.CONFIG);
    }
}
