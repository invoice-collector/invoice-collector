
import { SketchCollector } from '../../sketchCollector';

export class OnstipeCollector extends SketchCollector {

    static CONFIG = {
        id: "onstipe",
        name: "Onstipe",
        description: "i18n.collectors.onstipe.description",
        version: "0",
        website: "https://onstipe.com/web/stipe",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439534.jpg",
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
        entryUrl: "https://onstipe.com/web/stipe",
    }

    constructor() {
        super(OnstipeCollector.CONFIG);
    }
}
