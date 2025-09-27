
import { SketchCollector } from '../../sketchCollector';

export class BarbecueDirectCollector extends SketchCollector {

    static CONFIG = {
        id: "barbecue_direct",
        name: "Barbecue-Direct",
        description: "i18n.collectors.barbecue_direct.description",
        version: "0",
        website: "https://www.webdistrib.com/barbecue-direct/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115994.jpg",
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
        entryUrl: "https://www.webdistrib.com/barbecue-direct/",
    }

    constructor() {
        super(BarbecueDirectCollector.CONFIG);
    }
}
