
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SofiyskavodaBgCollector extends SketchCollector {

    static CONFIG = {
        id: "sofiyskavoda_bg",
        name: "Sofiyskavoda.bg",
        description: "i18n.collectors.sofiyskavoda_bg.description",
        version: "0",
        website: "https://sofiyskavoda.bg/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1252950.jpg",
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
        loginUrl: "https://sofiyskavoda.bg/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SofiyskavodaBgCollector.CONFIG);
    }
}
