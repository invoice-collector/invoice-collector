
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DomcuraAgCollector extends SketchCollector {

    static CONFIG = {
        id: "domcura_ag",
        name: "Domcura AG",
        description: "i18n.collectors.domcura_ag.description",
        version: "0",
        website: "https://office.domcura.de/index.php?m=domcura&c=profile&f=provabrg",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2066537.jpg",
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
        loginUrl: "https://office.domcura.de/index.php?m=domcura&c=profile&f=provabrg",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DomcuraAgCollector.CONFIG);
    }
}
