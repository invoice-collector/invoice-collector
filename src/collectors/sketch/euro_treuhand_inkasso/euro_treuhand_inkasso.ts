
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EuroTreuhandInkassoCollector extends SketchCollector {

    static CONFIG = {
        id: "euro_treuhand_inkasso",
        name: "Euro Treuhand Inkasso",
        description: "i18n.collectors.euro_treuhand_inkasso.description",
        version: "0",
        website: "https://www.eurotreuhandinkasso-service.de/kundenbereich/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3840.jpg",
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
        loginUrl: "https://www.eurotreuhandinkasso-service.de/kundenbereich/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EuroTreuhandInkassoCollector.CONFIG);
    }
}
