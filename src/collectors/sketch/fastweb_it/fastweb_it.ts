
import { SketchCollector } from '../../sketchCollector';

export class FastwebItCollector extends SketchCollector {

    static CONFIG = {
        id: "fastweb_it",
        name: "fastweb.it",
        description: "i18n.collectors.fastweb_it.description",
        version: "0",
        website: "https://fastweb.it/myfastpage/accesso/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9224.jpg",
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
        entryUrl: "https://fastweb.it/myfastpage/accesso/login/",
    }

    constructor() {
        super(FastwebItCollector.CONFIG);
    }
}
