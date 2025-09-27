
import { SketchCollector } from '../../sketchCollector';

export class GetsitecontrolCollector extends SketchCollector {

    static CONFIG = {
        id: "getsitecontrol",
        name: "GetSiteControl",
        description: "i18n.collectors.getsitecontrol.description",
        version: "0",
        website: "https://getsitecontrol.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29806.jpg",
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
        entryUrl: "https://getsitecontrol.com/login/",
    }

    constructor() {
        super(GetsitecontrolCollector.CONFIG);
    }
}
