
import { SketchCollector } from '../../sketchCollector';

export class MyfontsCollector extends SketchCollector {

    static CONFIG = {
        id: "myfonts",
        name: "MyFonts",
        description: "i18n.collectors.myfonts.description",
        version: "0",
        website: "https://www.myfonts.com/secure/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6026.jpg",
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
        entryUrl: "https://www.myfonts.com/secure/login/",
    }

    constructor() {
        super(MyfontsCollector.CONFIG);
    }
}
