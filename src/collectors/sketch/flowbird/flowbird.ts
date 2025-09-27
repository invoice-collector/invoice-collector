
import { SketchCollector } from '../../sketchCollector';

export class FlowbirdCollector extends SketchCollector {

    static CONFIG = {
        id: "flowbird",
        name: "Flowbird",
        description: "i18n.collectors.flowbird.description",
        version: "0",
        website: "https://my.flowbirdapp.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079797.jpg",
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
        entryUrl: "https://my.flowbirdapp.com",
    }

    constructor() {
        super(FlowbirdCollector.CONFIG);
    }
}
