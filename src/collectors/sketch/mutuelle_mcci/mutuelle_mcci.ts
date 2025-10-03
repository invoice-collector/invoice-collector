
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleMcciCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_mcci",
        name: "Mutuelle MCCI",
        description: "i18n.collectors.mutuelle_mcci.description",
        version: "0",
        website: "https://www.mcci.fr/php/adherent.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129548.jpg",
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
        entryUrl: "https://www.mcci.fr/php/adherent.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleMcciCollector.CONFIG);
    }
}
