
import { SketchCollector } from '../../sketchCollector';

export class UscreenIoCollector extends SketchCollector {

    static CONFIG = {
        id: "uscreen_io",
        name: "Uscreen.io",
        description: "i18n.collectors.uscreen_io.description",
        version: "0",
        website: "https://www.uscreen.io/admin/billings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1122486.jpg",
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
        entryUrl: "https://www.uscreen.io/admin/billings",
    }

    constructor() {
        super(UscreenIoCollector.CONFIG);
    }
}
