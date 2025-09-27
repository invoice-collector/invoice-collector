
import { SketchCollector } from '../../sketchCollector';

export class InfusionsoftCollector extends SketchCollector {

    static CONFIG = {
        id: "infusionsoft",
        name: "Infusionsoft",
        description: "i18n.collectors.infusionsoft.description",
        version: "0",
        website: "https://signin.infusionsoft.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8284.jpg",
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
        entryUrl: "https://signin.infusionsoft.com",
    }

    constructor() {
        super(InfusionsoftCollector.CONFIG);
    }
}
