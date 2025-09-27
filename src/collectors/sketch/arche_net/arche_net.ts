
import { SketchCollector } from '../../sketchCollector';

export class ArcheNetCollector extends SketchCollector {

    static CONFIG = {
        id: "arche_net",
        name: "Arche.Net",
        description: "i18n.collectors.arche_net.description",
        version: "0",
        website: "http://www.arche.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9015.jpg",
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
        entryUrl: "http://www.arche.net",
    }

    constructor() {
        super(ArcheNetCollector.CONFIG);
    }
}
