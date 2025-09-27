
import { SketchCollector } from '../../sketchCollector';

export class Listen360Collector extends SketchCollector {

    static CONFIG = {
        id: "listen360",
        name: "Listen360",
        description: "i18n.collectors.listen360.description",
        version: "0",
        website: "https://app.listen360.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842037.jpg",
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
        entryUrl: "https://app.listen360.com/users/sign_in",
    }

    constructor() {
        super(Listen360Collector.CONFIG);
    }
}
