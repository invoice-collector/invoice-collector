
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VattenfallGeschaftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_geschaftskunden",
        name: "Vattenfall - Geschaftskunden",
        description: "i18n.collectors.vattenfall_geschaftskunden.description",
        version: "0",
        website: "https://service.vattenfall.de/vertragskonto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129025.jpg",
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
        loginUrl: "https://service.vattenfall.de/vertragskonto",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VattenfallGeschaftskundenCollector.CONFIG);
    }
}
