
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _123pneusFrCollector extends SketchCollector {

    static CONFIG = {
        id: "123pneus_fr",
        name: "123Pneus.fr",
        description: "i18n.collectors.123pneus_fr.description",
        version: "0",
        website: "https://www.123pneus.fr/cgi-bin/my-account.pl?dsco=125",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115880.jpg",
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
        entryUrl: "https://www.123pneus.fr/cgi-bin/my-account.pl?dsco=125",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_123pneusFrCollector.CONFIG);
    }
}
