
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DomainfactoryCollector extends SketchCollector {

    static CONFIG = {
        id: "domainfactory",
        name: "DomainFactory",
        description: "i18n.collectors.domainfactory.description",
        version: "0",
        website: "https://sso.df.eu/?app=cp&path=%2Fkunde%2Findex.php5&realm=idp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/335.jpg",
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
        loginUrl: "https://sso.df.eu/?app=cp&path=%2Fkunde%2Findex.php5&realm=idp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DomainfactoryCollector.CONFIG);
    }
}
