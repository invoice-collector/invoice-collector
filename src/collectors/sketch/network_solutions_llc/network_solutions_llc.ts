
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NetworkSolutionsLlcCollector extends SketchCollector {

    static CONFIG = {
        id: "network_solutions_llc",
        name: "Network Solutions LLC",
        description: "i18n.collectors.network_solutions_llc.description",
        version: "0",
        website: "https://www.networksolutions.com/manage-it/billing-history.jsp?1table_35527700__open=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236274.jpg",
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
        loginUrl: "https://www.networksolutions.com/manage-it/billing-history.jsp?1table_35527700__open=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetworkSolutionsLlcCollector.CONFIG);
    }
}
