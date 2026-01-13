
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HanseMerkurVertriebsportalCollector extends SketchCollector {

    static CONFIG = {
        id: "hanse_merkur_vertriebsportal",
        name: "Hanse Merkur Vertriebsportal",
        description: "i18n.collectors.hanse_merkur_vertriebsportal.description",
        version: "0",
        website: "https://secure.hansemerkur-vertriebsportal.de/service/anwendungen/dokumentencenter",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387796.jpg",
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
        loginUrl: "https://secure.hansemerkur-vertriebsportal.de/service/anwendungen/dokumentencenter",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HanseMerkurVertriebsportalCollector.CONFIG);
    }
}
