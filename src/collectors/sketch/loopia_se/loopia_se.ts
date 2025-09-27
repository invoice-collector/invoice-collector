
import { SketchCollector } from '../../sketchCollector';

export class LoopiaSeCollector extends SketchCollector {

    static CONFIG = {
        id: "loopia_se",
        name: "Loopia.se",
        description: "i18n.collectors.loopia_se.description",
        version: "0",
        website: "https://customerzone.loopia.se/invoice/pdf/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9573.jpg",
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
        entryUrl: "https://customerzone.loopia.se/invoice/pdf/",
    }

    constructor() {
        super(LoopiaSeCollector.CONFIG);
    }
}
