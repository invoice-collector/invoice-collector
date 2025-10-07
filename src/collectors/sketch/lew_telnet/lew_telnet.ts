
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LewTelnetCollector extends SketchCollector {

    static CONFIG = {
        id: "lew_telnet",
        name: "LEW Telnet",
        description: "i18n.collectors.lew_telnet.description",
        version: "0",
        website: "https://telnet.lew.de/fuer-geschaeftskunden/kundenportal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079801.jpg",
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
        entryUrl: "https://telnet.lew.de/fuer-geschaeftskunden/kundenportal",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LewTelnetCollector.CONFIG);
    }
}
