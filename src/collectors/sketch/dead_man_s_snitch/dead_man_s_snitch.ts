
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeadManSSnitchCollector extends SketchCollector {

    static CONFIG = {
        id: "dead_man_s_snitch",
        name: "Dead Man\'s Snitch",
        description: "i18n.collectors.dead_man_s_snitch.description",
        version: "0",
        website: "http://www.deadmanssnitch.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24114.jpg",
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
        entryUrl: "http://www.deadmanssnitch.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeadManSSnitchCollector.CONFIG);
    }
}
