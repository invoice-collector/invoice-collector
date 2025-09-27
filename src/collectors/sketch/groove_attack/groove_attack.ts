
import { SketchCollector } from '../../sketchCollector';

export class GrooveAttackCollector extends SketchCollector {

    static CONFIG = {
        id: "groove_attack",
        name: "Groove Attack",
        description: "i18n.collectors.groove_attack.description",
        version: "0",
        website: "https://pro.grooveattack.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/187226.jpg",
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
        entryUrl: "https://pro.grooveattack.com",
    }

    constructor() {
        super(GrooveAttackCollector.CONFIG);
    }
}
