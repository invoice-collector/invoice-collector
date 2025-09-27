
import { SketchCollector } from '../../sketchCollector';

export class MmaContratsCollector extends SketchCollector {

    static CONFIG = {
        id: "mma_contrats",
        name: "MMA Contrats",
        description: "i18n.collectors.mma_contrats.description",
        version: "0",
        website: "https://espace-client.mma.fr/authenticationForm/compteClientLogin/index?nexturl=https%3A%2F%2Fespace-client.mma.fr%2Fconnaissance-client%2Fsynthese&domain=client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107151.jpg",
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
        entryUrl: "https://espace-client.mma.fr/authenticationForm/compteClientLogin/index?nexturl=https%3A%2F%2Fespace-client.mma.fr%2Fconnaissance-client%2Fsynthese&domain=client",
    }

    constructor() {
        super(MmaContratsCollector.CONFIG);
    }
}
