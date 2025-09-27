
import { SketchCollector } from '../../sketchCollector';

export class LewTelnetKundenportalPrivatkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "lew_telnet_kundenportal_privatkunden",
        name: "LEW TelNet - Kundenportal Privatkunden",
        description: "i18n.collectors.lew_telnet_kundenportal_privatkunden.description",
        version: "0",
        website: "https://kundenportal.lew-highspeed.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1802868.jpg",
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
        entryUrl: "https://kundenportal.lew-highspeed.de/",
    }

    constructor() {
        super(LewTelnetKundenportalPrivatkundenCollector.CONFIG);
    }
}
