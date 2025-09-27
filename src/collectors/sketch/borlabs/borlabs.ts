
import { SketchCollector } from '../../sketchCollector';

export class BorlabsCollector extends SketchCollector {

    static CONFIG = {
        id: "borlabs",
        name: "borlabs",
        description: "i18n.collectors.borlabs.description",
        version: "0",
        website: "https://service.borlabs.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428638.jpg",
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
        entryUrl: "https://service.borlabs.io/login",
    }

    constructor() {
        super(BorlabsCollector.CONFIG);
    }
}
