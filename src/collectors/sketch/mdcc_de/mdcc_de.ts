
import { SketchCollector } from '../../sketchCollector';

export class MdccDeCollector extends SketchCollector {

    static CONFIG = {
        id: "mdcc_de",
        name: "MDCC.de",
        description: "i18n.collectors.mdcc_de.description",
        version: "0",
        website: "https://service.mdcc.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9425.jpg",
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
        entryUrl: "https://service.mdcc.de/login",
    }

    constructor() {
        super(MdccDeCollector.CONFIG);
    }
}
