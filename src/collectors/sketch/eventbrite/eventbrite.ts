
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EventbriteCollector extends SketchCollector {

    static CONFIG = {
        id: "eventbrite",
        name: "eventbrite",
        description: "i18n.collectors.eventbrite.description",
        version: "0",
        website: "https://www.eventbrite.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16102.jpg",
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
        entryUrl: "https://www.eventbrite.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EventbriteCollector.CONFIG);
    }
}
