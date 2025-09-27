
import { SketchCollector } from '../../sketchCollector';

export class FkAutomotiveCollector extends SketchCollector {

    static CONFIG = {
        id: "fk_automotive",
        name: "FK Automotive",
        description: "i18n.collectors.fk_automotive.description",
        version: "0",
        website: "https://www.fk-haendler.de/bestellhistorie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1416077.jpg",
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
        entryUrl: "https://www.fk-haendler.de/bestellhistorie/",
    }

    constructor() {
        super(FkAutomotiveCollector.CONFIG);
    }
}
