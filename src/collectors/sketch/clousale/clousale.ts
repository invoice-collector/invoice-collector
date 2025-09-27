
import { SketchCollector } from '../../sketchCollector';

export class ClousaleCollector extends SketchCollector {

    static CONFIG = {
        id: "clousale",
        name: "ClouSale",
        description: "i18n.collectors.clousale.description",
        version: "0",
        website: "https://www.clousale.com/central/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10802.jpg",
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
        entryUrl: "https://www.clousale.com/central/settings",
    }

    constructor() {
        super(ClousaleCollector.CONFIG);
    }
}
