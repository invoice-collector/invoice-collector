
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AralFleetCollector extends SketchCollector {

    static CONFIG = {
        id: "aral_fleet",
        name: "ARAL Fleet",
        description: "i18n.collectors.aral_fleet.description",
        version: "0",
        website: "https://fleet.aral.com/de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1278555.jpg",
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
        entryUrl: "https://fleet.aral.com/de/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AralFleetCollector.CONFIG);
    }
}
