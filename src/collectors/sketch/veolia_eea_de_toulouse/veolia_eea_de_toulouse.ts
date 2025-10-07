
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VeoliaEeaDeToulouseCollector extends SketchCollector {

    static CONFIG = {
        id: "veolia_eea_de_toulouse",
        name: "Veolia - Eea de Toulouse",
        description: "i18n.collectors.veolia_eea_de_toulouse.description",
        version: "0",
        website: "https://www.service.eau.veolia.fr/home/espace-client/vos-factures-et-correspondances.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2225198.jpg",
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
        entryUrl: "https://www.service.eau.veolia.fr/home/espace-client/vos-factures-et-correspondances.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VeoliaEeaDeToulouseCollector.CONFIG);
    }
}
