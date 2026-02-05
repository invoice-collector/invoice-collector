
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BerlinerWasserbetriebeCollector extends SketchCollector {

    static CONFIG = {
        id: "berliner_wasserbetriebe",
        name: "Berliner Wasserbetriebe",
        description: "i18n.collectors.berliner_wasserbetriebe.description",
        version: "0",
        website: "https://aquanet.berlinwasser.de/onlineportal-bwb/logon/logonServlet",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8577.jpg",
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
        loginUrl: "https://aquanet.berlinwasser.de/onlineportal-bwb/logon/logonServlet",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BerlinerWasserbetriebeCollector.CONFIG);
    }
}
