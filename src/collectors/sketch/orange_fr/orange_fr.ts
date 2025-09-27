
import { SketchCollector } from '../../sketchCollector';

export class OrangeFrCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_fr",
        name: "Orange.fr",
        description: "i18n.collectors.orange_fr.description",
        version: "0",
        website: "http://www.orange.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9435.jpg",
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
        entryUrl: "http://www.orange.fr",
    }

    constructor() {
        super(OrangeFrCollector.CONFIG);
    }
}
