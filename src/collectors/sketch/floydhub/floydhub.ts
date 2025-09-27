
import { SketchCollector } from '../../sketchCollector';

export class FloydhubCollector extends SketchCollector {

    static CONFIG = {
        id: "floydhub",
        name: "Floydhub",
        description: "i18n.collectors.floydhub.description",
        version: "0",
        website: "https://www.floydhub.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126838.jpg",
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
        entryUrl: "https://www.floydhub.com/settings/billing",
    }

    constructor() {
        super(FloydhubCollector.CONFIG);
    }
}
