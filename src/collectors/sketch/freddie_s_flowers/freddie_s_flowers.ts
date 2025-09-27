
import { SketchCollector } from '../../sketchCollector';

export class FreddieSFlowersCollector extends SketchCollector {

    static CONFIG = {
        id: "freddie_s_flowers",
        name: "Freddie's Flowers",
        description: "i18n.collectors.freddie_s_flowers.description",
        version: "0",
        website: "https://www.freddiesflowers.de/konto/mein-konto-verwalten",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034215.jpg",
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
        entryUrl: "https://www.freddiesflowers.de/konto/mein-konto-verwalten",
    }

    constructor() {
        super(FreddieSFlowersCollector.CONFIG);
    }
}
