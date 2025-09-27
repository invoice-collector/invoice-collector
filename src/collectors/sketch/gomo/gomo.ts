
import { SketchCollector } from '../../sketchCollector';

export class GomoCollector extends SketchCollector {

    static CONFIG = {
        id: "gomo",
        name: "GoMo",
        description: "i18n.collectors.gomo.description",
        version: "0",
        website: "https://my.gomo.ie/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/555192.jpg",
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
        entryUrl: "https://my.gomo.ie/bills",
    }

    constructor() {
        super(GomoCollector.CONFIG);
    }
}
