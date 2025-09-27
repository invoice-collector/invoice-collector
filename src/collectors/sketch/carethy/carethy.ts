
import { SketchCollector } from '../../sketchCollector';

export class CarethyCollector extends SketchCollector {

    static CONFIG = {
        id: "carethy",
        name: "carethy",
        description: "i18n.collectors.carethy.description",
        version: "0",
        website: "https://www.carethy.de/user?tab=orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197806.jpg",
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
        entryUrl: "https://www.carethy.de/user?tab=orders",
    }

    constructor() {
        super(CarethyCollector.CONFIG);
    }
}
