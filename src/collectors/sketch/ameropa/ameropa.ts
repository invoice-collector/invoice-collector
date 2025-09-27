
import { SketchCollector } from '../../sketchCollector';

export class AmeropaCollector extends SketchCollector {

    static CONFIG = {
        id: "ameropa",
        name: "Ameropa",
        description: "i18n.collectors.ameropa.description",
        version: "0",
        website: "https://service.ameropa.de/kreditoren/?action=avisen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226583.jpg",
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
        entryUrl: "https://service.ameropa.de/kreditoren/?action=avisen",
    }

    constructor() {
        super(AmeropaCollector.CONFIG);
    }
}
