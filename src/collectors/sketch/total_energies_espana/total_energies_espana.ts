
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TotalEnergiesEspanaCollector extends SketchCollector {

    static CONFIG = {
        id: "total_energies_espana",
        name: "Total Energies Espana",
        description: "i18n.collectors.total_energies_espana.description",
        version: "0",
        website: "https://clientes.totalenergies.es/area-online/facturacion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2781397.jpg",
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
        entryUrl: "https://clientes.totalenergies.es/area-online/facturacion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TotalEnergiesEspanaCollector.CONFIG);
    }
}
