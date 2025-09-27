
import { SketchCollector } from '../../sketchCollector';

export class DelhaizeBeCollector extends SketchCollector {

    static CONFIG = {
        id: "delhaize_be",
        name: "delhaize.be",
        description: "i18n.collectors.delhaize_be.description",
        version: "0",
        website: "https://www.delhaize.be/loyalty/tickets",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779840.jpg",
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
        entryUrl: "https://www.delhaize.be/loyalty/tickets",
    }

    constructor() {
        super(DelhaizeBeCollector.CONFIG);
    }
}
