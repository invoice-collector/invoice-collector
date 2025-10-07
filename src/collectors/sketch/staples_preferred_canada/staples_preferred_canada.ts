
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StaplesPreferredCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "staples_preferred_canada",
        name: "Staples Preferred Canada",
        description: "i18n.collectors.staples_preferred_canada.description",
        version: "0",
        website: "https://www.staplespreferred.ca/pcam/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108444.jpg",
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
        entryUrl: "https://www.staplespreferred.ca/pcam/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StaplesPreferredCanadaCollector.CONFIG);
    }
}
