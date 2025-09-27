
import { SketchCollector } from '../../sketchCollector';

export class AnwCollector extends SketchCollector {

    static CONFIG = {
        id: "anw",
        name: "ANW",
        description: "i18n.collectors.anw.description",
        version: "0",
        website: "https://secure.anw.es/extranet/admin.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181460.jpg",
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
        entryUrl: "https://secure.anw.es/extranet/admin.php",
    }

    constructor() {
        super(AnwCollector.CONFIG);
    }
}
