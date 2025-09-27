
import { SketchCollector } from '../../sketchCollector';

export class PluralsightCollector extends SketchCollector {

    static CONFIG = {
        id: "pluralsight",
        name: "Pluralsight",
        description: "i18n.collectors.pluralsight.description",
        version: "0",
        website: "https://app.pluralsight.com/id",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34942.jpg",
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
        entryUrl: "https://app.pluralsight.com/id",
    }

    constructor() {
        super(PluralsightCollector.CONFIG);
    }
}
