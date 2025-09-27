
import { SketchCollector } from '../../sketchCollector';

export class HarvardBusinessPublishingCollector extends SketchCollector {

    static CONFIG = {
        id: "harvard_business_publishing",
        name: "Harvard Business Publishing",
        description: "i18n.collectors.harvard_business_publishing.description",
        version: "0",
        website: "https://hbsp.harvard.edu/home/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079811.jpg",
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
        entryUrl: "https://hbsp.harvard.edu/home/",
    }

    constructor() {
        super(HarvardBusinessPublishingCollector.CONFIG);
    }
}
