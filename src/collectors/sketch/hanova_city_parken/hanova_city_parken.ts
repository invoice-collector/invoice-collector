
import { SketchCollector } from '../../sketchCollector';

export class HanovaCityParkenCollector extends SketchCollector {

    static CONFIG = {
        id: "hanova_city_parken",
        name: "hanova city parken",
        description: "i18n.collectors.hanova_city_parken.description",
        version: "0",
        website: "https://cityparken.hanova.de/accountcontractbillings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1241526.jpg",
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
        entryUrl: "https://cityparken.hanova.de/accountcontractbillings",
    }

    constructor() {
        super(HanovaCityParkenCollector.CONFIG);
    }
}
