
import { SketchCollector } from '../../sketchCollector';

export class MtkomDeCollector extends SketchCollector {

    static CONFIG = {
        id: "mtkom_de",
        name: "MTKom.de",
        description: "i18n.collectors.mtkom_de.description",
        version: "0",
        website: "https://www.titan-networks.de/cic/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9263.jpg",
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
        entryUrl: "https://www.titan-networks.de/cic/",
    }

    constructor() {
        super(MtkomDeCollector.CONFIG);
    }
}
