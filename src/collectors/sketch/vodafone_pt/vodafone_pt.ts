
import { SketchCollector } from '../../sketchCollector';

export class VodafonePtCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_pt",
        name: "Vodafone.pt",
        description: "i18n.collectors.vodafone_pt.description",
        version: "0",
        website: "https://www.vodafone.pt/main/particulares#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8702.jpg",
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
        entryUrl: "https://www.vodafone.pt/main/particulares#",
    }

    constructor() {
        super(VodafonePtCollector.CONFIG);
    }
}
