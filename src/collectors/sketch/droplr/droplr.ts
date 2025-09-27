
import { SketchCollector } from '../../sketchCollector';

export class DroplrCollector extends SketchCollector {

    static CONFIG = {
        id: "droplr",
        name: "Droplr",
        description: "i18n.collectors.droplr.description",
        version: "0",
        website: "https://auth.droplr.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1193925.jpg",
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
        entryUrl: "https://auth.droplr.com/login/",
    }

    constructor() {
        super(DroplrCollector.CONFIG);
    }
}
