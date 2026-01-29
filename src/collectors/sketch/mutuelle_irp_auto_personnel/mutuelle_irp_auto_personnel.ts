
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleIrpAutoPersonnelCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_irp_auto_personnel",
        name: "Mutuelle IRP-Auto - Personnel",
        description: "i18n.collectors.mutuelle_irp_auto_personnel.description",
        version: "0",
        website: "https://www.irp-auto.com/acces-mon-compte-personnel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129078.jpg",
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
        loginUrl: "https://www.irp-auto.com/acces-mon-compte-personnel",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleIrpAutoPersonnelCollector.CONFIG);
    }
}
