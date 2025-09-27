
import { SketchCollector } from '../../sketchCollector';

export class SelekktCollector extends SketchCollector {

    static CONFIG = {
        id: "selekkt",
        name: "selekkt",
        description: "i18n.collectors.selekkt.description",
        version: "0",
        website: "https://selekkt.com/selekkt_dropship/vendor/statements/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172788.jpg",
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
        entryUrl: "https://selekkt.com/selekkt_dropship/vendor/statements/",
    }

    constructor() {
        super(SelekktCollector.CONFIG);
    }
}
