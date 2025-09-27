
import { SketchCollector } from '../../sketchCollector';

export class EdeskCollector extends SketchCollector {

    static CONFIG = {
        id: "edesk",
        name: "edesk",
        description: "i18n.collectors.edesk.description",
        version: "0",
        website: "https://dashboard-3.edesk.com/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842141.jpg",
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
        entryUrl: "https://dashboard-3.edesk.com/payments",
    }

    constructor() {
        super(EdeskCollector.CONFIG);
    }
}
