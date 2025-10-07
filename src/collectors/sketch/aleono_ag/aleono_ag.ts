
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AleonoAgCollector extends SketchCollector {

    static CONFIG = {
        id: "aleono_ag",
        name: "Aleono AG",
        description: "i18n.collectors.aleono_ag.description",
        version: "0",
        website: "https://www.aleno.me/de/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1216309.jpg",
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
        entryUrl: "https://www.aleno.me/de/sign-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AleonoAgCollector.CONFIG);
    }
}
