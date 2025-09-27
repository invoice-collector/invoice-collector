
import { SketchCollector } from '../../sketchCollector';

export class OntraportCollector extends SketchCollector {

    static CONFIG = {
        id: "ontraport",
        name: "Ontraport",
        description: "i18n.collectors.ontraport.description",
        version: "0",
        website: "https://app.ontraport.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9028.jpg",
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
        entryUrl: "https://app.ontraport.com/",
    }

    constructor() {
        super(OntraportCollector.CONFIG);
    }
}
