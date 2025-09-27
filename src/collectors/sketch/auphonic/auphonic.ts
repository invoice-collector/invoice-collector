
import { SketchCollector } from '../../sketchCollector';

export class AuphonicCollector extends SketchCollector {

    static CONFIG = {
        id: "auphonic",
        name: "auphonic",
        description: "i18n.collectors.auphonic.description",
        version: "0",
        website: "https://auphonic.com/accounts/invoice_list/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54360.jpg",
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
        entryUrl: "https://auphonic.com/accounts/invoice_list/",
    }

    constructor() {
        super(AuphonicCollector.CONFIG);
    }
}
