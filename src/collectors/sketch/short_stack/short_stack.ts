
import { SketchCollector } from '../../sketchCollector';

export class ShortStackCollector extends SketchCollector {

    static CONFIG = {
        id: "short_stack",
        name: "Short Stack",
        description: "i18n.collectors.short_stack.description",
        version: "0",
        website: "https://app2.shortstackapp.com/manage/#/account?tab=statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185140.jpg",
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
        entryUrl: "https://app2.shortstackapp.com/manage/#/account?tab=statements",
    }

    constructor() {
        super(ShortStackCollector.CONFIG);
    }
}
