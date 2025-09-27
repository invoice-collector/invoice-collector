
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeBrettenCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_bretten",
        name: "Stadtwerke Bretten",
        description: "i18n.collectors.stadtwerke_bretten.description",
        version: "0",
        website: "https://www.kraichgau-energie.de/kundenportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777208.jpg",
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
        entryUrl: "https://www.kraichgau-energie.de/kundenportal/",
    }

    constructor() {
        super(StadtwerkeBrettenCollector.CONFIG);
    }
}
