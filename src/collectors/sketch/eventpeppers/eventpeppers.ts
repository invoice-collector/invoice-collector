
import { SketchCollector } from '../../sketchCollector';

export class EventpeppersCollector extends SketchCollector {

    static CONFIG = {
        id: "eventpeppers",
        name: "Eventpeppers",
        description: "i18n.collectors.eventpeppers.description",
        version: "0",
        website: "https://www.eventpeppers.com/de/private-v/epp738776746/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132115.jpg",
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
        entryUrl: "https://www.eventpeppers.com/de/private-v/epp738776746/account",
    }

    constructor() {
        super(EventpeppersCollector.CONFIG);
    }
}
