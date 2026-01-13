
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ReisekostenGorillaCollector extends SketchCollector {

    static CONFIG = {
        id: "reisekosten_gorilla",
        name: "Reisekosten-Gorilla",
        description: "i18n.collectors.reisekosten_gorilla.description",
        version: "0",
        website: "https://www.reisekosten-gorilla.com/admin/teams/a9e9e9b8-657b-11e7-bbf2-06f35348abf7/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138787.jpg",
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
        loginUrl: "https://www.reisekosten-gorilla.com/admin/teams/a9e9e9b8-657b-11e7-bbf2-06f35348abf7/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReisekostenGorillaCollector.CONFIG);
    }
}
