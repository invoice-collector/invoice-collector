
import { SketchCollector } from '../../sketchCollector';

export class PortalDerBitelGesellschaftFurTelekommunikationMbhCollector extends SketchCollector {

    static CONFIG = {
        id: "portal_der_bitel_gesellschaft_fur_telekommunikation_mbh",
        name: "Portal der BITel Gesellschaft fur Telekommunikation mbH",
        description: "i18n.collectors.portal_der_bitel_gesellschaft_fur_telekommunikation_mbh.description",
        version: "0",
        website: "https://portal.meinbitel.net/customer/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/245906.jpg",
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
        entryUrl: "https://portal.meinbitel.net/customer/dashboard",
    }

    constructor() {
        super(PortalDerBitelGesellschaftFurTelekommunikationMbhCollector.CONFIG);
    }
}
