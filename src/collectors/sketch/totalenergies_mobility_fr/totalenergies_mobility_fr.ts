
import { SketchCollector } from '../../sketchCollector';

export class TotalenergiesMobilityFrCollector extends SketchCollector {

    static CONFIG = {
        id: "totalenergies_mobility_fr",
        name: "Totalenergies mobility FR",
        description: "i18n.collectors.totalenergies_mobility_fr.description",
        version: "0",
        website: "https://client.mobility.totalenergies.com/group/france/suppliers-contracts?showTotalSupplierContractualDoc=showPiecesJointesNotesTab",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798003.jpg",
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
        entryUrl: "https://client.mobility.totalenergies.com/group/france/suppliers-contracts?showTotalSupplierContractualDoc=showPiecesJointesNotesTab",
    }

    constructor() {
        super(TotalenergiesMobilityFrCollector.CONFIG);
    }
}
