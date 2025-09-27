
import { SketchCollector } from '../../sketchCollector';

export class CilexCollector extends SketchCollector {

    static CONFIG = {
        id: "cilex",
        name: "Cilex",
        description: "i18n.collectors.cilex.description",
        version: "0",
        website: "https://www.cilex.org.uk/mycilex",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118091.jpg",
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
        entryUrl: "https://www.cilex.org.uk/mycilex",
    }

    constructor() {
        super(CilexCollector.CONFIG);
    }
}
