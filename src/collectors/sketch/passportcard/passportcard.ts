
import { SketchCollector } from '../../sketchCollector';

export class PassportcardCollector extends SketchCollector {

    static CONFIG = {
        id: "passportcard",
        name: "Passportcard",
        description: "i18n.collectors.passportcard.description",
        version: "0",
        website: "https://mein.passportcard.de/site/plan/expenses",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1747436.jpg",
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
        entryUrl: "https://mein.passportcard.de/site/plan/expenses",
    }

    constructor() {
        super(PassportcardCollector.CONFIG);
    }
}
