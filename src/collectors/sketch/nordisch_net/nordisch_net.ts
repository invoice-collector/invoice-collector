
import { SketchCollector } from '../../sketchCollector';

export class NordischNetCollector extends SketchCollector {

    static CONFIG = {
        id: "nordisch_net",
        name: "Nordisch net",
        description: "i18n.collectors.nordisch_net.description",
        version: "0",
        website: "https://portal.gvg-glasfaser.de/path/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210564.jpg",
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
        entryUrl: "https://portal.gvg-glasfaser.de/path/portal/",
    }

    constructor() {
        super(NordischNetCollector.CONFIG);
    }
}
