
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleApicilPartenaireCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_apicil_partenaire",
        name: "Mutuelle Apicil - partenaire",
        description: "i18n.collectors.mutuelle_apicil_partenaire.description",
        version: "0",
        website: "https://auth-partenaire.apicil.com/cas/login?url=aHR0cHM6Ly9wYXJ0ZW5haXJlLmFwaWNpbC5jb20v&skin=apicil&service=https%3A%2F%2Fpartenaire.apicil.com%2Fc%2Fportal%2Flogin%3Fredirect%3D%252F%26p_l_id%3D4946734",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125652.jpg",
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
        loginUrl: "https://auth-partenaire.apicil.com/cas/login?url=aHR0cHM6Ly9wYXJ0ZW5haXJlLmFwaWNpbC5jb20v&skin=apicil&service=https%3A%2F%2Fpartenaire.apicil.com%2Fc%2Fportal%2Flogin%3Fredirect%3D%252F%26p_l_id%3D4946734",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleApicilPartenaireCollector.CONFIG);
    }
}
