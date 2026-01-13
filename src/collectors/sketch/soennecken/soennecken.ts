
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SoenneckenCollector extends SketchCollector {

    static CONFIG = {
        id: "soennecken",
        name: "Soennecken",
        description: "i18n.collectors.soennecken.description",
        version: "0",
        website: "https://somit.soennecken.de/group/mitgliederservice/belegrecherche-neue-zr-",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/180766.jpg",
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
        loginUrl: "https://somit.soennecken.de/group/mitgliederservice/belegrecherche-neue-zr-",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SoenneckenCollector.CONFIG);
    }
}
