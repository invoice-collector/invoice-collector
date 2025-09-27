
import { SketchCollector } from '../../sketchCollector';

export class TollbirdCollector extends SketchCollector {

    static CONFIG = {
        id: "tollbird",
        name: "Tollbird",
        description: "i18n.collectors.tollbird.description",
        version: "0",
        website: "https://www.tollbird.com/travellers/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2419778.jpg",
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
        entryUrl: "https://www.tollbird.com/travellers/invoices",
    }

    constructor() {
        super(TollbirdCollector.CONFIG);
    }
}
