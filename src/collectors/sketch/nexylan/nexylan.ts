
import { SketchCollector } from '../../sketchCollector';

export class NexylanCollector extends SketchCollector {

    static CONFIG = {
        id: "nexylan",
        name: "Nexylan",
        description: "i18n.collectors.nexylan.description",
        version: "0",
        website: "https://connect.nexylan.com/oauth2/authorize",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698768.jpg",
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
        entryUrl: "https://connect.nexylan.com/oauth2/authorize",
    }

    constructor() {
        super(NexylanCollector.CONFIG);
    }
}
