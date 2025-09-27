
import { SketchCollector } from '../../sketchCollector';

export class WisepopsCollector extends SketchCollector {

    static CONFIG = {
        id: "wisepops",
        name: "Wisepops",
        description: "i18n.collectors.wisepops.description",
        version: "0",
        website: "https://app.wisepops.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159725.jpg",
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
        entryUrl: "https://app.wisepops.com/login",
    }

    constructor() {
        super(WisepopsCollector.CONFIG);
    }
}
