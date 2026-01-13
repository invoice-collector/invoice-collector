
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeBorkenEmobilitatCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_borken_emobilitat",
        name: "Stadtwerke Borken Emobilitat",
        description: "i18n.collectors.stadtwerke_borken_emobilitat.description",
        version: "0",
        website: "https://stadtwerke-borken.emobilitycloud.com/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175532.jpg",
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
        loginUrl: "https://stadtwerke-borken.emobilitycloud.com/de/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeBorkenEmobilitatCollector.CONFIG);
    }
}
