
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TuftsHealthEmployerCollector extends SketchCollector {

    static CONFIG = {
        id: "tufts_health_employer",
        name: "Tufts Health Employer",
        description: "i18n.collectors.tufts_health_employer.description",
        version: "0",
        website: "https://employers.tufts-health.com/nonsec/emlogon.fcc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2385151.jpg",
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
        loginUrl: "https://employers.tufts-health.com/nonsec/emlogon.fcc",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TuftsHealthEmployerCollector.CONFIG);
    }
}
