
import { SketchCollector } from '../../sketchCollector';

export class MunicallPartnerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "municall_partnerportal",
        name: "Municall Partnerportal",
        description: "i18n.collectors.municall_partnerportal.description",
        version: "0",
        website: "https://partner.municall.de/finance/abrechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4355585.jpg",
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
        entryUrl: "https://partner.municall.de/finance/abrechnungen",
    }

    constructor() {
        super(MunicallPartnerportalCollector.CONFIG);
    }
}
