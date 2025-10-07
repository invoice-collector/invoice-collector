
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RadiusvelocityCollector extends SketchCollector {

    static CONFIG = {
        id: "radiusvelocity",
        name: "radiusvelocity",
        description: "i18n.collectors.radiusvelocity.description",
        version: "0",
        website: "https://www.velocityfleet.com/app/invoices/list/fuel/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2021161.jpg",
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
        entryUrl: "https://www.velocityfleet.com/app/invoices/list/fuel/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RadiusvelocityCollector.CONFIG);
    }
}
