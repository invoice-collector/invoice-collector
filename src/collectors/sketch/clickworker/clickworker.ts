
import { SketchCollector } from '../../sketchCollector';

export class ClickworkerCollector extends SketchCollector {

    static CONFIG = {
        id: "clickworker",
        name: "clickworker",
        description: "i18n.collectors.clickworker.description",
        version: "0",
        website: "https://cas.clickworker.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/488.jpg",
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
        entryUrl: "https://cas.clickworker.com/login",
    }

    constructor() {
        super(ClickworkerCollector.CONFIG);
    }
}
