
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GympassCollector extends SketchCollector {

    static CONFIG = {
        id: "gympass",
        name: "Gympass",
        description: "i18n.collectors.gympass.description",
        version: "0",
        website: "https://partners.gympass.com/payslips",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1329435.jpg",
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
        entryUrl: "https://partners.gympass.com/payslips",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GympassCollector.CONFIG);
    }
}
