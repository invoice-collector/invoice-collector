
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnbwSmartMobilitySuiteCollector extends SketchCollector {

    static CONFIG = {
        id: "enbw_smart_mobility_suite",
        name: "Enbw Smart Mobility Suite",
        description: "i18n.collectors.enbw_smart_mobility_suite.description",
        version: "0",
        website: "https://smartenergysuite.enbw.com/smartmobility/fleet",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1902245.jpg",
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
        loginUrl: "https://smartenergysuite.enbw.com/smartmobility/fleet",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EnbwSmartMobilitySuiteCollector.CONFIG);
    }
}
