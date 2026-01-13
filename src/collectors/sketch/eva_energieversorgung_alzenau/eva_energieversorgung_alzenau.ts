
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EvaEnergieversorgungAlzenauCollector extends SketchCollector {

    static CONFIG = {
        id: "eva_energieversorgung_alzenau",
        name: "EVA Energieversorgung Alzenau",
        description: "i18n.collectors.eva_energieversorgung_alzenau.description",
        version: "0",
        website: "http://www.eva-alzenau.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9218.jpg",
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
        loginUrl: "http://www.eva-alzenau.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvaEnergieversorgungAlzenauCollector.CONFIG);
    }
}
