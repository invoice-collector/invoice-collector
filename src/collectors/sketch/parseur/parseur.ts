
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ParseurCollector extends SketchCollector {

    static CONFIG = {
        id: "parseur",
        name: "Parseur",
        description: "i18n.collectors.parseur.description",
        version: "0",
        website: "https://app.parseur.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/552470.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://app.parseur.com/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParseurCollector.CONFIG);
    }
}
