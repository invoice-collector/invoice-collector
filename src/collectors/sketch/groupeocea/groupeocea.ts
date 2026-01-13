import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GroupeOceaCollector extends SketchCollector {

    static CONFIG = {
        id: "groupeocea",
        name: "Groupe OCEA",
        description: "i18n.collectors.groupeocea.description",
        version: "0",
        website: "https://groupe-ocea.fr",
        logo: "https://www.ecobatiment-cluster.fr/app/uploads/Group-ocea-redimensionne.png",
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
        loginUrl: "https://isihabitat.ocea-sb.com/documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GroupeOceaCollector.CONFIG);
    }
}
