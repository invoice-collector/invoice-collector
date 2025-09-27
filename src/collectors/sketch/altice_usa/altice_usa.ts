
import { SketchCollector } from '../../sketchCollector';

export class AlticeUsaCollector extends SketchCollector {

    static CONFIG = {
        id: "altice_usa",
        name: "Altice USA",
        description: "i18n.collectors.altice_usa.description",
        version: "0",
        website: "http://www.alticeusa.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8529.jpg",
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
        entryUrl: "http://www.alticeusa.com",
    }

    constructor() {
        super(AlticeUsaCollector.CONFIG);
    }
}
