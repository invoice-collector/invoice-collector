
import { SketchCollector } from '../../sketchCollector';

export class LunchrCollector extends SketchCollector {

    static CONFIG = {
        id: "lunchr",
        name: "lunchr",
        description: "i18n.collectors.lunchr.description",
        version: "0",
        website: "https://app.lunchr.co/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/162596.jpg",
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
        entryUrl: "https://app.lunchr.co/signin",
    }

    constructor() {
        super(LunchrCollector.CONFIG);
    }
}
