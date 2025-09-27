
import { SketchCollector } from '../../sketchCollector';

export class OptimoleCollector extends SketchCollector {

    static CONFIG = {
        id: "optimole",
        name: "Optimole",
        description: "i18n.collectors.optimole.description",
        version: "0",
        website: "https://dashboard.optimole.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1232563.jpg",
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
        entryUrl: "https://dashboard.optimole.com/login/",
    }

    constructor() {
        super(OptimoleCollector.CONFIG);
    }
}
