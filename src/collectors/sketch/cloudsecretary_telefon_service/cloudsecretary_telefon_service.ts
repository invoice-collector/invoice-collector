
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CloudsecretaryTelefonServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudsecretary_telefon_service",
        name: "cloudsecretary Telefon Service",
        description: "i18n.collectors.cloudsecretary_telefon_service.description",
        version: "0",
        website: "https://www.cloudsecretary.de/panel/de/consumption/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519897.jpg",
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
        loginUrl: "https://www.cloudsecretary.de/panel/de/consumption/billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CloudsecretaryTelefonServiceCollector.CONFIG);
    }
}
