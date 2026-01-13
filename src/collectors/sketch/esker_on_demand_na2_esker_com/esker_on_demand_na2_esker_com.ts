
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EskerOnDemandNa2EskerComCollector extends SketchCollector {

    static CONFIG = {
        id: "esker_on_demand_na2_esker_com",
        name: "Esker on Demand - na2.esker.com",
        description: "i18n.collectors.esker_on_demand_na2_esker_com.description",
        version: "0",
        website: "https://na2.esker.com/ondemand/webaccess/asc/documents.aspx?Target=adminList&ViewId=182410030&tab=182410008",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69468.jpg",
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
        loginUrl: "https://na2.esker.com/ondemand/webaccess/asc/documents.aspx?Target=adminList&ViewId=182410030&tab=182410008",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EskerOnDemandNa2EskerComCollector.CONFIG);
    }
}
