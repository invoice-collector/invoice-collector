
import { SketchCollector } from '../../sketchCollector';

export class CozigouCollector extends SketchCollector {

    static CONFIG = {
        id: "cozigou",
        name: "COZIGOU",
        description: "i18n.collectors.cozigou.description",
        version: "0",
        website: "https://client.cozigou.com/invoice/history/index/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4100538.jpg",
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
        entryUrl: "https://client.cozigou.com/invoice/history/index/",
    }

    constructor() {
        super(CozigouCollector.CONFIG);
    }
}
