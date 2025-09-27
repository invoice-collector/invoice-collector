
import { SketchCollector } from '../../sketchCollector';

export class SeatableCollector extends SketchCollector {

    static CONFIG = {
        id: "seatable",
        name: "SeaTable",
        description: "i18n.collectors.seatable.description",
        version: "0",
        website: "https://cloud.seatable.io/org/chargebee/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1234136.jpg",
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
        entryUrl: "https://cloud.seatable.io/org/chargebee/",
    }

    constructor() {
        super(SeatableCollector.CONFIG);
    }
}
