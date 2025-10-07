
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleOcianeCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_ociane",
        name: "Mutuelle Ociane",
        description: "i18n.collectors.mutuelle_ociane.description",
        version: "0",
        website: "https://www.matmut.fr/app/loginrsp/login/index.mcp?returnurl=https%3A%2F%2Fwww.matmut.fr%2Fapp%2FSPAEspaceSocietaireInternet%2F%23!%2Faccueil",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130347.jpg",
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
        entryUrl: "https://www.matmut.fr/app/loginrsp/login/index.mcp?returnurl=https%3A%2F%2Fwww.matmut.fr%2Fapp%2FSPAEspaceSocietaireInternet%2F%23!%2Faccueil",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleOcianeCollector.CONFIG);
    }
}
