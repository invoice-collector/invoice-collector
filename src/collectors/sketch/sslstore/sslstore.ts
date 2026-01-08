
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SslstoreCollector extends SketchCollector {

    static CONFIG = {
        id: "sslstore",
        name: "sslstore",
        description: "i18n.collectors.sslstore.description",
        version: "0",
        website: "https://www.thesslstore.com/client/activity.aspx?bi=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/146175.jpg",
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
        loginUrl: "https://www.thesslstore.com/client/activity.aspx?bi=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SslstoreCollector.CONFIG);
    }
}
