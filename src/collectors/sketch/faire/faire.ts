
import { SketchCollector } from '../../sketchCollector';

export class FaireCollector extends SketchCollector {

    static CONFIG = {
        id: "faire",
        name: "FAIRE",
        description: "i18n.collectors.faire.description",
        version: "0",
        website: "https://www.faire.com/?signIn=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/840145.jpg",
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
        entryUrl: "https://www.faire.com/?signIn=1",
    }

    constructor() {
        super(FaireCollector.CONFIG);
    }
}
