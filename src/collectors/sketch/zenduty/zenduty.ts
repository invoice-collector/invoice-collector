
import { SketchCollector } from '../../sketchCollector';

export class ZendutyCollector extends SketchCollector {

    static CONFIG = {
        id: "zenduty",
        name: "Zenduty",
        description: "i18n.collectors.zenduty.description",
        version: "0",
        website: "https://www.zenduty.com/dashboard/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779015.jpg",
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
        entryUrl: "https://www.zenduty.com/dashboard/account/",
    }

    constructor() {
        super(ZendutyCollector.CONFIG);
    }
}
