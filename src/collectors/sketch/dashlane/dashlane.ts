
import { SketchCollector } from '../../sketchCollector';

export class DashlaneCollector extends SketchCollector {

    static CONFIG = {
        id: "dashlane",
        name: "dashlane",
        description: "i18n.collectors.dashlane.description",
        version: "0",
        website: "https://www.dashlane.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26322.jpg",
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
        entryUrl: "https://www.dashlane.com",
    }

    constructor() {
        super(DashlaneCollector.CONFIG);
    }
}
