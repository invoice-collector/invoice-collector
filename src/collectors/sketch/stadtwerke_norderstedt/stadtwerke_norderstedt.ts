
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeNorderstedtCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_norderstedt",
        name: "Stadtwerke Norderstedt",
        description: "i18n.collectors.stadtwerke_norderstedt.description",
        version: "0",
        website: "https://stadtwerke-norderstedt.ivurz.de/powercommerce/nor/fo/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66161.jpg",
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
        entryUrl: "https://stadtwerke-norderstedt.ivurz.de/powercommerce/nor/fo/portal/",
    }

    constructor() {
        super(StadtwerkeNorderstedtCollector.CONFIG);
    }
}
