
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HeepsyCollector extends SketchCollector {

    static CONFIG = {
        id: "heepsy",
        name: "Heepsy",
        description: "i18n.collectors.heepsy.description",
        version: "0",
        website: "https://app.heepsy.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079869.jpg",
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
        entryUrl: "https://app.heepsy.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HeepsyCollector.CONFIG);
    }
}
