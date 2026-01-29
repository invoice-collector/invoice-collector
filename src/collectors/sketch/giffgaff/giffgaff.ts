
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GiffgaffCollector extends SketchCollector {

    static CONFIG = {
        id: "giffgaff",
        name: "giffgaff",
        description: "i18n.collectors.giffgaff.description",
        version: "0",
        website: "https://www.giffgaff.com/auth/login?redirect=%2Fdashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9405.jpg",
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
        loginUrl: "https://www.giffgaff.com/auth/login?redirect=%2Fdashboard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GiffgaffCollector.CONFIG);
    }
}
