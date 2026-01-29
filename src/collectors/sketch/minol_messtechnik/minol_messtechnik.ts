
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MinolMesstechnikCollector extends SketchCollector {

    static CONFIG = {
        id: "minol_messtechnik",
        name: "Minol Messtechnik",
        description: "i18n.collectors.minol_messtechnik.description",
        version: "0",
        website: "https://www.minol.de/minoldirect.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213142.jpg",
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
        loginUrl: "https://www.minol.de/minoldirect.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MinolMesstechnikCollector.CONFIG);
    }
}
