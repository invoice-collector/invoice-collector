
import { SketchCollector } from '../../sketchCollector';

export class NaturtreuCollector extends SketchCollector {

    static CONFIG = {
        id: "naturtreu",
        name: "Naturtreu",
        description: "i18n.collectors.naturtreu.description",
        version: "0",
        website: "https://naturtreu.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4491754.jpg",
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
        entryUrl: "https://naturtreu.de/account",
    }

    constructor() {
        super(NaturtreuCollector.CONFIG);
    }
}
