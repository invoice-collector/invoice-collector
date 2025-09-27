
import { SketchCollector } from '../../sketchCollector';

export class RentilaCollector extends SketchCollector {

    static CONFIG = {
        id: "rentila",
        name: "RENTILA",
        description: "i18n.collectors.rentila.description",
        version: "0",
        website: "https://www.rentila.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1098162.jpg",
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
        entryUrl: "https://www.rentila.com/login",
    }

    constructor() {
        super(RentilaCollector.CONFIG);
    }
}
