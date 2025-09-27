
import { SketchCollector } from '../../sketchCollector';

export class CampfireCollector extends SketchCollector {

    static CONFIG = {
        id: "campfire",
        name: "Campfire",
        description: "i18n.collectors.campfire.description",
        version: "0",
        website: "https://launchpad.37signals.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8683.jpg",
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
        entryUrl: "https://launchpad.37signals.com/signin",
    }

    constructor() {
        super(CampfireCollector.CONFIG);
    }
}
