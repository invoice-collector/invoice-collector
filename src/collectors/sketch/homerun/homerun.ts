
import { SketchCollector } from '../../sketchCollector';

export class HomerunCollector extends SketchCollector {

    static CONFIG = {
        id: "homerun",
        name: "Homerun",
        description: "i18n.collectors.homerun.description",
        version: "0",
        website: "https://admin.homerun.co/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68985.jpg",
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
        entryUrl: "https://admin.homerun.co/settings/billing",
    }

    constructor() {
        super(HomerunCollector.CONFIG);
    }
}
