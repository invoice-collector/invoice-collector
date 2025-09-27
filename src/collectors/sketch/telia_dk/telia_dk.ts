
import { SketchCollector } from '../../sketchCollector';

export class TeliaDkCollector extends SketchCollector {

    static CONFIG = {
        id: "telia_dk",
        name: "Telia.dk",
        description: "i18n.collectors.telia_dk.description",
        version: "0",
        website: "https://www.telia.dk/mit-telia/privat/log-ind",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9565.jpg",
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
        entryUrl: "https://www.telia.dk/mit-telia/privat/log-ind",
    }

    constructor() {
        super(TeliaDkCollector.CONFIG);
    }
}
