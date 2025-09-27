
import { SketchCollector } from '../../sketchCollector';

export class HartjeEoswebCollector extends SketchCollector {

    static CONFIG = {
        id: "hartje_eosweb",
        name: "HARTJE EOSweb",
        description: "i18n.collectors.hartje_eosweb.description",
        version: "0",
        website: "http://www.eosweb.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36415.jpg",
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
        entryUrl: "http://www.eosweb.de",
    }

    constructor() {
        super(HartjeEoswebCollector.CONFIG);
    }
}
