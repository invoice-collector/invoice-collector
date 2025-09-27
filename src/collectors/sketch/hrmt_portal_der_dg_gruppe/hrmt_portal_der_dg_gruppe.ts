
import { SketchCollector } from '../../sketchCollector';

export class HrmtPortalDerDgGruppeCollector extends SketchCollector {

    static CONFIG = {
        id: "hrmt_portal_der_dg_gruppe",
        name: "HRMT Portal der DG Gruppe",
        description: "i18n.collectors.hrmt_portal_der_dg_gruppe.description",
        version: "0",
        website: "https://portal.hrmt.de/Dokumente/Arbeitgeber",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200385.jpg",
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
        entryUrl: "https://portal.hrmt.de/Dokumente/Arbeitgeber",
    }

    constructor() {
        super(HrmtPortalDerDgGruppeCollector.CONFIG);
    }
}
