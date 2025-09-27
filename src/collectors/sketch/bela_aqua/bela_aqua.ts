
import { SketchCollector } from '../../sketchCollector';

export class BelaAquaCollector extends SketchCollector {

    static CONFIG = {
        id: "bela_aqua",
        name: "BELA AQUA",
        description: "i18n.collectors.bela_aqua.description",
        version: "0",
        website: "https://www.bela-aqua.de/web/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035281.jpg",
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
        entryUrl: "https://www.bela-aqua.de/web/login",
    }

    constructor() {
        super(BelaAquaCollector.CONFIG);
    }
}
