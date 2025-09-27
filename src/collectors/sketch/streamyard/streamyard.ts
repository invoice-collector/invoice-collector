
import { SketchCollector } from '../../sketchCollector';

export class StreamyardCollector extends SketchCollector {

    static CONFIG = {
        id: "streamyard",
        name: "Streamyard",
        description: "i18n.collectors.streamyard.description",
        version: "0",
        website: "https://streamyard.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534941.jpg",
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
        entryUrl: "https://streamyard.com/account/billing",
    }

    constructor() {
        super(StreamyardCollector.CONFIG);
    }
}
