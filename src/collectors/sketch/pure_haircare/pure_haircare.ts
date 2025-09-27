
import { SketchCollector } from '../../sketchCollector';

export class PureHaircareCollector extends SketchCollector {

    static CONFIG = {
        id: "pure_haircare",
        name: "Pure Haircare",
        description: "i18n.collectors.pure_haircare.description",
        version: "0",
        website: "https://www.purehaircare.shop/Meine-Rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1360007.jpg",
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
        entryUrl: "https://www.purehaircare.shop/Meine-Rechnungen/",
    }

    constructor() {
        super(PureHaircareCollector.CONFIG);
    }
}
