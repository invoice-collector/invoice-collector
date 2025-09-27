
import { SketchCollector } from '../../sketchCollector';

export class HikeordersCollector extends SketchCollector {

    static CONFIG = {
        id: "hikeorders",
        name: "HikeOrders",
        description: "i18n.collectors.hikeorders.description",
        version: "0",
        website: "https://a11yenabler.hikeorders.com/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2841413.jpg",
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
        entryUrl: "https://a11yenabler.hikeorders.com/invoice/",
    }

    constructor() {
        super(HikeordersCollector.CONFIG);
    }
}
