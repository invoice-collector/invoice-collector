
import { SketchCollector } from '../../sketchCollector';

export class MysimpleshowCollector extends SketchCollector {

    static CONFIG = {
        id: "mysimpleshow",
        name: "mysimpleshow",
        description: "i18n.collectors.mysimpleshow.description",
        version: "0",
        website: "http://www.mysimpleshow.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91364.jpg",
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
        entryUrl: "http://www.mysimpleshow.com",
    }

    constructor() {
        super(MysimpleshowCollector.CONFIG);
    }
}
