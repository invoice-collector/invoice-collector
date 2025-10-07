
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SachbezugskarteArbeitgeberCollector extends SketchCollector {

    static CONFIG = {
        id: "sachbezugskarte_arbeitgeber",
        name: "Sachbezugskarte - Arbeitgeber",
        description: "i18n.collectors.sachbezugskarte_arbeitgeber.description",
        version: "0",
        website: "https://www.sachbezugskarte.eu/secure/reports/billingfiles/show",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4532211.jpg",
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
        entryUrl: "https://www.sachbezugskarte.eu/secure/reports/billingfiles/show",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SachbezugskarteArbeitgeberCollector.CONFIG);
    }
}
