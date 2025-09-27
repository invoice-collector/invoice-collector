
import { SketchCollector } from '../../sketchCollector';

export class ClockodoCollector extends SketchCollector {

    static CONFIG = {
        id: "clockodo",
        name: "Clockodo",
        description: "i18n.collectors.clockodo.description",
        version: "0",
        website: "https://my.clockodo.com/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3833.jpg",
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
        entryUrl: "https://my.clockodo.com/de",
    }

    constructor() {
        super(ClockodoCollector.CONFIG);
    }
}
