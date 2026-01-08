
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HausAndGrundHausUndGrundVertragDeCollector extends SketchCollector {

    static CONFIG = {
        id: "haus_and_grund_haus_und_grund_vertrag_de",
        name: "Haus & Grund - haus-und-grund-vertrag.de",
        description: "i18n.collectors.haus_and_grund_haus_und_grund_vertrag_de.description",
        version: "0",
        website: "https://ssl.haus-und-grund-vertrag.de/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26541.jpg",
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
        loginUrl: "https://ssl.haus-und-grund-vertrag.de/login.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HausAndGrundHausUndGrundVertragDeCollector.CONFIG);
    }
}
