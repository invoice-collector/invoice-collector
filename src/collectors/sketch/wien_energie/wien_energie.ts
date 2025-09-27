
import { SketchCollector } from '../../sketchCollector';

export class WienEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "wien_energie",
        name: "Wien Energie",
        description: "i18n.collectors.wien_energie.description",
        version: "0",
        website: "https://service.wienenergie.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3499.jpg",
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
        entryUrl: "https://service.wienenergie.at",
    }

    constructor() {
        super(WienEnergieCollector.CONFIG);
    }
}
