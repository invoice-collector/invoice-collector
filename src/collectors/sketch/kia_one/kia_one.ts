
import { SketchCollector } from '../../sketchCollector';

export class KiaOneCollector extends SketchCollector {

    static CONFIG = {
        id: "kia_one",
        name: "Kia One",
        description: "i18n.collectors.kia_one.description",
        version: "0",
        website: "https://www.kdealer.com/DealerOthersReport",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593437.jpg",
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
        entryUrl: "https://www.kdealer.com/DealerOthersReport",
    }

    constructor() {
        super(KiaOneCollector.CONFIG);
    }
}
