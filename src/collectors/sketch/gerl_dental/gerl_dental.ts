
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GerlDentalCollector extends SketchCollector {

    static CONFIG = {
        id: "gerl_dental",
        name: "Gerl Dental",
        description: "i18n.collectors.gerl_dental.description",
        version: "0",
        website: "https://gerl-dental.de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445900.jpg",
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
        entryUrl: "https://gerl-dental.de/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GerlDentalCollector.CONFIG);
    }
}
