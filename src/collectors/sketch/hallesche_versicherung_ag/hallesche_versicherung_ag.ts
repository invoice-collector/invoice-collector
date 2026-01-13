
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HallescheVersicherungAgCollector extends SketchCollector {

    static CONFIG = {
        id: "hallesche_versicherung_ag",
        name: "Hallesche Versicherung aG",
        description: "i18n.collectors.hallesche_versicherung_ag.description",
        version: "0",
        website: "https://hallesche-firmenportal.de/portal/app/module/firma/postfach?rnd=5955&OWASP_CSRFTOKEN=MVMH-2SYF-4MFF-974P-YYG2-13JL-LL57-U5JA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1249706.jpg",
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
        loginUrl: "https://hallesche-firmenportal.de/portal/app/module/firma/postfach?rnd=5955&OWASP_CSRFTOKEN=MVMH-2SYF-4MFF-974P-YYG2-13JL-LL57-U5JA",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HallescheVersicherungAgCollector.CONFIG);
    }
}
