
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TigerFacilityServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "tiger_facility_services",
        name: "tiger. | FACILITY SERVICES",
        description: "i18n.collectors.tiger_facility_services.description",
        version: "0",
        website: "https://app.tigerfacilityservices.com/facility_services/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/863408.jpg",
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
        entryUrl: "https://app.tigerfacilityservices.com/facility_services/sign_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TigerFacilityServicesCollector.CONFIG);
    }
}
