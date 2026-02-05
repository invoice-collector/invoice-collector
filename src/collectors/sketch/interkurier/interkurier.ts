
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InterkurierCollector extends SketchCollector {

    static CONFIG = {
        id: "interkurier",
        name: "interkurier",
        description: "i18n.collectors.interkurier.description",
        version: "0",
        website: "https://cloud-11.datenbanken24.de/apps/ikauftrag/base.nsf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1203405.jpg",
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
        loginUrl: "https://cloud-11.datenbanken24.de/apps/ikauftrag/base.nsf",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InterkurierCollector.CONFIG);
    }
}
