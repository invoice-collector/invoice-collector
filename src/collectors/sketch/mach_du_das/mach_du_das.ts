
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MachDuDasCollector extends SketchCollector {

    static CONFIG = {
        id: "mach_du_das",
        name: "mach du das",
        description: "i18n.collectors.mach_du_das.description",
        version: "0",
        website: "https://www.machdudas.de/signin?redirectTo=%2Fjobs-neu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779126.jpg",
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
        loginUrl: "https://www.machdudas.de/signin?redirectTo=%2Fjobs-neu",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MachDuDasCollector.CONFIG);
    }
}
