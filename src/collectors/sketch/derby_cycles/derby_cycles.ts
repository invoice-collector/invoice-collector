
import { SketchCollector } from '../../sketchCollector';

export class DerbyCyclesCollector extends SketchCollector {

    static CONFIG = {
        id: "derby_cycles",
        name: "Derby Cycles",
        description: "i18n.collectors.derby_cycles.description",
        version: "0",
        website: "https://www.derby-cycle-dealer.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1052831.jpg",
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
        entryUrl: "https://www.derby-cycle-dealer.com/de/",
    }

    constructor() {
        super(DerbyCyclesCollector.CONFIG);
    }
}
