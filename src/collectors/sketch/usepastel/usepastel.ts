
import { SketchCollector } from '../../sketchCollector';

export class UsepastelCollector extends SketchCollector {

    static CONFIG = {
        id: "usepastel",
        name: "UsePastel",
        description: "i18n.collectors.usepastel.description",
        version: "0",
        website: "https://usepastel.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1423343.jpg",
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
        entryUrl: "https://usepastel.com/settings/billing",
    }

    constructor() {
        super(UsepastelCollector.CONFIG);
    }
}
