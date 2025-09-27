
import { SketchCollector } from '../../sketchCollector';

export class UncadeauComCollector extends SketchCollector {

    static CONFIG = {
        id: "uncadeau_com",
        name: "UnCadeau.com",
        description: "i18n.collectors.uncadeau_com.description",
        version: "0",
        website: "https://www.uncadeau.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123518.jpg",
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
        entryUrl: "https://www.uncadeau.com/login",
    }

    constructor() {
        super(UncadeauComCollector.CONFIG);
    }
}
