
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PorscheChargingServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "porsche_charging_service",
        name: "Porsche Charging Service",
        description: "i18n.collectors.porsche_charging_service.description",
        version: "0",
        website: "https://inbox.porsche.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1435527.jpg",
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
        entryUrl: "https://inbox.porsche.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PorscheChargingServiceCollector.CONFIG);
    }
}
