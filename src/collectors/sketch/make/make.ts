
import { SketchCollector } from '../../sketchCollector';

export class MakeCollector extends SketchCollector {

    static CONFIG = {
        id: "make",
        name: "Make",
        description: "i18n.collectors.make.description",
        version: "0",
        website: "https://www.make.com/en/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1193635.jpg",
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
        entryUrl: "https://www.make.com/en/login",
    }

    constructor() {
        super(MakeCollector.CONFIG);
    }
}
