
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HausUndGrundVerlagCollector extends SketchCollector {

    static CONFIG = {
        id: "haus_und_grund_verlag",
        name: "Haus und Grund Verlag",
        description: "i18n.collectors.haus_und_grund_verlag.description",
        version: "0",
        website: "https://ssl.haus-und-grund.com/rechnungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135928.jpg",
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
        loginUrl: "https://ssl.haus-und-grund.com/rechnungen.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HausUndGrundVerlagCollector.CONFIG);
    }
}
