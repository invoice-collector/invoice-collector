
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AddeventCollector extends SketchCollector {

    static CONFIG = {
        id: "addevent",
        name: "AddEvent",
        description: "i18n.collectors.addevent.description",
        version: "0",
        website: "https://www.addevent.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/527653.jpg",
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
        entryUrl: "https://www.addevent.com/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AddeventCollector.CONFIG);
    }
}
