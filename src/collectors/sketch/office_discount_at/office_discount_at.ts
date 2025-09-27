
import { SketchCollector } from '../../sketchCollector';

export class OfficeDiscountAtCollector extends SketchCollector {

    static CONFIG = {
        id: "office_discount_at",
        name: "office-discount.at",
        description: "i18n.collectors.office_discount_at.description",
        version: "0",
        website: "https://www.office-discount.at/UgsLoginView",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10089.jpg",
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
        entryUrl: "https://www.office-discount.at/UgsLoginView",
    }

    constructor() {
        super(OfficeDiscountAtCollector.CONFIG);
    }
}
