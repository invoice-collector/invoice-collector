
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MkbBrandstofOnlineDashboardCollector extends SketchCollector {

    static CONFIG = {
        id: "mkb_brandstof_online_dashboard",
        name: "MKB Brandstof - Online Dashboard",
        description: "i18n.collectors.mkb_brandstof_online_dashboard.description",
        version: "0",
        website: "https://mijn.mkb-brandstof.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137258.jpg",
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
        loginUrl: "https://mijn.mkb-brandstof.nl/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MkbBrandstofOnlineDashboardCollector.CONFIG);
    }
}
