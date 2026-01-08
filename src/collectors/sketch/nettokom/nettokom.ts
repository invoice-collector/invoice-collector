
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NettokomCollector extends SketchCollector {

    static CONFIG = {
        id: "nettokom",
        name: "NettoKOM",
        description: "i18n.collectors.nettokom.description",
        version: "0",
        website: "https://mein.nettokom.de/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26979.jpg",
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
        loginUrl: "https://mein.nettokom.de/de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NettokomCollector.CONFIG);
    }
}
