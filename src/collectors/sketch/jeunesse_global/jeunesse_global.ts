
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JeunesseGlobalCollector extends SketchCollector {

    static CONFIG = {
        id: "jeunesse_global",
        name: "Jeunesse Global",
        description: "i18n.collectors.jeunesse_global.description",
        version: "0",
        website: "https://joffice.jeunesseglobal.com//login.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226710.jpg",
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
        entryUrl: "https://joffice.jeunesseglobal.com//login.asp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JeunesseGlobalCollector.CONFIG);
    }
}
