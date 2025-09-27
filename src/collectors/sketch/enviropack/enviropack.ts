
import { SketchCollector } from '../../sketchCollector';

export class EnviropackCollector extends SketchCollector {

    static CONFIG = {
        id: "enviropack",
        name: "enviropack",
        description: "i18n.collectors.enviropack.description",
        version: "0",
        website: "https://www.enviropack.org.uk/user?current=node",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41782.jpg",
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
        entryUrl: "https://www.enviropack.org.uk/user?current=node",
    }

    constructor() {
        super(EnviropackCollector.CONFIG);
    }
}
