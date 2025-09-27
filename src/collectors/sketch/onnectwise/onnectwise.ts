
import { SketchCollector } from '../../sketchCollector';

export class OnnectwiseCollector extends SketchCollector {

    static CONFIG = {
        id: "onnectwise",
        name: "onnectWise",
        description: "i18n.collectors.onnectwise.description",
        version: "0",
        website: "https://cw.connectwise.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/146193.jpg",
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
        entryUrl: "https://cw.connectwise.net/",
    }

    constructor() {
        super(OnnectwiseCollector.CONFIG);
    }
}
