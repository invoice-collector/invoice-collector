
import { SketchCollector } from '../../sketchCollector';

export class VattenfallOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_online",
        name: "Vattenfall Online",
        description: "i18n.collectors.vattenfall_online.description",
        version: "0",
        website: "https://online.vattenfall.de/dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3025442.jpg",
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
        entryUrl: "https://online.vattenfall.de/dokumente",
    }

    constructor() {
        super(VattenfallOnlineCollector.CONFIG);
    }
}
