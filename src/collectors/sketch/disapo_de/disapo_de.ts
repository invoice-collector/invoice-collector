
import { SketchCollector } from '../../sketchCollector';

export class DisapoDeCollector extends SketchCollector {

    static CONFIG = {
        id: "disapo_de",
        name: "disapo.de",
        description: "i18n.collectors.disapo_de.description",
        version: "0",
        website: "https://www.disapo.de/myshop/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1217596.jpg",
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
        entryUrl: "https://www.disapo.de/myshop/dashboard",
    }

    constructor() {
        super(DisapoDeCollector.CONFIG);
    }
}
