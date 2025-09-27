
import { SketchCollector } from '../../sketchCollector';

export class ThuringerNetkomCollector extends SketchCollector {

    static CONFIG = {
        id: "thuringer_netkom",
        name: "Thuringer Netkom",
        description: "i18n.collectors.thuringer_netkom.description",
        version: "0",
        website: "https://dsl.netkom.de/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9217.jpg",
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
        entryUrl: "https://dsl.netkom.de/portal/",
    }

    constructor() {
        super(ThuringerNetkomCollector.CONFIG);
    }
}
