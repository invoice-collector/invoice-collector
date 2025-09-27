
import { SketchCollector } from '../../sketchCollector';

export class IconfinderCollector extends SketchCollector {

    static CONFIG = {
        id: "iconfinder",
        name: "Iconfinder",
        description: "i18n.collectors.iconfinder.description",
        version: "0",
        website: "https://www.iconfinder.com/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6548.jpg",
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
        entryUrl: "https://www.iconfinder.com/user/login",
    }

    constructor() {
        super(IconfinderCollector.CONFIG);
    }
}
