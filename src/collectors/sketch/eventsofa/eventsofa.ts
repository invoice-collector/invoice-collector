
import { SketchCollector } from '../../sketchCollector';

export class EventsofaCollector extends SketchCollector {

    static CONFIG = {
        id: "eventsofa",
        name: "eventsofa",
        description: "i18n.collectors.eventsofa.description",
        version: "0",
        website: "https://www.eventsofa.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24449.jpg",
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
        entryUrl: "https://www.eventsofa.de/login",
    }

    constructor() {
        super(EventsofaCollector.CONFIG);
    }
}
