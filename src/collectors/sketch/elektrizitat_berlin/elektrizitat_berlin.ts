
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ElektrizitatBerlinCollector extends SketchCollector {

    static CONFIG = {
        id: "elektrizitat_berlin",
        name: "Elektrizitat Berlin",
        description: "i18n.collectors.elektrizitat_berlin.description",
        version: "0",
        website: "https://kundenportal.elektrizitaet-berlin.de/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4465656.jpg",
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
        loginUrl: "https://kundenportal.elektrizitaet-berlin.de/dashboard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ElektrizitatBerlinCollector.CONFIG);
    }
}
