
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HostingerPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "hostinger_partners",
        name: "Hostinger Partners",
        description: "i18n.collectors.hostinger_partners.description",
        version: "0",
        website: "https://affiliates.hostinger.com/publisher/#!/billing?limit=50&page=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2189601.jpg",
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
        loginUrl: "https://affiliates.hostinger.com/publisher/#!/billing?limit=50&page=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostingerPartnersCollector.CONFIG);
    }
}
