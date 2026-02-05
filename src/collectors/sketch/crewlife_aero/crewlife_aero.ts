
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CrewlifeAeroCollector extends SketchCollector {

    static CONFIG = {
        id: "crewlife_aero",
        name: "Crewlife.aero",
        description: "i18n.collectors.crewlife_aero.description",
        version: "0",
        website: "https://portal.crewlife.aero/app/profi/partner/anzeigen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842033.jpg",
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
        loginUrl: "https://portal.crewlife.aero/app/profi/partner/anzeigen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CrewlifeAeroCollector.CONFIG);
    }
}
