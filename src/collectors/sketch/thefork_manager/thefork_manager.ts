
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TheforkManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "thefork_manager",
        name: "TheFork Manager",
        description: "i18n.collectors.thefork_manager.description",
        version: "0",
        website: "https://manager.thefork.com/fr/booking",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479214.jpg",
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
        entryUrl: "https://manager.thefork.com/fr/booking",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheforkManagerCollector.CONFIG);
    }
}
