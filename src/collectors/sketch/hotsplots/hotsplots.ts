
import { SketchCollector } from '../../sketchCollector';

export class HotsplotsCollector extends SketchCollector {

    static CONFIG = {
        id: "hotsplots",
        name: "Hotsplots",
        description: "i18n.collectors.hotsplots.description",
        version: "0",
        website: "https://www.hotsplots.de/kundenbereich.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23102.jpg",
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
        entryUrl: "https://www.hotsplots.de/kundenbereich.html",
    }

    constructor() {
        super(HotsplotsCollector.CONFIG);
    }
}
