
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IonosEsCollector extends SketchCollector {

    static CONFIG = {
        id: "ionos_es",
        name: "Ionos (.es)",
        description: "i18n.collectors.ionos_es.description",
        version: "0",
        website: "https://login.ionos.es/?__lf=Static",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8746.jpg",
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
        loginUrl: "https://login.ionos.es/?__lf=Static",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IonosEsCollector.CONFIG);
    }
}
