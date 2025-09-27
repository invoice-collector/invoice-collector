
import { SketchCollector } from '../../sketchCollector';

export class Barn2Collector extends SketchCollector {

    static CONFIG = {
        id: "barn2",
        name: "Barn2",
        description: "i18n.collectors.barn2.description",
        version: "0",
        website: "https://barn2.com/account/#orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2975262.jpg",
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
        entryUrl: "https://barn2.com/account/#orders",
    }

    constructor() {
        super(Barn2Collector.CONFIG);
    }
}
