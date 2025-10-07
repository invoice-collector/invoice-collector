
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BrytSoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "bryt_software",
        name: "Bryt Software",
        description: "i18n.collectors.bryt_software.description",
        version: "0",
        website: "https://client.brytsoftware.com/Account/LogIn?ReturnUrl=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1222403.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://client.brytsoftware.com/Account/LogIn?ReturnUrl=%2F",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrytSoftwareCollector.CONFIG);
    }
}
