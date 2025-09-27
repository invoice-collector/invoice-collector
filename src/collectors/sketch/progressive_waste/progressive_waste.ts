
import { SketchCollector } from '../../sketchCollector';

export class ProgressiveWasteCollector extends SketchCollector {

    static CONFIG = {
        id: "progressive_waste",
        name: "Progressive Waste",
        description: "i18n.collectors.progressive_waste.description",
        version: "0",
        website: "https://secure3.i-doxs.net/iesi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87735.jpg",
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
        entryUrl: "https://secure3.i-doxs.net/iesi",
    }

    constructor() {
        super(ProgressiveWasteCollector.CONFIG);
    }
}
