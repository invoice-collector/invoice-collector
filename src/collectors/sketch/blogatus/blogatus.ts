
import { SketchCollector } from '../../sketchCollector';

export class BlogatusCollector extends SketchCollector {

    static CONFIG = {
        id: "blogatus",
        name: "blogatus",
        description: "i18n.collectors.blogatus.description",
        version: "0",
        website: "https://blogatus.com/publisher/gutschriften",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14502.jpg",
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
        entryUrl: "https://blogatus.com/publisher/gutschriften",
    }

    constructor() {
        super(BlogatusCollector.CONFIG);
    }
}
