
import { SketchCollector } from '../../sketchCollector';

export class OutbrainCollector extends SketchCollector {

    static CONFIG = {
        id: "outbrain",
        name: "Outbrain",
        description: "i18n.collectors.outbrain.description",
        version: "0",
        website: "https://my.outbrain.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7099.jpg",
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
        entryUrl: "https://my.outbrain.com/",
    }

    constructor() {
        super(OutbrainCollector.CONFIG);
    }
}
