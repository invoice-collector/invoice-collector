
import { SketchCollector } from '../../sketchCollector';

export class OfficeDiscountDeCollector extends SketchCollector {

    static CONFIG = {
        id: "office_discount_de",
        name: "office-discount.de",
        description: "i18n.collectors.office_discount_de.description",
        version: "0",
        website: "https://www.office-discount.de/UgsLoginView",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9151.jpg",
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
        entryUrl: "https://www.office-discount.de/UgsLoginView",
    }

    constructor() {
        super(OfficeDiscountDeCollector.CONFIG);
    }
}
