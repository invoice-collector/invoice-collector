
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AutoMotorSportCollector extends SketchCollector {

    static CONFIG = {
        id: "auto_motor_sport",
        name: "Auto-Motor-Sport",
        description: "i18n.collectors.auto_motor_sport.description",
        version: "0",
        website: "https://www.auto-motor-und-sport.de/meine-abonnements/?plenigoSelfService=INVOICE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2189598.jpg",
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
        entryUrl: "https://www.auto-motor-und-sport.de/meine-abonnements/?plenigoSelfService=INVOICE",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AutoMotorSportCollector.CONFIG);
    }
}
