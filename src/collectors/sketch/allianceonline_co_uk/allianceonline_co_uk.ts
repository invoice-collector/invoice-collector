
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllianceonlineCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "allianceonline_co_uk",
        name: "AllianceOnline.co.uk",
        description: "i18n.collectors.allianceonline_co_uk.description",
        version: "0",
        website: "https://www.allianceonline.co.uk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41875.jpg",
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
        loginUrl: "https://www.allianceonline.co.uk",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AllianceonlineCoUkCollector.CONFIG);
    }
}
