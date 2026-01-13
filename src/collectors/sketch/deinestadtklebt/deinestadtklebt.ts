
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeinestadtklebtCollector extends SketchCollector {

    static CONFIG = {
        id: "deinestadtklebt",
        name: "DeineStadtKlebt",
        description: "i18n.collectors.deinestadtklebt.description",
        version: "0",
        website: "https://www.deinestadtklebt.de/kundenbereich/auftraege/abgeschlossene",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/94250.jpg",
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
        loginUrl: "https://www.deinestadtklebt.de/kundenbereich/auftraege/abgeschlossene",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeinestadtklebtCollector.CONFIG);
    }
}
