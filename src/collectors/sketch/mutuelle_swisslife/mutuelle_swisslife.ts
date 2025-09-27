
import { SketchCollector } from '../../sketchCollector';

export class MutuelleSwisslifeCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_swisslife",
        name: "Mutuelle Swisslife",
        description: "i18n.collectors.mutuelle_swisslife.description",
        version: "0",
        website: "https://myswisslife.fr/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130817.jpg",
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
        entryUrl: "https://myswisslife.fr/#/login",
    }

    constructor() {
        super(MutuelleSwisslifeCollector.CONFIG);
    }
}
