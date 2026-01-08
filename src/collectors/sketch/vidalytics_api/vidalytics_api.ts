
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VidalyticsApiCollector extends SketchCollector {

    static CONFIG = {
        id: "vidalytics_api",
        name: "Vidalytics API",
        description: "i18n.collectors.vidalytics_api.description",
        version: "0",
        website: "https://api.vidalytics.com/oauth/authorize?response_type=token&client_id=app&state=STJlbTVCVDUtcVZfOTBiUW9HdzRtU1AwWDJ3a0pSUDVNZld4YkpSYWt4Y1hG&redirect_uri=https://app.vidalytics.com/dashboard&scope=api",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/709651.jpg",
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
        loginUrl: "https://api.vidalytics.com/oauth/authorize?response_type=token&client_id=app&state=STJlbTVCVDUtcVZfOTBiUW9HdzRtU1AwWDJ3a0pSUDVNZld4YkpSYWt4Y1hG&redirect_uri=https://app.vidalytics.com/dashboard&scope=api",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VidalyticsApiCollector.CONFIG);
    }
}
