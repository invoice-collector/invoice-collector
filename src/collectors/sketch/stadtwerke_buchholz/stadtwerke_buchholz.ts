
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeBuchholzCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_buchholz",
        name: "Stadtwerke Buchholz",
        description: "i18n.collectors.stadtwerke_buchholz.description",
        version: "0",
        website: "https://portal.buchholz-stadtwerke.de/powercommerce/ivu/fo/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/429288.jpg",
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
        entryUrl: "https://portal.buchholz-stadtwerke.de/powercommerce/ivu/fo/portal/",
    }

    constructor() {
        super(StadtwerkeBuchholzCollector.CONFIG);
    }
}
