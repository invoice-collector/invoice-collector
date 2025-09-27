
import { SketchCollector } from '../../sketchCollector';

export class UriageCollector extends SketchCollector {

    static CONFIG = {
        id: "uriage",
        name: "Uriage",
        description: "i18n.collectors.uriage.description",
        version: "0",
        website: "https://www.uriage.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/501525.jpg",
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
        entryUrl: "https://www.uriage.fr/login",
    }

    constructor() {
        super(UriageCollector.CONFIG);
    }
}
