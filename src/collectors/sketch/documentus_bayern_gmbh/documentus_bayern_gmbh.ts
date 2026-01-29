
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DocumentusBayernGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "documentus_bayern_gmbh",
        name: "Documentus Bayern GmbH",
        description: "i18n.collectors.documentus_bayern_gmbh.description",
        version: "0",
        website: "https://portal.documentus-bayern.de/documentus/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2636399.jpg",
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
        loginUrl: "https://portal.documentus-bayern.de/documentus/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DocumentusBayernGmbhCollector.CONFIG);
    }
}
