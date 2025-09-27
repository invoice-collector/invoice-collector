
import { SketchCollector } from '../../sketchCollector';

export class MapslyCollector extends SketchCollector {

    static CONFIG = {
        id: "mapsly",
        name: "Mapsly",
        description: "i18n.collectors.mapsly.description",
        version: "0",
        website: "https://app.mapsly.com/admin/account/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1202039.jpg",
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
        entryUrl: "https://app.mapsly.com/admin/account/billing/",
    }

    constructor() {
        super(MapslyCollector.CONFIG);
    }
}
