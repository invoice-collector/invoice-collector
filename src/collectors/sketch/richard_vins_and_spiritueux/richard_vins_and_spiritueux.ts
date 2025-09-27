
import { SketchCollector } from '../../sketchCollector';

export class RichardVinsAndSpiritueuxCollector extends SketchCollector {

    static CONFIG = {
        id: "richard_vins_and_spiritueux",
        name: "Richard Vins & Spiritueux",
        description: "i18n.collectors.richard_vins_and_spiritueux.description",
        version: "0",
        website: "https://pro.vinsrichard.fr/vin/factures/view#bigbook",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220802.jpg",
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
        entryUrl: "https://pro.vinsrichard.fr/vin/factures/view#bigbook",
    }

    constructor() {
        super(RichardVinsAndSpiritueuxCollector.CONFIG);
    }
}
