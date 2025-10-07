
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DieumweltdruckereiCollector extends SketchCollector {

    static CONFIG = {
        id: "dieumweltdruckerei",
        name: "DieUmweltDruckerei",
        description: "i18n.collectors.dieumweltdruckerei.description",
        version: "0",
        website: "https://www.dieumweltdruckerei.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49630.jpg",
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
        entryUrl: "https://www.dieumweltdruckerei.de/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DieumweltdruckereiCollector.CONFIG);
    }
}
