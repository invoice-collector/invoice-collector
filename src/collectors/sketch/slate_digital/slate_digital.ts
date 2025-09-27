
import { SketchCollector } from '../../sketchCollector';

export class SlateDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "slate_digital",
        name: "Slate Digital",
        description: "i18n.collectors.slate_digital.description",
        version: "0",
        website: "https://app.completeaccess.audio/users/11555379/account-info",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4267393.jpg",
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
        entryUrl: "https://app.completeaccess.audio/users/11555379/account-info",
    }

    constructor() {
        super(SlateDigitalCollector.CONFIG);
    }
}
