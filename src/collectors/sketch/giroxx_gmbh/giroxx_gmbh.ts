
import { SketchCollector } from '../../sketchCollector';

export class GiroxxGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "giroxx_gmbh",
        name: "giroxx GmbH",
        description: "i18n.collectors.giroxx_gmbh.description",
        version: "0",
        website: "https://giroxx.de/kundenkonto-auftragsarchiv.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138731.jpg",
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
        entryUrl: "https://giroxx.de/kundenkonto-auftragsarchiv.html",
    }

    constructor() {
        super(GiroxxGmbhCollector.CONFIG);
    }
}
