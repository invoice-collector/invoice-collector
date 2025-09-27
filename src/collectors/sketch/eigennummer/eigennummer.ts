
import { SketchCollector } from '../../sketchCollector';

export class EigennummerCollector extends SketchCollector {

    static CONFIG = {
        id: "eigennummer",
        name: "EigenNummer",
        description: "i18n.collectors.eigennummer.description",
        version: "0",
        website: "https://login.eigennummer.nl/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206493.jpg",
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
        entryUrl: "https://login.eigennummer.nl/user/login",
    }

    constructor() {
        super(EigennummerCollector.CONFIG);
    }
}
