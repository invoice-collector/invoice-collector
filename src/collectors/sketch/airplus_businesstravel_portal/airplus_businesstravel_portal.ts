
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AirplusBusinesstravelPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "airplus_businesstravel_portal",
        name: "AirPlus BusinessTravel Portal",
        description: "i18n.collectors.airplus_businesstravel_portal.description",
        version: "0",
        website: "https://businesstravelportal.airplus.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/874326.jpg",
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
        entryUrl: "https://businesstravelportal.airplus.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirplusBusinesstravelPortalCollector.CONFIG);
    }
}
