
import { SketchCollector } from '../../sketchCollector';

export class MichaelTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "michael_telecom",
        name: "MICHAEL TELECOM",
        description: "i18n.collectors.michael_telecom.description",
        version: "0",
        website: "https://www.michael-telecom.de/kundencenter/auftragsstatus/rechnungs-uebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71721.jpg",
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
        entryUrl: "https://www.michael-telecom.de/kundencenter/auftragsstatus/rechnungs-uebersicht",
    }

    constructor() {
        super(MichaelTelecomCollector.CONFIG);
    }
}
