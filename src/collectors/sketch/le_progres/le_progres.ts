
import { SketchCollector } from '../../sketchCollector';

export class LeProgresCollector extends SketchCollector {

    static CONFIG = {
        id: "le_progres",
        name: "Le Progres",
        description: "i18n.collectors.le_progres.description",
        version: "0",
        website: "https://c.leprogres.fr/espace-client/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1445456.jpg",
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
        entryUrl: "https://c.leprogres.fr/espace-client/mes-factures",
    }

    constructor() {
        super(LeProgresCollector.CONFIG);
    }
}
