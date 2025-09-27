
import { SketchCollector } from '../../sketchCollector';

export class GearhostCollector extends SketchCollector {

    static CONFIG = {
        id: "gearhost",
        name: "GearHost",
        description: "i18n.collectors.gearhost.description",
        version: "0",
        website: "https://my.gearhost.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/823874.jpg",
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
        entryUrl: "https://my.gearhost.com/account/login",
    }

    constructor() {
        super(GearhostCollector.CONFIG);
    }
}
