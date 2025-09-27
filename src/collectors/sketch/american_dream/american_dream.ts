
import { SketchCollector } from '../../sketchCollector';

export class AmericanDreamCollector extends SketchCollector {

    static CONFIG = {
        id: "american_dream",
        name: "American Dream",
        description: "i18n.collectors.american_dream.description",
        version: "0",
        website: "https://www.americandream.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399194.jpg",
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
        entryUrl: "https://www.americandream.de/login",
    }

    constructor() {
        super(AmericanDreamCollector.CONFIG);
    }
}
