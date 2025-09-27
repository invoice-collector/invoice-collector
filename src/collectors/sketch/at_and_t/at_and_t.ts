
import { SketchCollector } from '../../sketchCollector';

export class AtAndTCollector extends SketchCollector {

    static CONFIG = {
        id: "at_and_t",
        name: "AT&T",
        description: "i18n.collectors.at_and_t.description",
        version: "0",
        website: "https://www.att.com/my/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8535.jpg",
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
        entryUrl: "https://www.att.com/my/#/login",
    }

    constructor() {
        super(AtAndTCollector.CONFIG);
    }
}
