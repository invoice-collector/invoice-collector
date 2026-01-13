
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JweilandNetCollector extends SketchCollector {

    static CONFIG = {
        id: "jweiland_net",
        name: "jweiland.net",
        description: "i18n.collectors.jweiland_net.description",
        version: "0",
        website: "https://jweiland83.premium-admin.eu/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16330.jpg",
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
        loginUrl: "https://jweiland83.premium-admin.eu/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JweilandNetCollector.CONFIG);
    }
}
