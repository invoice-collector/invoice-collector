
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ZenmateCollector extends SketchCollector {

    static CONFIG = {
        id: "zenmate",
        name: "ZenMate",
        description: "i18n.collectors.zenmate.description",
        version: "0",
        website: "https://account.zenmate.com/de_DE/login?redirectTo=/de_DE/devices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48669.jpg",
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
        loginUrl: "https://account.zenmate.com/de_DE/login?redirectTo=/de_DE/devices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZenmateCollector.CONFIG);
    }
}
