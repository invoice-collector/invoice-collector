
import { SketchCollector } from '../../sketchCollector';

export class SimetraCollector extends SketchCollector {

    static CONFIG = {
        id: "simetra",
        name: "Simetra",
        description: "i18n.collectors.simetra.description",
        version: "0",
        website: "https://portail.simetra.fr/PortailBayonne",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693549.jpg",
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
        entryUrl: "https://portail.simetra.fr/PortailBayonne",
    }

    constructor() {
        super(SimetraCollector.CONFIG);
    }
}
