
import { SketchCollector } from '../../sketchCollector';

export class UemElectriciteDeMetzCollector extends SketchCollector {

    static CONFIG = {
        id: "uem_electricite_de_metz",
        name: "UEM - Electricite de Metz",
        description: "i18n.collectors.uem_electricite_de_metz.description",
        version: "0",
        website: "https://monagence.uem-metz.fr/efluidAEL/jsp/arc/habilitation/login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26986.jpg",
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
        entryUrl: "https://monagence.uem-metz.fr/efluidAEL/jsp/arc/habilitation/login.jsp",
    }

    constructor() {
        super(UemElectriciteDeMetzCollector.CONFIG);
    }
}
