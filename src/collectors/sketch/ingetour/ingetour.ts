
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IngetourCollector extends SketchCollector {

    static CONFIG = {
        id: "ingetour",
        name: "Ingetour",
        description: "i18n.collectors.ingetour.description",
        version: "0",
        website: "https://ingetr.biz.mb3m.com/Piece",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4234079.jpg",
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
        loginUrl: "https://ingetr.biz.mb3m.com/Piece",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IngetourCollector.CONFIG);
    }
}
