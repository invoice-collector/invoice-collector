
import { SketchCollector } from '../../sketchCollector';

export class FishbowlmeetingCollector extends SketchCollector {

    static CONFIG = {
        id: "fishbowlmeeting",
        name: "Fishbowlmeeting",
        description: "i18n.collectors.fishbowlmeeting.description",
        version: "0",
        website: "https://fishbowlmeetings.com/billing#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745224.jpg",
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
        entryUrl: "https://fishbowlmeetings.com/billing#/invoices",
    }

    constructor() {
        super(FishbowlmeetingCollector.CONFIG);
    }
}
