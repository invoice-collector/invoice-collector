
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IberdrolaEsCollector extends SketchCollector {

    static CONFIG = {
        id: "iberdrola_es",
        name: "Iberdrola (.es)",
        description: "i18n.collectors.iberdrola_es.description",
        version: "0",
        website: "https://www.iberdrola.es/webclifr/mac/#/misfacturas/evolucionFacturacion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153978.jpg",
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
        entryUrl: "https://www.iberdrola.es/webclifr/mac/#/misfacturas/evolucionFacturacion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IberdrolaEsCollector.CONFIG);
    }
}
