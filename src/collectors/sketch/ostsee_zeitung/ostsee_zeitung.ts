
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OstseeZeitungCollector extends SketchCollector {

    static CONFIG = {
        id: "ostsee_zeitung",
        name: "Ostsee-Zeitung",
        description: "i18n.collectors.ostsee_zeitung.description",
        version: "0",
        website: "https://service.ostsee-zeitung.de/sap(cz1TSUQlM2FBTk9OJTNhdmdtdmdtYTFfVkdNXzAwJTNhVzdkREExSnlPa29GeEZqVzJrZFNXdTB2b2R4M2Z1M0RwOFRsamJHNS1BVFQ=)/bc/gui/sap/its/zabo020/~flNUQVRFPTE4MDUyODc1Mi4wMDMuMDIuMDI=?~okcode=FABO_PRINT_SEL&gs_ws_abo_rechn-html_char-a",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1918682.jpg",
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
        entryUrl: "https://service.ostsee-zeitung.de/sap(cz1TSUQlM2FBTk9OJTNhdmdtdmdtYTFfVkdNXzAwJTNhVzdkREExSnlPa29GeEZqVzJrZFNXdTB2b2R4M2Z1M0RwOFRsamJHNS1BVFQ=)/bc/gui/sap/its/zabo020/~flNUQVRFPTE4MDUyODc1Mi4wMDMuMDIuMDI=?~okcode=FABO_PRINT_SEL&gs_ws_abo_rechn-html_char-a",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OstseeZeitungCollector.CONFIG);
    }
}
