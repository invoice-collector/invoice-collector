
import { SketchCollector } from '../../sketchCollector';

export class TheMakeryCollector extends SketchCollector {

    static CONFIG = {
        id: "the_makery",
        name: "The Makery",
        description: "i18n.collectors.the_makery.description",
        version: "0",
        website: "https://redesign.themakery.de/workshopprovider/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161943.jpg",
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
        entryUrl: "https://redesign.themakery.de/workshopprovider/payments",
    }

    constructor() {
        super(TheMakeryCollector.CONFIG);
    }
}
