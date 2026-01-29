
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeEutinCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_eutin",
        name: "Stadtwerke Eutin",
        description: "i18n.collectors.stadtwerke_eutin.description",
        version: "0",
        website: "https://portal.stadtwerke-eutin.de/SWE/MeineRechnungen.cms?ActiveID=1002",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1221866.jpg",
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
        loginUrl: "https://portal.stadtwerke-eutin.de/SWE/MeineRechnungen.cms?ActiveID=1002",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeEutinCollector.CONFIG);
    }
}
