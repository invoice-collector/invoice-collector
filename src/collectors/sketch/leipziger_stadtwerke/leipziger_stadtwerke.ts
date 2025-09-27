
import { SketchCollector } from '../../sketchCollector';

export class LeipzigerStadtwerkeCollector extends SketchCollector {

    static CONFIG = {
        id: "leipziger_stadtwerke",
        name: "Leipziger Stadtwerke",
        description: "i18n.collectors.leipziger_stadtwerke.description",
        version: "0",
        website: "https://kundenportal-stadtwerke.l.de/swlkunden-portal-frontend/postbox/11534186/contract/86412155",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/849546.jpg",
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
        entryUrl: "https://kundenportal-stadtwerke.l.de/swlkunden-portal-frontend/postbox/11534186/contract/86412155",
    }

    constructor() {
        super(LeipzigerStadtwerkeCollector.CONFIG);
    }
}
