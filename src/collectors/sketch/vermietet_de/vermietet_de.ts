
import { SketchCollector } from '../../sketchCollector';

export class VermietetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "vermietet_de",
        name: "Vermietet.de",
        description: "i18n.collectors.vermietet_de.description",
        version: "0",
        website: "https://portal.vermietet.de/shop/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777338.jpg",
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
        entryUrl: "https://portal.vermietet.de/shop/orders",
    }

    constructor() {
        super(VermietetDeCollector.CONFIG);
    }
}
