
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FoodiCollector extends SketchCollector {

    static CONFIG = {
        id: "foodi",
        name: "Foodi",
        description: "i18n.collectors.foodi.description",
        version: "0",
        website: "https://login.foodi.fr/login?state=hKFo2SBIZkNDd01aWVg1Qkg0OUp0N2RybWk5STZkVVFKZnh2R6FupWxvZ2luo3RpZNkgV3NHaEhsTUFXc19ZaWJmcG9MWDdMS1RTZVoxeGZRaVGjY2lk2SBrYldHUnM1enFGYnJJQ3dMYTF4cWd2cVRoclRkeVVTag&client=kbWGRs5zqFbrICwLa1xqgvqThrTdyUSj&protocol=oauth2&p",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040938.jpg",
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
        loginUrl: "https://login.foodi.fr/login?state=hKFo2SBIZkNDd01aWVg1Qkg0OUp0N2RybWk5STZkVVFKZnh2R6FupWxvZ2luo3RpZNkgV3NHaEhsTUFXc19ZaWJmcG9MWDdMS1RTZVoxeGZRaVGjY2lk2SBrYldHUnM1enFGYnJJQ3dMYTF4cWd2cVRoclRkeVVTag&client=kbWGRs5zqFbrICwLa1xqgvqThrTdyUSj&protocol=oauth2&p",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FoodiCollector.CONFIG);
    }
}
