
import { SketchCollector } from '../../sketchCollector';

export class HubspotCollector extends SketchCollector {

    static CONFIG = {
        id: "hubspot",
        name: "HubSpot",
        description: "i18n.collectors.hubspot.description",
        version: "0",
        website: "http://www.hubspot.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6452.jpg",
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
        entryUrl: "http://www.hubspot.com",
    }

    constructor() {
        super(HubspotCollector.CONFIG);
    }
}
