
import { SketchCollector } from '../../sketchCollector';

export class InvolveMeCollector extends SketchCollector {

    static CONFIG = {
        id: "involve_me",
        name: "involve.me",
        description: "i18n.collectors.involve_me.description",
        version: "0",
        website: "https://app.involve.me/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/782534.jpg",
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
        entryUrl: "https://app.involve.me/billing",
    }

    constructor() {
        super(InvolveMeCollector.CONFIG);
    }
}
