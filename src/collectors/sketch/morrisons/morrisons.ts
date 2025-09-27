
import { SketchCollector } from '../../sketchCollector';

export class MorrisonsCollector extends SketchCollector {

    static CONFIG = {
        id: "morrisons",
        name: "Morrisons",
        description: "i18n.collectors.morrisons.description",
        version: "0",
        website: "https://groceries.morrisons.com/webshop/login.go?from=header",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41854.jpg",
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
        entryUrl: "https://groceries.morrisons.com/webshop/login.go?from=header",
    }

    constructor() {
        super(MorrisonsCollector.CONFIG);
    }
}
