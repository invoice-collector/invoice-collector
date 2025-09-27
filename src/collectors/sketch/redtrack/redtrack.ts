
import { SketchCollector } from '../../sketchCollector';

export class RedtrackCollector extends SketchCollector {

    static CONFIG = {
        id: "redtrack",
        name: "Redtrack",
        description: "i18n.collectors.redtrack.description",
        version: "0",
        website: "https://app.redtrack.io/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210951.jpg",
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
        entryUrl: "https://app.redtrack.io/payments",
    }

    constructor() {
        super(RedtrackCollector.CONFIG);
    }
}
