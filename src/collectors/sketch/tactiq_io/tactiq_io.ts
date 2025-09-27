
import { SketchCollector } from '../../sketchCollector';

export class TactiqIoCollector extends SketchCollector {

    static CONFIG = {
        id: "tactiq_io",
        name: "Tactiq.io",
        description: "i18n.collectors.tactiq_io.description",
        version: "0",
        website: "https://app.tactiq.io/#/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2975188.jpg",
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
        entryUrl: "https://app.tactiq.io/#/signin",
    }

    constructor() {
        super(TactiqIoCollector.CONFIG);
    }
}
