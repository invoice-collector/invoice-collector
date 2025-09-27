
import { SketchCollector } from '../../sketchCollector';

export class RestdbIoCollector extends SketchCollector {

    static CONFIG = {
        id: "restdb_io",
        name: "restdb.io",
        description: "i18n.collectors.restdb_io.description",
        version: "0",
        website: "https://restdb.io/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32962.jpg",
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
        entryUrl: "https://restdb.io/login/",
    }

    constructor() {
        super(RestdbIoCollector.CONFIG);
    }
}
