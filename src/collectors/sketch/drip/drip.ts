
import { SketchCollector } from '../../sketchCollector';

export class DripCollector extends SketchCollector {

    static CONFIG = {
        id: "drip",
        name: "Drip",
        description: "i18n.collectors.drip.description",
        version: "0",
        website: "https://www.getdrip.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22565.jpg",
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
        entryUrl: "https://www.getdrip.com/signin",
    }

    constructor() {
        super(DripCollector.CONFIG);
    }
}
