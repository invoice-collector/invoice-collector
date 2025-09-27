
import { SketchCollector } from '../../sketchCollector';

export class BambulabCollector extends SketchCollector {

    static CONFIG = {
        id: "bambulab",
        name: "Bambulab",
        description: "i18n.collectors.bambulab.description",
        version: "0",
        website: "https://eu.store.bambulab.com/de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513949.jpg",
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
        entryUrl: "https://eu.store.bambulab.com/de/account",
    }

    constructor() {
        super(BambulabCollector.CONFIG);
    }
}
