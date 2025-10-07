
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnviaTelPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "envia_tel_portal",
        name: "Envia TEL-Portal",
        description: "i18n.collectors.envia_tel_portal.description",
        version: "0",
        website: "https://portal.enviatel.de/rechnungen_verbrauch/rechnungen/2019/7/Stammdaten::Bill/10217568",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159734.jpg",
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
        entryUrl: "https://portal.enviatel.de/rechnungen_verbrauch/rechnungen/2019/7/Stammdaten::Bill/10217568",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnviaTelPortalCollector.CONFIG);
    }
}
