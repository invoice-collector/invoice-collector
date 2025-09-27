
import { SketchCollector } from '../../sketchCollector';

export class VideotronBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "videotron_business",
        name: "Videotron - Business",
        description: "i18n.collectors.videotron_business.description",
        version: "0",
        website: "https://videotron.com/business/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78086.jpg",
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
        entryUrl: "https://videotron.com/business/",
    }

    constructor() {
        super(VideotronBusinessCollector.CONFIG);
    }
}
