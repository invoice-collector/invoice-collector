
import { SketchCollector } from '../../sketchCollector';

export class SubconetCollector extends SketchCollector {

    static CONFIG = {
        id: "subconet",
        name: "Subconet",
        description: "i18n.collectors.subconet.description",
        version: "0",
        website: "https://www.subconet.nl/subconet/mijn-subconet/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33382.jpg",
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
        entryUrl: "https://www.subconet.nl/subconet/mijn-subconet/",
    }

    constructor() {
        super(SubconetCollector.CONFIG);
    }
}
