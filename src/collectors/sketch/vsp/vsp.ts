
import { SketchCollector } from '../../sketchCollector';

export class VspCollector extends SketchCollector {

    static CONFIG = {
        id: "vsp",
        name: "VSP",
        description: "i18n.collectors.vsp.description",
        version: "0",
        website: "http://www.vsp.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8817.jpg",
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
        entryUrl: "http://www.vsp.com",
    }

    constructor() {
        super(VspCollector.CONFIG);
    }
}
