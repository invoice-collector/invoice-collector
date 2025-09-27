
import { SketchCollector } from '../../sketchCollector';

export class MatmutAttestationsDAssuranceCollector extends SketchCollector {

    static CONFIG = {
        id: "matmut_attestations_d_assurance",
        name: "Matmut (attestations d\'assurance)",
        description: "i18n.collectors.matmut_attestations_d_assurance.description",
        version: "0",
        website: "https://www.matmut.fr/app/loginrsp/login/index.mcp?returnurl=https%3A%2F%2Fwww.matmut.fr%2Fapp%2FSPAEspaceSocietaireInternet%2F%23!%2Faccueil&cookieCheck=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107839.jpg",
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
        entryUrl: "https://www.matmut.fr/app/loginrsp/login/index.mcp?returnurl=https%3A%2F%2Fwww.matmut.fr%2Fapp%2FSPAEspaceSocietaireInternet%2F%23!%2Faccueil&cookieCheck=true",
    }

    constructor() {
        super(MatmutAttestationsDAssuranceCollector.CONFIG);
    }
}
