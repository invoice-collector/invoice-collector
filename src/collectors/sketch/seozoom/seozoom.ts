
import { SketchCollector } from '../../sketchCollector';

export class SeozoomCollector extends SketchCollector {

    static CONFIG = {
        id: "seozoom",
        name: "SeoZoom",
        description: "i18n.collectors.seozoom.description",
        version: "0",
        website: "https://sz2020.seozoom.it/user/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2211139.jpg",
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
        entryUrl: "https://sz2020.seozoom.it/user/billing",
    }

    constructor() {
        super(SeozoomCollector.CONFIG);
    }
}
