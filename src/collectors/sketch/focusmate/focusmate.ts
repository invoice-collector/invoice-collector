
import { SketchCollector } from '../../sketchCollector';

export class FocusmateCollector extends SketchCollector {

    static CONFIG = {
        id: "focusmate",
        name: "Focusmate",
        description: "i18n.collectors.focusmate.description",
        version: "0",
        website: "https://app.focusmate.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732071.jpg",
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
        entryUrl: "https://app.focusmate.com/login",
    }

    constructor() {
        super(FocusmateCollector.CONFIG);
    }
}
