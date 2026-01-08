
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IDeGrupoIberdrolaCollector extends SketchCollector {

    static CONFIG = {
        id: "i_de_grupo_iberdrola",
        name: "I-DE Grupo Iberdrola",
        description: "i18n.collectors.i_de_grupo_iberdrola.description",
        version: "0",
        website: "https://www.i-de.es/consumidores/web/home/contract/consumption-electronic-bill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4420595.jpg",
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
        loginUrl: "https://www.i-de.es/consumidores/web/home/contract/consumption-electronic-bill",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IDeGrupoIberdrolaCollector.CONFIG);
    }
}
