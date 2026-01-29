
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PensioenfondsHorecaAndCateringCollector extends SketchCollector {

    static CONFIG = {
        id: "pensioenfonds_horeca_and_catering",
        name: "Pensioenfonds horeca & Catering",
        description: "i18n.collectors.pensioenfonds_horeca_and_catering.description",
        version: "0",
        website: "https://www.phenc.nl/mijnphenc/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2484147.jpg",
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
        loginUrl: "https://www.phenc.nl/mijnphenc/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PensioenfondsHorecaAndCateringCollector.CONFIG);
    }
}
