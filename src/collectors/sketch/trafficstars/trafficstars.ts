
import { SketchCollector } from '../../sketchCollector';

export class TrafficstarsCollector extends SketchCollector {

    static CONFIG = {
        id: "trafficstars",
        name: "TrafficStars",
        description: "i18n.collectors.trafficstars.description",
        version: "0",
        website: "https://admin.trafficstars.com/advertisers/accounting/show/70270.pdf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119882.jpg",
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
        entryUrl: "https://admin.trafficstars.com/advertisers/accounting/show/70270.pdf",
    }

    constructor() {
        super(TrafficstarsCollector.CONFIG);
    }
}
