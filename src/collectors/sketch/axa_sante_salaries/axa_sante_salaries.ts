
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AxaSanteSalariesCollector extends SketchCollector {

    static CONFIG = {
        id: "axa_sante_salaries",
        name: "Axa Sante Salaries",
        description: "i18n.collectors.axa_sante_salaries.description",
        version: "0",
        website: "https://entreprise.axa.fr/espace-client.html#panel2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123806.jpg",
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
        entryUrl: "https://entreprise.axa.fr/espace-client.html#panel2",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AxaSanteSalariesCollector.CONFIG);
    }
}
