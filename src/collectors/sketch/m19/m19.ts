
import { SketchCollector } from '../../sketchCollector';

export class M19Collector extends SketchCollector {

    static CONFIG = {
        id: "m19",
        name: "M19",
        description: "i18n.collectors.m19.description",
        version: "0",
        website: "https://board.m19.com/#/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779714.jpg",
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
        entryUrl: "https://board.m19.com/#/billing",
    }

    constructor() {
        super(M19Collector.CONFIG);
    }
}
