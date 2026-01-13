
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PartnerportalDeutschepostCollector extends SketchCollector {

    static CONFIG = {
        id: "partnerportal_deutschepost",
        name: "Partnerportal Deutschepost",
        description: "i18n.collectors.partnerportal_deutschepost.description",
        version: "0",
        website: "https://www.partnerportal-deutschepost.de/meine-filiale/zahlen-daten-fakten/verguetungsabrechnung.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1234128.jpg",
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
        loginUrl: "https://www.partnerportal-deutschepost.de/meine-filiale/zahlen-daten-fakten/verguetungsabrechnung.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PartnerportalDeutschepostCollector.CONFIG);
    }
}
