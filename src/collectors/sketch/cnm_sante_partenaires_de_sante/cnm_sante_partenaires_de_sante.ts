
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CnmSantePartenairesDeSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "cnm_sante_partenaires_de_sante",
        name: "CNM Sante - Partenaires de sante",
        description: "i18n.collectors.cnm_sante_partenaires_de_sante.description",
        version: "0",
        website: "https://monespacepersonnel.cimut.net/web/cnm-partenaire",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123803.jpg",
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
        entryUrl: "https://monespacepersonnel.cimut.net/web/cnm-partenaire",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CnmSantePartenairesDeSanteCollector.CONFIG);
    }
}
