
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ServiceTaxi4meCollector extends SketchCollector {

    static CONFIG = {
        id: "service_taxi4me",
        name: "service.taxi4me",
        description: "i18n.collectors.service_taxi4me.description",
        version: "0",
        website: "https://service.taxi4me.net/1000/unternehmer2.4/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1316277.jpg",
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
        loginUrl: "https://service.taxi4me.net/1000/unternehmer2.4/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ServiceTaxi4meCollector.CONFIG);
    }
}
