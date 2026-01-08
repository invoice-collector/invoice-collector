
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ThriveThemesAffiliateprogrammCollector extends SketchCollector {

    static CONFIG = {
        id: "thrive_themes_affiliateprogramm",
        name: "Thrive Themes Affiliateprogramm",
        description: "i18n.collectors.thrive_themes_affiliateprogramm.description",
        version: "0",
        website: "https://thrivethemes.com/affiliates/account.php?page=3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1496571.jpg",
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
        loginUrl: "https://thrivethemes.com/affiliates/account.php?page=3",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThriveThemesAffiliateprogrammCollector.CONFIG);
    }
}
