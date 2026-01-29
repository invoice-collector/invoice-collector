
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CircleKDenmarkCollector extends SketchCollector {

    static CONFIG = {
        id: "circle_k_denmark",
        name: "CIRCLE K - Denmark",
        description: "i18n.collectors.circle_k_denmark.description",
        version: "0",
        website: "https://www.circlek.dk/dk_DK/pg1334072984722/privat/voresbutikker/PrivatKort/MitCircleK.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22015.jpg",
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
        loginUrl: "https://www.circlek.dk/dk_DK/pg1334072984722/privat/voresbutikker/PrivatKort/MitCircleK.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CircleKDenmarkCollector.CONFIG);
    }
}
