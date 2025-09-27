
import { SketchCollector } from '../../sketchCollector';

export class EcaassurancesCollector extends SketchCollector {

    static CONFIG = {
        id: "ecaassurances",
        name: "EcaAssurances",
        description: "i18n.collectors.ecaassurances.description",
        version: "0",
        website: "https://espaceclient.eca-assurances.com/espace-client/login.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125334.jpg",
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
        entryUrl: "https://espaceclient.eca-assurances.com/espace-client/login.xhtml",
    }

    constructor() {
        super(EcaassurancesCollector.CONFIG);
    }
}
