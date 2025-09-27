
import { SketchCollector } from '../../sketchCollector';

export class EdfEntreprisesEtCollectivitesCollector extends SketchCollector {

    static CONFIG = {
        id: "edf_entreprises_et_collectivites",
        name: "EDF entreprises et collectivites",
        description: "i18n.collectors.edf_entreprises_et_collectivites.description",
        version: "0",
        website: "https://entreprises-collectivites.edf.fr/espaceclient/s/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2550877.jpg",
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
        entryUrl: "https://entreprises-collectivites.edf.fr/espaceclient/s/factures",
    }

    constructor() {
        super(EdfEntreprisesEtCollectivitesCollector.CONFIG);
    }
}
