
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GigasatServProcDeDadosLtdaCollector extends SketchCollector {

    static CONFIG = {
        id: "gigasat_serv_proc_de_dados_ltda",
        name: "Gigasat Serv Proc. de dados ltda",
        description: "i18n.collectors.gigasat_serv_proc_de_dados_ltda.description",
        version: "0",
        website: "https://gigasat.com.br/web/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413118.jpg",
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
        loginUrl: "https://gigasat.com.br/web/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GigasatServProcDeDadosLtdaCollector.CONFIG);
    }
}
