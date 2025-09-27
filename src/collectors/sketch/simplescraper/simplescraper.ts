
import { SketchCollector } from '../../sketchCollector';

export class SimplescraperCollector extends SketchCollector {

    static CONFIG = {
        id: "simplescraper",
        name: "Simplescraper",
        description: "i18n.collectors.simplescraper.description",
        version: "0",
        website: "https://simplescraper.io/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776394.jpg",
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
        entryUrl: "https://simplescraper.io/dashboard",
    }

    constructor() {
        super(SimplescraperCollector.CONFIG);
    }
}
