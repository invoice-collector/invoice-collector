
import { SketchCollector } from '../../sketchCollector';

export class WmfCollector extends SketchCollector {

    static CONFIG = {
        id: "wmf",
        name: "WMF",
        description: "i18n.collectors.wmf.description",
        version: "0",
        website: "http://www.wmf.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27511.jpg",
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
        entryUrl: "http://www.wmf.de",
    }

    constructor() {
        super(WmfCollector.CONFIG);
    }
}
