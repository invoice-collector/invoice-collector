
import { SketchCollector } from '../../sketchCollector';

export class ChiemgauDslCollector extends SketchCollector {

    static CONFIG = {
        id: "chiemgau_dsl",
        name: "Chiemgau-DSL",
        description: "i18n.collectors.chiemgau_dsl.description",
        version: "0",
        website: "http://chiemgau-dsl.info/portal.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9601.jpg",
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
        entryUrl: "http://chiemgau-dsl.info/portal.html",
    }

    constructor() {
        super(ChiemgauDslCollector.CONFIG);
    }
}
