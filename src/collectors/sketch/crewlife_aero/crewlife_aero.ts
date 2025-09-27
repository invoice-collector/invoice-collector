
import { SketchCollector } from '../../sketchCollector';

export class CrewlifeAeroCollector extends SketchCollector {

    static CONFIG = {
        id: "crewlife_aero",
        name: "Crewlife.aero",
        description: "i18n.collectors.crewlife_aero.description",
        version: "0",
        website: "https://portal.crewlife.aero/app/profi/partner/anzeigen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842033.jpg",
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
        entryUrl: "https://portal.crewlife.aero/app/profi/partner/anzeigen",
    }

    constructor() {
        super(CrewlifeAeroCollector.CONFIG);
    }
}
