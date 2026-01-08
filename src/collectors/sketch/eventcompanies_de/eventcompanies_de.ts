
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EventcompaniesDeCollector extends SketchCollector {

    static CONFIG = {
        id: "eventcompanies_de",
        name: "eventcompanies.de",
        description: "i18n.collectors.eventcompanies_de.description",
        version: "0",
        website: "https://www.eventcompanies.de/unternehmen/content.php?whcontentid=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70686.jpg",
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
        loginUrl: "https://www.eventcompanies.de/unternehmen/content.php?whcontentid=login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EventcompaniesDeCollector.CONFIG);
    }
}
