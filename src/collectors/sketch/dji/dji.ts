
import { SketchCollector } from '../../sketchCollector';

export class DjiCollector extends SketchCollector {

    static CONFIG = {
        id: "dji",
        name: "DJI",
        description: "i18n.collectors.dji.description",
        version: "0",
        website: "https://my.dji.com/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170812.jpg",
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
        entryUrl: "https://my.dji.com/orders",
    }

    constructor() {
        super(DjiCollector.CONFIG);
    }
}
